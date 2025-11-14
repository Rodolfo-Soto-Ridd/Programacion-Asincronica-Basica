// Ejemplo de callback hell
function obtenerUsuario(id, callback) {
  setTimeout(() => {
    callback({ id, nombre: "Usuario " + id });
  }, 500);
}

function obtenerPostsUsuario(userId, callback) {
  setTimeout(() => {
    callback([
      { id: 1, titulo: "Post 1", userId },
      { id: 2, titulo: "Post 2", userId }
    ]);
  }, 500);
}

function obtenerComentariosPost(postId, callback) {
  setTimeout(() => {
    callback([
      { id: 1, texto: "Comentario 1", postId },
      { id: 2, texto: "Comentario 2", postId }
    ]);
  }, 500);
}

// Callback hell en acción
obtenerUsuario(1, (usuario) => {
  console.log("Usuario:", usuario);
  obtenerPostsUsuario(usuario.id, (posts) => {
    console.log("Posts:", posts);
    obtenerComentariosPost(posts[0].id, (comentarios) => {
      console.log("Comentarios:", comentarios);
      // Más callbacks aquí... ¡callback hell!
    });
  });
});