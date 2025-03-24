import { Home, User, Clock } from "lucide-react";
import { ComponentType } from "react";

interface MenuItems {
  id: number;
  name: string;
  icon: ComponentType<{ className?: string }>;
  path: string;
}

export const menuItems: MenuItems[] = [
  { id: 1, name: "Dashboard", icon: Home, path: "/dashboard" },
  { id: 2, name: "User", icon: User, path: "/dashboard/user" },
  { id: 3, name: "Schedule", icon: Clock, path: "/dashboard/schedule" },
];
