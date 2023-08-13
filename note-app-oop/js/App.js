import NotesApi from "./NotesAPI.js";
import NotesView from "./NotesView.js";

export default class App {
  constructor(root) {
    this.notes = [];
    this.activeNote = null;
    this.view = new NotesView(root, this._handlers());
    this._refreshNotes();
  }
  _refreshNotes() {
    // // set notes:
    this.notes = NotesApi.getAllNotes();
    // add noteList items to dom
    this.view.updateNoteList(this.notes);
    this.view.updateNotePreviewVisibility(this.notes.length > 0);
    // // set active note:
    this.activeNote = this.notes[0];
    this.view.updateActiveNote(this.notes[0]);
  }
  _handlers() {
    return {
      onNoteAdd: () => {
        const newNote = {
          title: "new Note Title",
          body: "body",
        };
        NotesApi.saveNote(newNote);
        this._refreshNotes();
      },
      onNoteEdit: (newTitle, newBody) => {
        NotesApi.saveNote({
          id: this.activeNote.id,
          title: newTitle,
          body: newBody,
        });
        this._refreshNotes();
      },
      onNoteSelect: (noteId) => {
        console.log(noteId);
        // select => selected class add, title , body => preview update
        const selectedNote = this.notes.find((item) => item.id == noteId);
        this.activeNote = selectedNote;
        this.view.updateActiveNote(selectedNote);
      },
      onNoteDelete: (noteId) => {
        console.log(noteId);
      },
    };
  }
}
