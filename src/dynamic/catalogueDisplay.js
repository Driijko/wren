import { writable } from "svelte/store";
import { series, books, compilations, tags } from "../static/catalogue";

// STATE -----------------------------------------------
export const catalogueType = writable("compilations");
export const seriesDisplay = writable(series);
export const compilationsDisplay = writable(compilations); 