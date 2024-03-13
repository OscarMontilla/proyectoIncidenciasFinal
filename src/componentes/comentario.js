
export const comentario = (codigo, fecha, aula, grupo, ordenador, contenido, alumno, estado) => {
  const template = `
    <div class="mt-4">
      <div class="card p-3">
        <h5 class="text-end">
          <span class="usuario">${alumno}</span>
          <span class="fecha ms-4">${fecha}</span>
          <span class="codigo ms-4">${codigo}</span>
          <span class="aula ms-4">${aula}</span>
          <span class="grupo ms-4">${grupo}</span>
          <span class="ordenador ms-4">${ordenador}</span>
          <span class="descripcion ms-4">${contenido}</span>
          <span class="estado ms-4">${estado}</span>
        </h5>
        <p class="texto">${contenido}</p>
      </div>
    </div>
  `;
  return template;
};

 script: () => {
   
 }
