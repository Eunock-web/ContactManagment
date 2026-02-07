import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import React from "react";
import Acceuil from "./pages/Acceuil";
import NotFound from "./pages/NotFound";
import DeletePop from "./layouts/DeletePop";



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
                path : '/delete',
                element : React.createElement(DeletePop),
            },

            {
                path : "*",
                element : React.createElement(NotFound)
            }
        ]
    }

]);