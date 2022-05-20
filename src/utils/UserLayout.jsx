import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { authSettings } from "../AuthSettings";
import UserHeader from "./UserHeader";
import axiosInstance from "../configurations/axiosInstance";
import { routes } from "../configurations/api"

const UserLayout = ({ children }) => {
  const { user } = useAuth0();
  const navigate = useNavigate();

  const addUser = useCallback(async () => {
    debugger;
    axiosInstance.post(routes.profile.setupProfile, {
      email: user.email
    });
  }, []);


  useEffect(() => {
    if (user && user[authSettings.rolesKey].length === 1) {
      navigate("/causes");
      addUser();
    }
   
  }, [user, addUser]);

  return (
    <div className="user-layout">
      <UserHeader />
      <div className="user-content">{children}</div>
    </div>
  );
};

export default UserLayout;
