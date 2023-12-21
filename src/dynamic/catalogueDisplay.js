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

// export const seriesDisplay = writable(series);
// export const compilationsDisplay = writable(compilations); 
// export const booksDisplay = writable(books);
// export const themesDisplay = writable(themes);

// Potential properties of catalogueModalData: 
// scope: string: "item" or "list"
// type: string: "series", "book", "compilation" or "theme"
// from: string: "series", "book", "compilation" or "theme",
// title: string,
// items: array: of data items
// item: single data item
export const catalogueModalData = writable({});

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