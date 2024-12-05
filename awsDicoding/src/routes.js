// src/routes.js
const routes = [
  {
    method: "POST",
    path: "/notes",
    handler: (request, h) => {
      const { title, tags, body } = request.payload;
      const id = Math.random().toString(36).substr(2, 9); // Contoh ID acak
      const createdAt = new Date().toISOString();
      const updatedAt = createdAt;

      const newNote = { id, title, tags, body, createdAt, updatedAt };
      notes.push(newNote);

      return h
        .response({
          status: "success",
          message: "Note added",
          data: { noteId: id },
        })
        .code(201);
    },
  },
  {
    method: "GET",
    path: "/notes",
    handler: (request, h) => {
      return { status: "success", data: { notes } };
    },
  },
  {
    method: "GET",
    path: "/notes/{id}",
    handler: (request, h) => {
      const { id } = request.params;
      const note = notes.find((note) => note.id === id);

      if (note) {
        return { status: "success", data: { note } };
      }

      return h
        .response({ status: "fail", message: "Note not found" })
        .code(404);
    },
  },
  {
    method: "PUT",
    path: "/notes/{id}",
    handler: (request, h) => {
      const { id } = request.params;
      const { title, tags, body } = request.payload;
      const updatedAt = new Date().toISOString();

      const index = notes.findIndex((note) => note.id === id);

      if (index !== -1) {
        notes[index] = { ...notes[index], title, tags, body, updatedAt };
        return { status: "success", message: "Note updated" };
      }

      return h
        .response({ status: "fail", message: "Note not found" })
        .code(404);
    },
  },
  {
    method: "DELETE",
    path: "/notes/{id}",
    handler: (request, h) => {
      const { id } = request.params;
      const index = notes.findIndex((note) => note.id === id);

      if (index !== -1) {
        notes.splice(index, 1);
        return { status: "success", message: "Note deleted" };
      }

      return h
        .response({ status: "fail", message: "Note not found" })
        .code(404);
    },
  },
];

module.exports = routes;
