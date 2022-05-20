import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { authSettings } from "../AuthSettings";
import AdminHeader from "./AdminHeader";
import AdminMenu from "./AdminMenu";
import axiosInstance from "../configurations/axiosInstance";
import { routes } from "../configurations/api"

const AdminLayout = ({ children }) => {
  const { user } = useAuth0();
  const navigate = useNavigate();

  const addUser = useCallback(async () => {
    debugger;
    axiosInstance.post(routes.profile.setupProfile, {
      email: user.email
    });
  }, []);

  useEffect(() => {
    if (user && user[authSettings.rolesKey].length === 0) {
      navigate("/");
      addUser();
    }
   
  }, [user, addUser]);
  
  return (
    <div className="layout">
      <AdminMenu />
      <div className="content">
        <AdminHeader />
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;
