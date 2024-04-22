import React, { LazyExoticComponent, lazy } from "react";
import { LazyPage1, LazyPage2, LazyPage3 } from "../01-layload/pages";
import { NoLazy } from "../01-layload/pages/NoLazy";

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  //   Component: LazyExoticComponent<() => JSX.Element> | (() => JSX.Element);
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

const LazyLayout = lazy(
  () =>
    import(
      /*webpackChunkName: 'LazyPage1DashChunk */ "../01-layload/layout/LazyLayout"
    )
);
// const Lazy1 = lazy(
//   () =>
//     import(
//       /*webpackChunkName: 'LazyPage1Chunk */ "../01-layload/pages/LazyPage1"
//     )
// );
// const Lazy2 = lazy(
//   () =>
//     import(
//       /*webpackChunkName: 'LazyPage2Chunk */ "../01-layload/pages/LazyPage2"
//     )
// );
// const Lazy3 = lazy(
//   () =>
//     import(
//       /*webpackChunkName: 'LazyPage3Chunk */ "../01-layload/pages/LazyPage3"
//     )
// );

export const routes: Route[] = [
  {
    path: "/lazyload/*",
    to: "/lazyload/",
    Component: LazyLayout,
    name: "Lazy-Dash",
  },
  {
    path: "no-lazy",
    to: "/no-lazy",
    Component: NoLazy,
    name: "No Lazy",
  },
  //   {
  //     to: "/lazy3",
  //     path: "lazy3",
  //     Component: Lazy3,
  //     name: "Lazy-3",
  //   },
];
