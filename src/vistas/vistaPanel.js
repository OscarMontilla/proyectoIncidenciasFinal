import { tickets } from "../bd/tickets";
import { vistaTicket } from "./vistaTicket";
import { vistaComentarioTickets } from "./vistaComentarioTickets";
import { insertComentario } from "./insertComentario";

export const vistaPanel = {
    template: //html
    `
    <h1>Administración de incidencias</h1>
    <div><button id="nuevoTicket" class="btn btn-success mt-2" title="Nuevo ticket">Nuevo ticket</button></div>
    <h2 class="mt-5">Tickets pendientes</h2>
    <table class="table mt-4">
      <thead>
        <tr>
          <th>Código</th>
          <th>Fecha</th>
          <th>Aula</th>
          <th>Grupo</th>
          <th>Ordenador</th>
          <th>Descripción</th>
          <th>Alumno</th>
          <th>Estado</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody id="tablaPendiente">
      </tbody>
    </table>
    <h2 class="mt-5">Tickets resueltos</h2>
    <table class="table mt-4">
      <thead>
        <tr>
          <th>Código</th>
          <th>Fecha</th>
          <th>Aula</th>
          <th>Grupo</th>
          <th>Ordenador</th>
          <th>Descripción</th>
          <th>Alumno</th>
          <th>Estado</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody id="tablaResuelto">
      </tbody>
    </table>
    
    
    `,
    script: () => {
      let html = ``;
      let html2 = ``;
  
      tickets.forEach(element => {
          if (element.estado == 'Pendiente') {
              html += 
              `
              <tr class="tarea">
                  <td>${element.codigo}</td>
                  <td>${element.fecha}</td>
                  <td>${element.aula}</td>
                  <td>${element.grupo}</td>
                  <td>${element.ordenador}</td>
                  <td>${element.descripcion}</td>
                  <td>${element.alumno}</td>
                  <td>${element.estado}</td>
                  <td>
                      <button class="btn btn-success resolver" data-codigo="${element.codigo}" title="Resolver ticket">Resolver</button>
                  </td>
                  <td>
                      <button id="comentarios" class="btn btn-warning" title="Añadir comentario" data-bs-toggle="modal" data-bs-target="#exampleModal">
                          <i class="bi bi-pencil"></i>
                      </button>
                  </td>
                  <td>
                      <button id="verComentario" class="btn btn-info" title="Ver comentarios">
                          <i class="bi bi-chat-left-text"></i>
                      </button>
                  </td>
                  <td> 
                      <div >
                      <button id="eliminar" class="eliminar btn btn-danger" data-codigo="${element.codigo}" title="Eliminar ticket">
                      <i class="bi bi-trash3"></i>
                    </button>
                    
                      </div>
                  </td>
              </tr>
              `;
          }
  
          if (element.estado == 'Resuelto') {
              html2 += 
              `
              <tr class="tarea">
                  <td>${element.codigo}</td>
                  <td>${element.fecha}</td>
                  <td>${element.aula}</td>
                  <td>${element.grupo}</td>
                  <td>${element.ordenador}</td>
                  <td>${element.descripcion}</td>
                  <td>${element.alumno}</td>
                  <td>${element.estado}</td>
                  <td>
                      <button class="btn btn-success" title="Resolver ticket" disabled>Resuelto</button>
                  </td>
                  <td>
                      <button id="comentarios" class="btn btn-warning" title="Añadir comentario" data-bs-toggle="modal" data-bs-target="#exampleModal">
                          <i class="bi bi-pencil"></i>
                      </button>
                  </td>
                  <td>
                      <button id="verComentario" class="btn btn-info" title="Ver comentarios">
                          <i class="bi bi-chat-left-text"></i>
                      </button>
                  </td>
                  <td>
                      <div class="tarea">
                      <button id="eliminar" class="eliminar btn btn-danger" data-codigo="${element.codigo}" title="Eliminar ticket">
  <i class="bi bi-trash3"></i>
</button>

                    </div>
                  </td>
              </tr>
              `;
          }
      });
  
      document.querySelector('#tablaPendiente').innerHTML = html;
      document.querySelector('#tablaResuelto').innerHTML = html2;
  
    
      document.querySelectorAll('.resolver').forEach(resolverButton => {
          resolverButton.addEventListener('click', () => {
              const codigoTicket = resolverButton.getAttribute('data-codigo');
              const ticketResuelto = tickets.find(ticket => ticket.codigo === codigoTicket);
              if (ticketResuelto) {
                  ticketResuelto.estado = 'Resuelto';
                  
                 
                  vistaPanel.script();
              }
          });
      });
  
      document.querySelector('#nuevoTicket').addEventListener('click', () => {
          document.querySelector('main').innerHTML = vistaTicket.template;
          vistaTicket.script();
      });
      document.querySelectorAll('#verComentario').forEach(elemento => {
        elemento.addEventListener('click', () => {
            document.querySelector('main').innerHTML = insertComentario.template;
            insertComentario.script();
        });
    });
    
      document.querySelectorAll('#comentarios').forEach(elemento => {
        elemento.addEventListener('click', () => {
            console.log('hola');
            document.querySelector('main').innerHTML = vistaComentarioTickets.template;
            vistaComentarioTickets.script();
        });
        
    });
    document.querySelectorAll('.eliminar').forEach((elemento) => {
      elemento.addEventListener('click', (e) => {
        console.log('Eliminar Ticket - Evento de clic disparado');
        
        const codigoTicket = elemento.getAttribute('data-codigo');
        console.log('codigoTicket', codigoTicket);
    
        
        const index = tickets.findIndex((ticket) => ticket.codigo === codigoTicket);
        console.log('index', index);
    
        if (index !== -1) {
          tickets.splice(index, 1);
        
         
          vistaPanel.script();
        } else {
          console.log('Ticket no encontrado en el array');
        }
      });
    });
    
    
    

  
  
  
    
  }
    
  
}