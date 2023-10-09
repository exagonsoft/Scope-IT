import { lazy } from "react";

// Lazy load the components
const Layout = lazy(() => import("../containers/layout/layoutContainer"))
const SimpleLayout = lazy(() => import("../containers/layout/layoutContainer"))
const LandingPage = lazy(() => import("../pages/landing/landingPage"));
const Dashboard = lazy(() => import("../pages/dashboard/dashboardPage"));
const Estimations = lazy(() => import("../pages/estimations/estimationsPage"));
const Features = lazy(() => import("../pages/features/featuresPage"));
const Profile = lazy(() => import("../pages/profile/profilePage"));
const Projects = lazy(() => import("../pages/projects/projectsPage"));
const Statistics = lazy(() => import("../pages/statistics/statistics"))
const Settings = lazy(() => import("../pages/settings/settingsPage"));
const SignIn = lazy(() => import("../pages/auth/signinPage"));
const SignUp = lazy(() => import("../pages/auth/signupPage"));
const ErrorPage = lazy(() => import("../pages/error/errorPage"));


export const layoutRoute = { path: "/", element: <Layout /> }
export const guestRoute = { path: "/info", element: <Layout /> }

export const routes = [
    { path: "*", element: <ErrorPage /> },
];

export const authRoutes = [
    { path: "/info/landing", element: <LandingPage /> },
    { path: "/info/auth/signin", element: <SignIn /> },
    { path: "/info/auth/signup", element: <SignUp /> },
]

export const siteRoutes = [
    { path: "/dashboard", element: <Dashboard /> },
    { path: "/estimations", element: <Estimations /> },
    { path: "/features", element: <Features /> },
    { path: "/profile", element: <Profile /> },
    { path: "/projects", element: <Projects /> },
    { path: "/statistics", element: <Statistics /> },
    { path: "/settings", element: <Settings /> },
]