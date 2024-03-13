import { bd } from "../bd/bdComentarios.js";

export const comentario2 = (usuario, fecha, contenido) => {
    const template = `
        <div class="mt-4">
            <div class="card p-3">
                <h5 class="text-end">Autor: 
                    <span id="usuario">${usuario}</span>
                    <span id="fecha" class="ms-4">${fecha}</span>
                </h5>
                <p id="texto">${contenido}</p>
            </div>
        </div>
    `;
    return template;
}

export const comentarios2 = {
    template: `<div id="comentarios">Comentarios</div>`,
    script: () => {
        let html = '';

        bd.forEach(element => {
            html += comentario2(element.usuario, element.fecha, element.contenido);
        });
        
        document.querySelector('#comentarios').innerHTML = html;
    }
}
