import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Causes from "../pages/user/Causes";
import Account from "../pages/user/Account";
import CausesTable from "../pages/admin/CausesTable";
import Cause from "../pages/user/Cause";
import { useAuth0 } from "@auth0/auth0-react";

const Router = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  useEffect(() => {
    if (!isAuthenticated) {
      loginWithRedirect();
    }
  }, [isAuthenticated, loginWithRedirect]);

  return (
    isAuthenticated && (
      <BrowserRouter>
      <Routes>
            <Route exact path="/" element={<Causes/>}/>
            <Route exact path="/profile" element={<Account/>}/>
            <Route exact path="causes" element={<CausesTable/>}/>
            <Route exact path="causes/:id" element={<Cause/>}/>
        </Routes>
      </BrowserRouter>
    )
  );
};

export default Router;



