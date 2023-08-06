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

// get save and delete notes class
class NotesApi {
  static getAllNotes() {
    const saveNotes = notes || [];
    // const saveNotes = JSON.parse(localStorage.getItem("notes,-app")) || [];
    return saveNotes.sort((a, b) => {
      return new Date(b.updated) - new Date(a.updated);
    });
  }
  static saveNote() {}
  static deleteNote() {}
}
// console.log(NotesApi.getAllNotes());
