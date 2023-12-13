import { createContext } from 'preact';
export const UserContext = createContext(null);

const DropdownContext = createContext({
  isDropdownOpen: false,
  toggleDropdown: () => {},
});

export default DropdownContext;
