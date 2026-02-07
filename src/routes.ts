import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import React from "react";
import Acceuil from "./pages/Acceuil";
import NotFound from "./pages/NotFound";
import Init from "./pages/Init";



export const appRouter = createBrowserRouter([

    {
        path : "/",
        element : React.createElement(Layout),
        children : [
            
            {
                path : '/',
                index : true,
                element : React.createElement(Acceuil),
            },

            {
                path : '/init',
                element : React.createElement(Init),
            },

            {
                path : "*",
                element : React.createElement(NotFound)
            }
        ]
    }

]);