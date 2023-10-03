import { lazy } from "react";

// Lazy load the components
const LandingPage = lazy(() => import("../pages/landing/landingPage"));
const Dashboard = lazy(() => import("../pages/dashboard/"));
const Galery = lazy(() => import("../pages/gallery/Galery"));
const Trainers = lazy(() => import("../pages/trainers/Trainers"));
const Plans = lazy(() => import("../pages/plans/Plans"));
const Contacts = lazy(() => import("../pages/contacts/Contacts"));
const ErrorPage = lazy(() => import("../pages/error/errorPage"));


export const routes = [
    { path: "/landing", element: <LandingPage /> },
    { path: "/about", element: <About /> },
    { path: "/contact", element: <Contacts /> },
    { path: "/gallery", element: <Galery /> },
    { path: "/plans", element: <Plans /> },
    { path: "/trainers", element: <Trainers /> },
    { path: "*", element: <ErrorPage /> },
];