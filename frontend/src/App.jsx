import React from "react";
import Sidebar from "./Component/Sidebar";
import { Outlet } from "react-router-dom";
import Navbar from "./Component/Navbar";

function App() {
  return (
    <>

      <div className="fixed w-screen top-0 z-10">
        <Navbar />
      </div>

      <div className="flex h-screen pt-16">
        <div className="fixed top-16 left-0 h-full w-60 bg-white z-20">
          <Sidebar />
        </div>


        <div className="ml-60 bg-slate-100 w-screen max-h-screen overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
