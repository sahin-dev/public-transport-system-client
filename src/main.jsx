import React from 'react'
import ReactDOM from 'react-dom/client'

import {

  RouterProvider,
} from "react-router-dom";
import './index.css'
import Router from './Routes/Router';
import { HelmetProvider } from 'react-helmet-async';
import BusContext from './Context/BusContext';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <HelmetProvider>
      <BusContext>
        {/* <RouterProvider router={Router} /> */}
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={Router} />
        </QueryClientProvider>
      </BusContext>
    </HelmetProvider>
  </React.StrictMode>,
)
