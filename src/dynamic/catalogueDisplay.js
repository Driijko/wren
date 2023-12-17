import { writable } from "svelte/store";
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

export const catalogueType = writable("series");
export const seriesDisplay = writable(series);
export const compilationsDisplay = writable(compilations); 
export const booksDisplay = writable(books);
export const themesDisplay = writable(themes);
export const catalogueModal = writable(false);
export const catalogueModalData = writable({
  scope: "", type: "", list: {type: "", title: ""}, items: [],
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

/*
scope: item, list
type: book, compilation, series
list: {type: compilation/series, name: }
items: */