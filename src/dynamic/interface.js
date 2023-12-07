import { writable, get } from "svelte/store";
import { breakpoint } from "./breakpoint";

// STATE ---------------------------------
export const interfaceModal = writable(false);
export const currentInterfaceSite = writable("siteMenu");
export const currentInterfaceSiteMenu = writable("navigation");

// FUNCTIONS ------------------------------
export function setInterface(siteInterface, siteMenuInterface) {
  if (get(breakpoint) === "mobile" && get(interfaceModal) === false) {
    interfaceModal.set(true);
  };
  if (get(currentInterfaceSite) !== siteInterface) {
    currentInterfaceSite.set(siteInterface);
  };
  if(
    siteMenuInterface 
    && get(currentInterfaceSiteMenu) !== siteMenuInterface
  ) {
    currentInterfaceSiteMenu.set(siteMenuInterface);
  };
};

export function closeInterfaceModal() {
  interfaceModal.set(false);
};