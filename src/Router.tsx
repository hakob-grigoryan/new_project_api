import { FC } from "react";
import { useRoutes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { AddQuestion } from "./pages/AddQuestion";
import { ShowQuestions } from "./pages/ShowQuestion";
import { TopQuestion } from "./pages/TopQuestion";


export const Router: FC = () => {
    const routes = useRoutes([
        {
          path: "",
          element: <Layout />,
          children: [
            {
              path: "",
              element: <AddQuestion />,
            },
    
            {
              path: "top",
              element: <TopQuestion />,
            },

            {
              path: 'show/:id',
              element: <ShowQuestions/>
            }
          ]
        }
      ]);
      return routes;
}