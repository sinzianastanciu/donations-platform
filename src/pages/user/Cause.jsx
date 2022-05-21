import React from "react";
import { useState, useEffect, useCallback } from "react";
import UserLayout from "../../utils/UserLayout";
import Button from "../../components/Button";
import DonateModal from "../../components/modals/DonateModal";
import { useAuth0 } from "@auth0/auth0-react";
import axiosInstance from "../../configurations/axiosInstance";
import { routes } from "../../configurations/api";
import { useParams} from "react-router-dom";

const Cause = () => {

    const { id } = useParams()
    const { getAccessTokenSilently } = useAuth0();
    const [cause, setCause] = useState([]);
    
    const getCause = useCallback(async () => {
        const accessToken = await getAccessTokenSilently();
        axiosInstance
          .get(routes.causes.getCause(id), {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          })
          .then(({ data }) => setCause(data));
      }, [getAccessTokenSilently]);

    useEffect(() => {
        getCause();
      }, [getCause]);

    const handleMakeDonation = (form) => {
        (async () => {
          const accessToken = await getAccessTokenSilently();
          axiosInstance
            .post(routes.causes.updateAmountRaised(id), form, {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            })
        })();
      };
    

        
    const [openedModal, setOpenedModal] = useState(false);
    return (
        <UserLayout>
            <DonateModal
                modalIsOpen={openedModal}
                closeModal={() => {
                setOpenedModal(false);
            }}
            submitForm={handleMakeDonation}
            />
            <div className="cause-content">
                <div className="cause-title">
                    {cause.title}
                </div>
                <div className="cause-zone">
                    {cause.zone}
                </div>
                <div className="cause-summary">
                    {cause.summary}
                </div>
                <div className="donate-btn">
                    <Button  onClick={() => setOpenedModal(true)}> Donate for this cause </Button>
                </div>
            </div>
            <img className="cause-image" src={cause.image} />
        </UserLayout>
      
    );
}

export default Cause;