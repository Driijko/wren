import { writable, get } from "svelte/store";
import { breakpoint } from "./breakpoint";

// STATE ---------------------------------
export const interfaceModal = writable(false);
export const interfaceModalOpening = writable(false);
// export const currentInterface = writable("siteMenu");
export const currentInterfaceSite = writable("siteMenu");
export const currentSiteMenuTab = writable("navigation");
export const prevSiteMenuTab = writable("");

// TAB POSITION MAP --------------------------
const tabPositionMap = {
  "navigation": 0,
  "email": 1,
};

// FUNCTIONS ------------------------------
export function setInterface(interfaceName, tab) {
  if (get(breakpoint) === "mobile" && get(interfaceModal) === false) {
    interfaceModalOpening.set(true);
    const timerId = setTimeout(()=> {
      interfaceModalOpening.set(false);
      clearTimeout(timerId);
    }, 500);
    interfaceModal.set(true);
  };
  if (get(currentInterface) !== interfaceName) {
    currentInterface.set(interfaceName);
  };
  if(tab && get(currentSiteMenuTab) !== tab) {
    prevSiteMenuTab.set(get(currentSiteMenuTab));
    currentSiteMenuTab.set(tab);
  };
};

export function closeInterfaceModal() {
  interfaceModal.set(false);
};

export function getSiteMenuTabPosition(tab) {
  return tabPositionMap[tab];
};