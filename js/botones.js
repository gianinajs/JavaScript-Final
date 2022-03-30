import { imprimirSeries } from "./functionsSeries.js";
import * as DomElements from "./domElements.js";


// AGREGAR BOTON DE 'TODAS LAS SERIES' 
export function asignarBotonVerTodos(serie) {
    let verTodos = document.querySelector(".verTodos");
    verTodos.addEventListener("click", function() {
        verTodosClicked(serie);
    }, false);
};

// VER SERIES
function verTodosClicked(serie) {
    DomElements.listadoSeries.scrollIntoView();
    imprimirSeries(DomElements.listadoSeries, serie);
    
    DomElements.botonesCategorias.forEach((botonCategoria) => {
      botonCategoria.children[0].classList.remove("active"); 
    });
};

 
