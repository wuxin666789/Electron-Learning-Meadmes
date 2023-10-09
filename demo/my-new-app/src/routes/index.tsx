import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../pages/home";
import { AuthStatus } from "./auth-status";
import { routes } from "./route-list";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {routes.map((item, index) => {
        return (
          <Fragment key={index}>
            <Route
              path={item.path}
              element={<AuthStatus>{item.element}</AuthStatus>}
              key={index}
            >
              {item.children?.map((childrenItem, childrenIndex) => {
                return (
                  <Route
                    path={childrenItem.path}
                    element={childrenItem.element}
                    key={childrenIndex}
                  />
                );
              })}
            </Route>
          </Fragment>
        );
      })}
    </Routes>
  );
};
