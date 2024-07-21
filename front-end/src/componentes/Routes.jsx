
//componente que lida com as Routes, gerenciamento de paginas do front
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import React from 'react';

import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
import Dashboard from './Dashboard';
import Profile from './Profile';
import MoodEntryForm from './MoodEntryForm';
import ErrorPage from './ErrorPage.jsx';
import DiarioDesejos from './DiarioDesejos.jsx';


const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginForm />,
    },
    {
        path: "/cadastrar",
        element: <RegisterForm />,
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
    },
    {
        path: "/diariodedesejos",
        element: <DiarioDesejos />,
    },
    {
        path: "/profile",
        element: <Profile />,
    },
    {
        path: "/moodEntryForm",
        element: <MoodEntryForm />,
    },
    {
        path: "/history",
        element: <History />,
    },
    {
        path: "*", 
        element: <ErrorPage/>
    }
])

export default router;

