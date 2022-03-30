import * as DomElements from "./domElements.js";
import { imprimirSeries } from "./functionsSeries.js";
import { buscar } from "./busqueda.js";
import { categoriaClick } from "./busqueda.js";


// FETCH
const URL_SERIES = "./js/series.json";

const agregarSeries = async () => {
    const resp = await fetch(URL_SERIES);
    let serie = await resp.json();
    return serie;
};
let serie = agregarSeries();
serie
.then((serie) => SeriesFetched(serie))

function SeriesFetched(serie) {
    imprimirSeries(DomElements.listadoSeries, serie);

    DomElements.seriesFiltrado.addEventListener("submit", function() {
        buscar(event, serie);
    }, false);

    DomElements.botonesCategorias.forEach((botonCategoria) => {
        botonCategoria.addEventListener("click", function() {
            categoriaClick(event, serie);
        }, false);
    });
}