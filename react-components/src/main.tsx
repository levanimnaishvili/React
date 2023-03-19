import React from 'react'
import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider,} from 'react-router-dom'
import Header from './Header'
import About from './About'
import ErrorPage from './404'
import Main from './Home'

const route = createBrowserRouter([
  // example.com/
  {
    path: '/',
    element: <Header />,
    children: [
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/',
        element: <Main />
      },
      {
        path: '*',
        element: <ErrorPage />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={route}/>
)
