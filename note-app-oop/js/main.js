import App from "./App.js";
import NotesAPI from "./NotesAPI.js";
import NotesView from "./NotesView.js";
// NotesAPI.getAllNotes();
const root = document.getElementById("app");
const app = new App(root);

// const view = new NotesView(app, {
//   onNoteAdd() {
//     // console.log("note has been added");
//   },
//   onNoteEdit(newTitle, newBody) {
//     // console.log(newTitle, newBody);
//   },
//   onNoteSelect(noteId) {
//     console.log(noteId);
//     // select => selected class add, title , body => preview update
//     // view.updateActiveNote(note)
//   },
//   onNoteDelete(noteId) {
//     console.log(noteId);
//   },
// });

// view.updateNoteList(NotesAPI.getAllNotes());
// view.updateActiveNote(NotesAPI.getAllNotes()[2]);
