import { writable } from "svelte/store";
import series from "../static/series";
import books from "../static/books";
import themes from "../static/themes";
import compilations from "../static/compilations";

// STATE -----------------------------------------------
export const catalogueType = writable("books");
export const seriesDisplay = writable(series);
export const compilationsDisplay = writable(compilations); 
export const booksDisplay = writable(books);
export const themesDisplay = writable(themes);
export const catalogueModal = writable(false);

// FUNCTIONS ---------------------------------------
export function openCatalogueModal() {
  catalogueModal.set(true);
}

export function closeCatalogueModal() {
  catalogueModal.set(false);
}