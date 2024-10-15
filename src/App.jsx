import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './pages/login/Login'
import RegisterPage from './pages/register/Register'
import HomePage from './pages/Home'

function App() {

  const router= createBrowserRouter([

    {path:'/', element: <HomePage />},
    {path:'/login', element: <LoginPage />},
    {path:'/register', element : <RegisterPage />}
  ])

  return <RouterProvider router={router} />
}

export default App
