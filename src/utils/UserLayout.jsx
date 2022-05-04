import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { authSettings } from "../AuthSettings";
import UserHeader from "./UserHeader";

const UserLayout = ({ children }) => {
  const { user } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    if (user && user[authSettings.rolesKey].length === 1) {
      navigate("/books");
    }
  }, [user]);

  return (
    <div className="user-layout">
      <UserHeader />
      <div className="user-content">{children}</div>
    </div>
  );
};

export default UserLayout;
