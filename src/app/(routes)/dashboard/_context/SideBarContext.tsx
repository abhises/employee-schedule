"use client";
import {
  createContext,
  useState,
  useContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

interface SideBarPropsType {
  isOpen: boolean;
  toggleSidebar: () => void;
  setIsOpen: Dispatch<SetStateAction<boolean>>; // Include setIsOpen
}

const SideBarContext = createContext<SideBarPropsType | undefined>(undefined);

export const SideBarProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen((prev) => !prev);

  return (
    <SideBarContext.Provider value={{ isOpen, toggleSidebar, setIsOpen }}>
      {children}
    </SideBarContext.Provider>
  );
};

export const useSideBar = () => {
  const context = useContext(SideBarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};
