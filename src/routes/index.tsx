import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "../components/template/Layout";
import rotasTiposDeLinks from "./tiposDeLinks";
import rotasNavegacaoComNavLink from "./navegacaoComNavLink";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
        {rotasTiposDeLinks},
        {rotasNavegacaoComNavLink}
    </Route>
  )
);


export default router;