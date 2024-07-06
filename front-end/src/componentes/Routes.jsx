//componente que lida com as Routes, gerenciamento de paginas do front
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import React from 'react';

import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
import Dashboard from './Dashboard';
import Profile from './Profile';
import MoodEntryForm from './MoodEntryForm';


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
])

export default router;

