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
  const [openedModal, setOpenedModal] = useState(false);
  const [profile, setProfile] = useState({});

  const { getAccessTokenSilently } = useAuth0();
  const { user } = useAuth0();

  const profileFields = [
    { key: "Name", value: "Jake Markel" },
    { key: "Email", value: "markel.jake@gmail.com" },
    { key: "Phone", value: "+40 754 342 3223" },
    { key: "Address", value: "Street Lake 64" },
    { key: "City", value: "Bucharest" },
    { key: "Country", value: "Romania" },

  ];

  const columns = [
    {
      Header: "Cause name",
      accessor: "causeId",
    },
    {
      Header: "Amount",
      accessor: "amount",
    }
  ];

  const [donations, setDonations] = useState([]);

  const getDonations = useCallback(async () => {
    const accessToken = await getAccessTokenSilently();
    axiosInstance
      .get(routes.donations.getAllDonations, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then(({ data }) => setDonations(data));
  }, [getAccessTokenSilently]);

  //TODO modify db tables to move personal data from donations to user table
  const getProfile = useCallback(async () => {
    const accessToken = await getAccessTokenSilently();
    axiosInstance
      .get(routes.profile.getProfileForUser(user.email), {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then(({ data }) => setProfile(data));
  }, [getAccessTokenSilently]);

  useEffect(() => {
    getDonations();
    getProfile();
  },[getDonations, getProfile]);

  return (
    <UserLayout>
      <UserAccountModal
        isModalOpen={openedModal}
        closeModal={() => {
          setOpenedModal(false);
        }}
      />
      <div className="profile">
        <div className="profile-title">
          <h2>Jake Markel</h2>
          <Button onClick={() => setOpenedModal(true)}>
             Edit
          </Button>
        </div>
        <div className="profile-content">
          <Section title={"Profile Details"} fields={profileFields} />
          <div>
            <p className="section-title">Past Donations</p>
            <Table data={donations} columns={columns} noHref />
          </div>
        </div>
      </div>
    </UserLayout>
  );
};

export default Account;
