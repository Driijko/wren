import { writable } from "svelte/store";
import series from "../static/series";
import books from "../static/books";
import themes from "../static/themes";
import compilations from "../static/compilations";

// STATE -----------------------------------------------
export const catalogueType = writable("series");
export const seriesDisplay = writable(series);
export const compilationsDisplay = writable(compilations); 
export const booksDisplay = writable(books);
export const themesDisplay = writable(themes);
export const catalogueModal = writable(false);
export const catalogueModalData = writable({
  type: "", specifier: [], items: [],
});

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