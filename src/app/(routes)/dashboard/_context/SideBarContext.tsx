"use client";
import {
  createContext,
  useState,
  useContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

interface UserType {
  id: string;
  firstName: string | null;
  lastName: string | null;
  emailAddresses: { emailAddress: string }[];
  lastActiveAt: number | null; // Alloupw null
  createdAt: number;
  publicMetadata: { role: string };
}

interface SideBarPropsType {
  user: UserType[];
  setUsers: Dispatch<SetStateAction<UserType[]>>;
  isOpen: boolean;
  toggleSidebar: () => void;
  setIsOpen: Dispatch<SetStateAction<boolean>>; // Include setIsOpen
}

const SideBarContext = createContext<SideBarPropsType | undefined>(undefined);

export const SideBarProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUsers] = useState<UserType[]>([]);

  const toggleSidebar = () => setIsOpen((prev) => !prev);

  return (
    <SideBarContext.Provider
      value={{ isOpen, toggleSidebar, setIsOpen, user, setUsers }}>
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
