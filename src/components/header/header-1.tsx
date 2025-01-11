import React from "react";
import {
  MobileMenu,
  NavCart,
  NavItem,
  NavProfile,
  NavWishList,
  SearchForm,
  SearchFormMobile,
} from "./nav-items";

export function Header1() {
  return (
    <nav className="border-b border-gray-100 ">
      <div className="mx-auto max-w-full px-2 py-2 lg:px-6 ">
        <div className="flex items-center justify-between">
          <MobileMenu />
          <div className="flex flex-1 items-center justify-center lg:items-stretch lg:justify-start overflow-hidden">
            <div className="flex shrink-0 items-center">
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
                alt="Your Company"
              />
            </div>
            <div className="shrink-0 hidden lg:ml-6 lg:block">
              <div className="flex space-x-4">
                <NavItem name="Categories" active />
                <NavItem name="New Arrivals" />
                <NavItem name="Best Selling" />
                <NavItem name="Hot Deals" />
                <NavItem name="Upcoming" />
              </div>
            </div>
          </div>
          <div className=" flex items-center  shrink-0 gap-1">
            {/* search  */}
            <SearchForm />
            <SearchFormMobile />

            {/*  WishList  */}
            <NavWishList />

            {/* profile  */}
            <NavProfile />

            {/* cart */}
            <NavCart />
          </div>
        </div>
      </div>
    </nav>
  );
}
