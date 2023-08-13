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
    const notes = NotesApi.getAllNotes();
    // // set notes:
    this._setNotes(notes);
    // // set active note:
    if (this.notes.length > 0) {
      this._setActiveNotes(notes[0]);
    }
  }
  _setNotes(notes) {
    this.notes = notes;
    // add noteList items to dom
    this.view.updateNoteList(notes);
    this.view.updateNotePreviewVisibility(notes.length > 0);
  }
  _setActiveNotes(note) {
    this.activeNote = note;
    this.view.updateActiveNote(note);
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
        this._setActiveNotes(selectedNote);
      },
      onNoteDelete: (noteId) => {
        NotesApi.deleteNote(noteId);
        this._refreshNotes();
      },
    };
  }
}
