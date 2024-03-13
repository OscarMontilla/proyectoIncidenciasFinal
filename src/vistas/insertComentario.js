import { comentariosTickets} from "../comentarios/comentariosTickets.js"

export const insertComentario= {
    template: `
    <div id="comentario"></div>
    `,
    script: () => {
      document.querySelector('#comentario').innerHTML = comentariosTickets.template
      comentariosTickets.script()
    }
}