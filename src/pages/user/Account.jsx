import React, { useState, useMemo } from "react";
import Button from "../../components/Button";
import UserLayout from "../../utils/UserLayout";
import Section from "../../components/Section.jsx";
import Table from "../../components/Table";
import UserAccountModal from "../../components/modals/UserAccountModal";

const Account = () => {
  const [openedModal, setOpenedModal] = useState(false);
  const profileFields = [
    { key: "Name", value: "Jake Markel" },
    { key: "Email", value: "markel.jake@gmail.com" },
    { key: "Phone", value: "+40 754 342 3223" },
    { key: "Address", value: "Street Lake 64" },
  ];

  const columns = [
    {
      Header: "Cause name",
      accessor: "cause_title",
    },
    {
      Header: "Amount",
      accessor: "amount",
    },
    {
      Header: "Time",
      accessor: "time",
    },
  ];

  const data = useMemo(
    () => [
      {
        cause_title: "Kids from Ukraine",
        amount: 1000,
        time: "10 March 2021"
      },
      {
        cause_title: "Kids from Ukraine",
        amount: 1000,
        time: "10 March 2021"
      },
      {
        cause_title: "Kids from Ukraine",
        amount: 1000,
        time: "10 March 2021"
      },
      {
        cause_title: "Kids from Ukraine",
        amount: 1000,
        time: "10 March 2021"
      },
      {
        cause_title: "Kids from Ukraine",
        amount: 1000,
        time: "10 March 2021"
      },
    ],
    []
  );

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
            <Table data={data} columns={columns} noHref />
          </div>
        </div>
      </div>
    </UserLayout>
  );
};

export default Account;
