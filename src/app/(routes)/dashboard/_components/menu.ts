import { Home, User } from "lucide-react";
import { ComponentType } from "react";

interface MenuItems {
  id: number;
  name: string;
  icon: ComponentType<{ className?: string }>;
}

export const menuItems: MenuItems[] = [
  { id: 1, name: "Home", icon: Home },
  { id: 2, name: "User", icon: User },
];
