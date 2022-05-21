import React, { useState, useEffect, useCallback } from "react";
import UserLayout from "../../utils/UserLayout";
import CauseCard from "../../components/CauseCard";
import axiosInstance from "../../configurations/axiosInstance";
import { routes } from "../../configurations/api";
import { useAuth0 } from "@auth0/auth0-react";

const Causes = () => {
    const { getAccessTokenSilently } = useAuth0();

    const [causes, setCauses] = useState([]);
    
    const getAllCauses = useCallback(async () => {
        const accessToken = await getAccessTokenSilently();
        axiosInstance
          .get(routes.causes.getAll, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          })
          .then(({ data }) => setCauses(data));
      }, [getAccessTokenSilently]);

    useEffect(() => {
        getAllCauses();
      }, [getAllCauses]);

    return (
        <UserLayout>
            <div className="causes">
                {causes.map((cause, index) => (
                    <CauseCard key={index} {...cause} />
                ))}
            </div>
        </UserLayout>
    );
};


export default Causes;