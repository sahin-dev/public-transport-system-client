import React from 'react'
import ReactDOM from 'react-dom/client'

import {

  RouterProvider,
} from "react-router-dom";
import './index.css'
import Router from './Routes/Router';
import { HelmetProvider } from 'react-helmet-async';
import BusContext from './Context/BusContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <HelmetProvider>

      <BusContext>
        <RouterProvider router={Router} />
      </BusContext>
    </HelmetProvider>
  </React.StrictMode>,
)
