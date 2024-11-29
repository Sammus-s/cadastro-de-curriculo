import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Home from "./Home";
import TrabalheConosco from "./TrabalheConosco";

export const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      //errorElement: <ErrorPage />
      children: [
        {
          path: '/',
          element: <Home />
        },  
            {
              path: 'contato/trabalhe-conosco',
              element: <TrabalheConosco />
            }     
      ]
    }
  ]);