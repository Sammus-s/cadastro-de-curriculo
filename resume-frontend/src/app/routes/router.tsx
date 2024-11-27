import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Home from "./Home";
import SobreNos from "./SobreNos";
import Agricultura from "./Agricultura";
import Avicultura from "./Avicultura";
import Suinocultura from "./Suinocultura";
import Bovinocultura from "./Bovinocultura";
import Administrativo from "./Administrativo";
import Contato from "./Contato";
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
          path: 'sobre-nos',
          element: <SobreNos />
        },
            {
              path: 'solucoes/agricultura',
              element: <Agricultura />
            },
            {
              path: 'solucoes/avicultura',
              element: <Avicultura />
            },
            {
              path: 'solucoes/suinocultura',
              element: <Suinocultura />
            },
            {
              path: 'solucoes/bovinocultura',
              element: <Bovinocultura />
            },
            {
              path: 'solucoes/administrativo',
              element: <Administrativo />
            },
        {
          path: 'contato/',
          element: <Contato />
        },     
            {
              path: 'contato/trabalhe-conosco',
              element: <TrabalheConosco />
            }     
      ]
    }
  ]);