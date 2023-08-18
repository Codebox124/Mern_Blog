import './App.css';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout";
import Home from './pages/home';
import RegisterPage from "./pages/register";
import Login from './pages/login';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={< Layout/>}>
      <Route index element={<Home />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/login' element={<Login />} />
   
    </Route>
  )
);

function App() {
  return (
     <RouterProvider router={router} />
  );
}

export default App;
