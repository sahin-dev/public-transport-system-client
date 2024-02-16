import React from 'react'
import ReactDOM from 'react-dom/client'

import {

  RouterProvider,
} from "react-router-dom";
import './index.css'
import Router from './Routes/Router';
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <HelmetProvider>
      <RouterProvider router={Router} />
    </HelmetProvider>
  </React.StrictMode>,
)
