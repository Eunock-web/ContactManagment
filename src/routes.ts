import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import React from "react";
import Acceuil from "./pages/Acceuil";
import NotFound from "./pages/NotFound";
import Init from "./pages/Init";
import Creation from "./pages/Creation";
import Login from "./pages/Login";
import { Middleware } from "./context/Middleware";



export const appRouter = createBrowserRouter([

    {
        path : "/",
        element : React.createElement(Layout),
        children : [
            
            {
                path : '/',
                index : true,
                element : React.createElement(Middleware, null, React.createElement(Acceuil)),
            },

            {
                path : '/init',
                element : React.createElement(Init),
            },

            {
                path : '/login',
                element : React.createElement(Login),
            },            

            {
                path : '/edit/:id',
                element : React.createElement(Init),
            },

            {
                path : '/favoris/:id',
                element : React.createElement(Init),
            },

            {
                path : '/create',
                element : React.createElement(Creation),
            },


            {
                path : "*",
                element : React.createElement(NotFound)
            }
        ]
    }

]);