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
  const [donations, setDonations] = useState([]);
  const { getAccessTokenSilently } = useAuth0();
  const { user } = useAuth0();


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
      } )
  }, [getAccessTokenSilently]);

  // const getDonations = () => {
    
  //   const profileId = profile.id;
  //   axiosInstance
  //     .get(routes.donations.myDonations(profileId), {
        
  //     })
  //     .then(({ data }) => setDonations(data));
  // };
 
  // axiosInstance
  // .get(routes.profile.getProfileForUser(user.email))
  // .then(response => {
  //   console.log(response.data.id)
  //   setProfile(response.data);
  //   return axiosInstance.get(routes.donations.myDonations(response.data.id));
  // })
  // .then(response => {
  //   console.log(response.data.id)
  //   setDonations(response.data);
  // })
  
  let profileFields = [];
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
      accessor: "causeId",
    },
    {
      Header: "Amount",
      accessor: "amount",
    },
  ];

  const handleModifyUserData = (form) => {
    (async () => {
      const accessToken = await getAccessTokenSilently();
      debugger;
      axiosInstance
        .post(routes.profile.updateProfile(profile.id), form, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then(() => {
          debugger;
          getProfile()});
    })();
  };

  useEffect(() => {
    getProfile();
  }, [getProfile]);

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
            <Table data={donations} columns={columns} noHref />
          </div>
        </div>
      </div>
    </UserLayout>
  );
};

export default Account;
