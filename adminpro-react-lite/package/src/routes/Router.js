import { lazy } from "react";
import { Navigate } from "react-router-dom";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/

const Starter = lazy(() => import("../views/Starter.js"));
const About = lazy(() => import("../views/About.js"));
const RegistrarPadre = lazy(() => import("../views/ui/RegistrarPadre"));
const VerTodosPadres= lazy(() => import("../views/ui/VerTodosPadres"));
const ConfiguracionPadre= lazy(() => import("../views/ui/ConfiguracionPadre"));
const EliminarPadre= lazy(() => import("../views/ui/EliminarPadre"));



const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", element: <Navigate to="/starter" /> },
      { path: "/starter", exact: true, element: <Starter /> },
      { path: "/about", exact: true, element: <About /> },
      { path: "/RegistrarPadre", exact: true, element: <RegistrarPadre /> },
      { path: "/VerTodosPadres", exact: true, element: < VerTodosPadres /> },
      { path: "/ConfiguracionPadre", exact: true, element: < ConfiguracionPadre /> },
      { path: "/EliminarPadre", exact: true, element: < EliminarPadre /> },
    ],
  },
];

export default ThemeRoutes;
