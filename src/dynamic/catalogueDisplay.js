import { writable, get } from "svelte/store";
import series from "../static/series";
import books from "../static/books";
import themes from "../static/themes";
import compilations from "../static/compilations";

// STATE -----------------------------------------------
export const catalogueMainType = writable("series");
export const catalogueMainSeries = writable(series);
export const catalogueMainCompilations = writable(compilations);
export const catalogueMainBooks = writable(books);
export const catalogueMainThemes = writable(themes);
export const catalogueModal = writable(false);
export const catalogueModalData = writable({
  scope: "", // string: "item" or "list"
  type: "", // string: "series", "book", "compilation" or "theme"
  from: "", // string: "series", "book", "compilation" or "theme"
  title: "", // string
  items: [], // array: of data items 
  item: {}, // single data item
});

// MAP --------------------------------------------
const map = { 
  books: {
    static: books, 
    dynamic: catalogueMainBooks, 
    sort: { property: "", order: "" }
  }, 
  series: {
    static: series, 
    dynamic: catalogueMainSeries,
    sort: { property: "", order: "" },
  }, 
  compilations: {
    static: compilations, 
    dynamic: catalogueMainCompilations, 
    sort: { property: "", order: "" },
  }
};

// FUNCTIONS ---------------------------------------
export function openCatalogueModal() {
  catalogueModal.set(true);
};

export function closeCatalogueModal() {
  catalogueModal.set(false);
};

export function setCatalogueModalData(data) {
  catalogueModalData.set(data);
};

export function clearCatalogueModalData() {
  catalogueModalData.set({});
}

// SORT FUNCTIONS //////////////////////////////////////
function genericSort(property, order) {
  return function compare(a, b) {
    let comparison;
    if (order === "start") {
      comparison = a[property] > b[property];
    } else if (order === "end") {
      comparison = a[property] < b[property];
    };

    if (comparison) { return 1; }
    else if (a[property] === b[property]) { return 0; }
    else { return -1; };
  };
};

function itemsSort(dynamic, property, order) {
  dynamic.set( 
    get(dynamic).sort(
      genericSort(property, order)
  ));
};

// ORGANIZE: FILTER & SORT /////////////////////////////////////
function organizeItems(type) {
  const { dynamic, sort } = map[type];
  if (sort.property.length > 0) {
    itemsSort(dynamic, sort.property, sort.order);
  };
};

// USER ACTIONS /////////////////////////////////////////////
export function setSort(type, property, order) {
  map[type].sort = {property: property, order: order };
  organizeItems(type);
};