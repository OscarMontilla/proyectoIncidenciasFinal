import { bd } from "../bd/bdComentarios";
import { insertComentario } from "./insertComentario";

export const vistaComentarioTickets= {
    template: `
  
  <h2 class="my-4">Código ticket: <span id="codigoTicket">123456</span></h2>
  <div class="">
    <form action="" class="form card p-3 shadow">
      <label for="comentario2" class="form-label">Comentario: </label>
      <textarea id="comentario2" class="form-control" col="3"></textarea>
      <label for="fecha" class="form-label me-2 mt-3">Fecha: </label>
      <div class="d-flex align-items-center">
        <input type="datetime-local" id="fecha" class="form-control w-25">
        <button id="btnAñadirComentario" class="btn btn-success ms-auto">Añadir comentario</button>
      </div>
    </form>
    <div id="comentario"></div>
    `,
    script: () => {
        const codigoTd = document.getElementById('codigoTicket');
        const comentarioTextarea = document.getElementById('comentario2');
        const fechaInput = document.getElementById('fecha');

        document.getElementById('btnAñadirComentario').addEventListener('click', () => {
            const codigo = codigoTd.textContent;
            const fecha = fechaInput.value;
            const descripcion = comentarioTextarea.value;

        
            const comentario = {
                codigo,
                fecha,
                contenido: descripcion,
                estado: 'Pendiente', 
            };

            bd.push(comentario);
                  
            document.querySelector('#comentario').innerHTML = insertComentario.template;
            insertComentario.script();
        });

    }
}