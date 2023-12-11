import { writable } from "svelte/store";
import { series, books, tags } from "../static/catalogue";

// STATE -----------------------------------------------
export const catalogueType = writable("series"); 