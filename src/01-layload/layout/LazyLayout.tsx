import { NavLink, Navigate, Route, Routes } from "react-router-dom";
import { LazyPage1, LazyPage2, LazyPage3 } from "../pages";
import { lazy } from "react";

export const LazyLayout = () => {
  const Lazy1 = lazy(
    () => import(/*webpackChunkName: 'LazyPage1Chunk */ "../pages/LazyPage1")
  );
  return (
    <div>
      <h1>LazyLayout Page</h1>

      <ul>
        <li>
          <NavLink to="lazy1">Lazy1</NavLink>
        </li>
        <li>
          <NavLink to="lazy2">lazy2</NavLink>
        </li>
        <li>
          <NavLink to="lazy3">lazy3</NavLink>
        </li>
      </ul>

      <Routes>
        <Route path="lazy1" element={<Lazy1 />} />
        <Route path="lazy2" element={<LazyPage2 />} />
        <Route path="lazy3" element={<LazyPage3 />} />

        <Route path="*" element={<Navigate replace to="lazy1" />} />
      </Routes>
    </div>
  );
};

export default LazyLayout;
