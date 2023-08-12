import NotesAPI from "./NotesAPI.js";
import NotesView from "./NotesView.js";
// NotesAPI.getAllNotes();
const app = document.getElementById("app");
// console.log(app.querySelector(".notes__add"));

const view = new NotesView(app, {
  onNoteAdd() {
    console.log("note has been added");
  },
  onNoteEdit(newTitle, newBody) {
    console.log(newTitle, newBody);
  },
});
