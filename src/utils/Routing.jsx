import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Donations from "../pages/user/Donations";
import Account from "../pages/user/Account";
import Causes from "../pages/admin/Causes";
import Cause from "../pages/admin/Cause";

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Donations/>}/>
            <Route exact path="/profile" element={<Account/>}/>
            <Route exact path="causes" element={<Causes/>}/>
            <Route exact path="causes/:id" element={<Cause/>}/>
        </Routes>
    </BrowserRouter>
);

export default Router;