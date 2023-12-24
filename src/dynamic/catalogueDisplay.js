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
export const catalogueMainSeriesTags = writable([]);
export const catalogueMainBooksTags = writable([]);
export const catalogueMainCompilationsTags = writable([]);
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
export const map = { 
  books: {
    string: "Books",
    data: books, 
    dynamic: catalogueMainBooks, 
    sort: { property: "", order: "" },
    tags: catalogueMainBooksTags,
  }, 
  series: {
    string: "Series",
    data: series, 
    dynamic: catalogueMainSeries,
    sort: { property: "", order: "" },
    tags: catalogueMainSeriesTags,
  }, 
  compilations: {
    string: "Compilations",
    data: compilations, 
    dynamic: catalogueMainCompilations, 
    sort: { property: "", order: "" },
    tags: catalogueMainCompilationsTags,
  },
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

// FILTER FUNCTION------------------------------------
function filterByTags(item, tags) {
  const itemTags = item.tags.map(tag => tag.title);
  for (const tag of tags) {
    if (itemTags.includes(tag) === false) {
      return false;
    };
  };
  return true;
};

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
  dynamic.update(prev => {
    prev.sort(genericSort(property, order));
    return prev;
  });
};

// ORGANIZE: FILTER & SORT /////////////////////////////////////
function organizeItems(type) {

  const { data, dynamic, sort, tags } = map[type];

  // Filter -------------------------------
  if (get(tags).length > 0) {
    dynamic.set(data.filter(item => {
      return filterByTags(item, get(tags));
    }));
  } else {
    dynamic.set(data);
  };
  
  // After filtering, apply sorting if necessary
  if (sort.property.length > 0) {
    itemsSort(dynamic, sort.property, sort.order);
  };
};

// USER ACTIONS /////////////////////////////////////////////
export function setSort(type, property, order) {
  map[type].sort = {property: property, order: order };
  organizeItems(type);
};

export function addTag(tag) {
  const type = get(catalogueMainType);
  map[type].tags.update(prev => {
    prev.push(tag);
    return prev;
  });
  organizeItems(type);
};

export function removeTag(tag) {
  const type = get(catalogueMainType);
  map[type].tags.update(prev => {
    prev.splice(prev.indexOf(tag), 1);
    return prev;
  });
  organizeItems(type);
};

export function removeAllTags() {
  const type = get(catalogueMainType);
  map[type].tags.set([]);
  organizeItems(type);
}