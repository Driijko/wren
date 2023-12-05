import { writable, get } from "svelte/store";

// STATE ---------------------------------
export const interfaceModal = writable(false);
export const siteMenu = writable(true);
export const sortInterface = writable(false);
export const filterInterface = writable(false);

// MAP ------------------------------------
const map = {
  interfaceModal,
  siteMenu,
  sortInterface,
  filterInterface,
};

// FUNCTIONS ---------------------------------
export const modals = {
  open(modal) {map[modal].set(true)},
  close(modal) {map[modal].set(false)},
  toggle(modal) {map[modal].set(!(get(map[modal])))},
};