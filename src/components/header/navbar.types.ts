import React from "react";

export type MenuItem = {
  id: number;
  type: "MenuItem" | "MenuList";
  label: string;
  label_ar: string;
  url?: string;
};

export type MenuListData = (Omit<MenuItem, "children" | "type"> & {
  description?: string | React.ReactNode;
})[];

export type NavMenu = MenuItem[];
