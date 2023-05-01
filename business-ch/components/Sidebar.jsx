import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useMemo } from "react";

import {
  DigitalMagazineIcon,
  CollapsIcon,
  HomeIcon,
  LogoIcon,
  LogoutIcon,
  UsersIcon,
  VideosIcon,
  CustomerSupportIcon,
  JobIcon,
  SettingsIcon,
  GroupIcon,
  ProductsIcon
} from "./icons"

const menuItems = [
    { id: 1, label: "Dashboard", icon: HomeIcon, link: "/" },
    { id: 2, label: "Digital magazine", icon: DigitalMagazineIcon, link: "/posts" },
    { id: 3, label: "Smart Designers", icon: UsersIcon, link: "/users" },
    { id: 4, label: "Business Promotion", icon: VideosIcon, link: "/tutorials" },
    { id: 5, label: "Job Connector", icon: JobIcon, link: "/jobs" },
    { id: 6, label: "Customer Support", icon: CustomerSupportIcon, link: "/customersupport" },
    { id: 7, label: "Group and Community", icon: GroupIcon, link: "/group" },
    { id: 8, label: "All Products", icon: ProductsIcon, link: "/products" },
    { id: 9, label: "Settings", icon: SettingsIcon, link: "/settings" },

  ];
  


  const Sidebar = () => {
    const [toggleCollapse, setToggleCollapse] = useState(false);
    const [isCollapsible, setIsCollapsible] = useState(false);
  
    const router = useRouter();
  
    const activeMenu = useMemo(
      () => menuItems.find((menu) => menu.link === router.pathname),
      [router.pathname],

    );
  
    const wrapperClasses = classNames(
      "min-h-screen  px-4 pt-8 pb-4  flex justify-between flex-col",
      {
        ["w-80"]: !toggleCollapse,
        ["w-20"]: toggleCollapse,
      }
    );
  
    const collapseIconClasses = classNames(
      "p-4 rounded bg-light-lighter absolute right-0",
      {
        "rotate-180": toggleCollapse,
      }
    );

    const getNavItemClasses = (menu) => {
      return classNames(
        "flex items-center cursor-pointer rounded w-full overflow-hidden whitespace-nowrap",
        {
    ["bg-secondary"]:activeMenu.label === menu.label,
          
        }
      );
    };
  
    const onMouseOver = () => {
      setIsCollapsible(!isCollapsible);
     
    };
  
    const handleSidebarToggle = () => {
      setToggleCollapse(!toggleCollapse);
    };
  
    return (
      <div
        className={wrapperClasses}
        onMouseEnter={onMouseOver}
        onMouseLeave={onMouseOver}
        style={{ transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s"} }
      >
        <div className="flex flex-col">
          <div className="flex items-center justify-between relative">
            <div className="flex items-center pl-1 gap-4">
              <LogoIcon />
              <span
                className={classNames("mt-2 text-lg font-medium text-text", {
                  hidden: toggleCollapse,
                })}
              >
              </span>
            </div>
            {isCollapsible && (
              <button
                className={collapseIconClasses}
                onClick={handleSidebarToggle}
              >
                <CollapsIcon />
              </button>
            )}
          </div>
  
          <div className="flex flex-col items-start mt-24">
            {menuItems.map(({ icon: Icon, ...menu }) => {
              const classes = getNavItemClasses(menu);
              return (
                <div className={classes}>
                  <Link href={menu.link}>
                    <a className="flex py-4 px-3 items-center w-full h-full">
                      <div style={{ width: "2.5rem"}}>
                        <Icon  />
                      </div>
                  
                    
                      {!toggleCollapse && (
                        <span
                          className={classNames(
                            "text-sm  font-medium text-text-light hover:text-md  "
                          )}
                        >
                          {menu.label}
                        </span>
                      )}
                    </a>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

    
        <div className={`${getNavItemClasses({})} px-3 py-4 bg-primary text-white `}>
          <div style={{ width: "2.5rem" }}>
            <LogoutIcon />
          </div>
          {!toggleCollapse && (
            <span className={classNames("text-md font-medium")}>
              Logout
            </span>
          )}
        </div>

     


      </div>
    );
  };
  
  export default Sidebar;
