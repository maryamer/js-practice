const notes = [
  {
    id: 1,
    title: "first note",
    body: "some dummy text first",
    updated: "2023-10-31T15:02:00.411Z",
  },
  {
    id: 2,
    title: "second note",
    body: "some dummy text second",
    updated: "2020-10-31T15:03:23.556Z",
  },
  {
    id: 3,
    title: "third note",
    body: "this is third note",
    updated: "2021-11-01T10:47:26.889Z",
  },
];
// localStorage.setItem("notes-app", JSON.stringify(notes));
// get save and delete notes class
export default class NotesApi {
  static getAllNotes() {
    // const saveNotes = notes || [];
    const saveNotes = JSON.parse(localStorage.getItem("notes-app")) || [];
    return saveNotes.sort((a, b) => {
      return new Date(b.updated) - new Date(a.updated);
    });
  }
  static saveNote(noteToSave) {
    // 1.exist 2. or not
    const notes = NotesApi.getAllNotes();
    const existedNote = notes.find((n) => n.id == noteToSave.id);
    if (existedNote) {
      existedNote.title = noteToSave.title;
      existedNote.body = noteToSave.body;
      existedNote.updated = new Date().toISOString();
    } else {
      noteToSave.id = new Date().getTime();
      noteToSave.updated = new Date().toISOString();
      notes.push(noteToSave);
    }
    localStorage.setItem("notes-app", JSON.stringify(notes));
    return NotesApi.getAllNotes();
  }
  static deleteNote(id) {
    const notes = NotesApi.getAllNotes();
    const filteredNotes = notes.filter((n) => n.id != id);
    localStorage.setItem("notes-app", JSON.stringify(filteredNotes));
    return NotesApi.getAllNotes();
  }
}
