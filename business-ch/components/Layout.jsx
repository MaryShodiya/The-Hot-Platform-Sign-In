import React from "react";
import Sidebar from "./Sidebar";
import SearchBar from "./SearchBar";
import { ProfileImage } from "./icons";




const Layout = ({ children }) => {
  return (
 
    <div className="flex flex-row min-h-screen justify-start">
     
      <Sidebar />
      
      <div className="bg-greyfour flex-1">
      <div className="flex-no-wrap flex w-full  justify-between bg-white  py-2  ">
      <div className="relative flex flex-wrap  w-full justify-between bg-neutral-900 py-2 text-neutral-200  lg:justify-start lg:py-4" >
        <SearchBar />

</div>


<div className="relative flex py-7">


          <span>
            <svg  stroke="#bdbdbd" width={24} height={24}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24" fill="none"
              className="h-5 w-5">
              <path stroke="#bdbdbd"
                
                d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
                 />
            </svg>
          </span>
       
          <span
            className="absolute -mt-2.5 ml-2 rounded-[0.37rem] bg-danger px-[0.45em] py-[0.2em] text-[0.6rem] leading-none text-red"> 1 
            </span >
            </div>

          <div className="flex relative">
          <ProfileImage  />
        </div>
       
         </div>
       
     {children}
</div>

  </div>
  
 
  );
};

export default Layout;