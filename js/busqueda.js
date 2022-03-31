import { imprimirSeries } from "./functionsSeries.js";
import { listadoSeries } from "./domElements.js";
import { asignarBotonVerTodos } from "./botones.js";
import { botonesCategorias } from "./domElements.js";

// BUSQUEDA POR NOMBRE DE SERIE
export function buscar(event, productos) {
    event.preventDefault();
    listadoSeries.scrollIntoView();
    let busqueda = seriesFiltrado.children[0].value;
    const result = productos.filter(
        producto =>
        producto.categoria.toLowerCase().includes(busqueda.toLowerCase()) ||
        producto.serie.toLowerCase().includes(busqueda.toLowerCase())
    );
    imprimirSeries(listadoSeries, result);
    if(result.length === 0 || busqueda === "" || busqueda === " ") {
        listadoSeries.innerHTML = "";
        let noHayCoincidencias = document.createElement("div");
        noHayCoincidencias.className = "noHayCoincidencias";
        noHayCoincidencias.innerHTML = `
        <h4>Por favor, ingrese otra serie diferente a"${busqueda}".</h4>
        <a class="verTodos">Ver todas las Series</a>
        `;
        listadoSeries.appendChild(noHayCoincidencias);
    } else {
        let tituloBusqueda = document.createElement("h3");
        tituloBusqueda.className = "nombreCategoria";
        tituloBusqueda.innerHTML = `
        Resultados de búsqueda para "${busqueda}"
        <a class="verTodos">Ver todas las Series</a>
        `;
        listadoSeries.prepend(tituloBusqueda);
    }

    //ELIMINAR INFORMACION DEL SEARCH
    asignarBotonVerTodos(productos);
    seriesFiltrado.children[0].value = "";
}

// FILTROS AL SELECCIONAR PLATAFORMAS
export function categoriaClick(event, productos) {
    listadoSeries.scrollIntoView();
    botonesCategorias.forEach((botonCategoria) => {
        botonCategoria.children[0].classList.remove("active");
    });
    event.target.classList.add("active");
    
    const result = productos.filter(producto => producto.categoria === event.target.textContent);
    imprimirSeries(listadoSeries, result);
    
    // SI NO CONTIENE SERIES
    if(result.length === 0) {
        let noHayCoincidencias = document.createElement("div");
        noHayCoincidencias.className = "noHayCoincidencias";
        noHayCoincidencias.innerHTML = `
        <a class="verTodos">Ver todas las Series</a>
        `;
        listadoSeries.appendChild(noHayCoincidencias);
    } else {
        let nombreCategoria = document.createElement("h3");
        nombreCategoria.className = "nombreCategoria";
        nombreCategoria.innerHTML = `
        ${event.target.textContent}
        <a class="verTodos">Ver todas las Series</a>
        `;
        listadoSeries.prepend(nombreCategoria);
    }

    asignarBotonVerTodos(productos);
}