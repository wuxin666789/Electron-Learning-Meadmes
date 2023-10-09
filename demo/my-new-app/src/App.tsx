import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import "./index.css";
import { Router } from "./routes";
import { routes } from "./routes/route-list";

function App() {
  return (
    <HashRouter>
      <div className="w-full flex h-screen">
        <div className="left w-1/4 h-full bg-[#fca5a5]">
          <div className="userData h-[4rem] flex items-center justify-center mb-4">
            username
          </div>
          <div className="menu">
            {routes.map((item, index) => {
              return (
                <ul key={index} className="ml-4">
                  {item.name}
                  {item.children.map((cItem, index) => {
                    return (
                      <li key={index} className="ml-4">
                        {cItem.name}
                      </li>
                    );
                  })}
                </ul>
              );
            })}
          </div>
        </div>
        <div className="right w-3/4 flex flex-col">
          <div className="rightNav h-[3rem]"></div>
          <div className="flex-1 ">
            <Router />
          </div>
        </div>
      </div>
    </HashRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
