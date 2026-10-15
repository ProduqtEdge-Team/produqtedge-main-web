import './css/misc.css'
import Home from "../src/pages/Home.tsx"
import {createBrowserRouter, RouterProvider} from "react-router-dom";

function App() {

  const router = createBrowserRouter([
    {path:"/", Component:Home},
  ])
  return <RouterProvider router={router}/>
}

export default App
