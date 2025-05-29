import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth";
import { HeroesRoutes } from "../heroes";
import { ProviderRouter } from "./ProviderRouter";
import { PublicRouter } from "./PublicRoute";

export const AppRouter = () => {
  return (
     <>

        <Routes>

            {/* <Route path="login" element={<LoginPage/>}/> */}

            <Route path="login" element={
               <PublicRouter>
                  <LoginPage />
               </PublicRouter>

            }/>

            <Route path="/*" element={

               <ProviderRouter>

                  <HeroesRoutes/>
               </ProviderRouter>

            }/>


            {/* <Route path="/*" element={<HeroesRoutes/>}/> */}

            

        </Routes>
     
     </>
  )
}
