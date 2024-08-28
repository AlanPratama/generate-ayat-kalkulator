import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Home } from "./pages/home"
import { GenerateAyat } from "./pages/generateAyat"
import { Calculator } from "./pages/calculator"
import { PageLayout } from "./Layouts/PageLayout"
import { PelancarPlacement } from "./pages/pelancarPlacement"

export const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <PageLayout><Home/></PageLayout>
    },
    {
      path: "/generate-ayat",
      element: <PageLayout><GenerateAyat/></PageLayout>
    },
    {
      path: "/calculator",
      element: <PageLayout><Calculator/></PageLayout>
    },
    {
      path: "/pelancar-placement",
      element: <PageLayout><PelancarPlacement/></PageLayout>
    }
  ])

  return <RouterProvider router={router} />
}
