import React, { useState, useEffect, useCallback } from "react";
import Button from "../../components/Button";
import UserLayout from "../../utils/UserLayout";
import Section from "../../components/Section.jsx";
import Table from "../../components/Table";
import UserAccountModal from "../../components/modals/UserAccountModal";
import { useAuth0 } from "@auth0/auth0-react";
import { routes } from "../../configurations/api";
import axiosInstance from "../../configurations/axiosInstance";

const Account = () => {
  const { getAccessTokenSilently } = useAuth0();
  const { user } = useAuth0();
  const [openedModal, setOpenedModal] = useState(false);
  const [profile, setProfile] = useState({});
  const [donations, setDonations] = useState([]);
  const [causes, setCauses] = useState([]);
 

  let profileFields = [];
  let pastDonations = [];


  if (profile.firstName === null) {
    profileFields = [{ key: "Email", value: profile.email }];
  } else {
    profileFields = [
      { key: "Name", value: profile.firstName + " " + profile.lastName },
      { key: "Email", value: profile.email },
      { key: "Phone", value: profile.phoneNumber },
      { key: "Address", value: profile.address },
      { key: "City", value: profile.city },
      { key: "Country", value: profile.country },
    ];
  }

  const columns = [
    {
      Header: "Cause name",
      accessor: "cause_title",
    },
    {
      Header: "Amount",
      accessor: "amount",
    },
  ];

  const getProfile = useCallback(async () => {
    const accessToken = await getAccessTokenSilently();
    axiosInstance
      .get(routes.profile.getProfileForUser(user.email), {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then(({ data }) => {
        setProfile(data);
      });
  }, [getAccessTokenSilently]);

  const handleModifyUserData = (form) => {
    (async () => {
      const accessToken = await getAccessTokenSilently();
      axiosInstance
        .post(routes.profile.updateProfile(profile.id), form, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then(() => {
          getProfile();
        });
    })();
  };

  const getDonations = useCallback(async () => {
    const accessToken = await getAccessTokenSilently();
    axiosInstance
      .get(routes.donations.myDonations(user.email), {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then(({ data }) => {
        setDonations(data);
      });
  }, [getAccessTokenSilently]);

  const getCauses = useCallback(async () => {
    const accessToken = await getAccessTokenSilently();
    axiosInstance
      .get(routes.causes.getAll, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then(({ data }) => {
        setCauses(data);
      });
  }, [getAccessTokenSilently]);

  useEffect(() => {
    getProfile();
    getDonations();
    getCauses();
  }, [getProfile, getDonations, getCauses]);
  
  
  const getPastDonations = useCallback (async () => {
      donations.forEach((donation) => {
        causes.forEach((cause) => {
            if(donation.causeId === cause.id) {
                let pastDonation = {"cause_title": cause.title, "amount": donation.amount};
                pastDonations.push(pastDonation);
            }
        })
      })
      console.log(pastDonations)
  }, [pastDonations]);

  getPastDonations(); 

  return (
    <UserLayout>
      <UserAccountModal
        isModalOpen={openedModal}
        closeModal={() => {
          setOpenedModal(false);
        }}
        submitForm={handleModifyUserData}
      />
      <div className="profile">
        <div className="profile-title">
          <div className="profile-name">
            {profile.firstName !== null ? (
              profile.firstName + " " + profile.lastName
            ) : (
              <div className="profile-message">
                Please complete personal data.
              </div>
            )}
          </div>
          <div className="edit-button">
            <Button onClick={() => setOpenedModal(true)}>Edit</Button>
          </div>
        </div>
        <div className="profile-content">
          <Section title={"Profile Details"} fields={profileFields} />
          <div>
            <p className="section-title">Past Donations</p>
            <Table data={pastDonations} columns={columns} noHref />
          </div>
        </div>
      </div>
    </UserLayout>
  );
};

export default Account;
