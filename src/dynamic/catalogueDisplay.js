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