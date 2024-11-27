import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from '@material-tailwind/react'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router'
import Home from './components/Home.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  }
])

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <ThemeProvider>
            <RouterProvider router={router}/>
        </ThemeProvider>
    </StrictMode>,
);
