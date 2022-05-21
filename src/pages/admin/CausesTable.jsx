import React, { useMemo, useState, useCallback, useEffect } from "react";
import Button from "../../components/Button";
import Table from "../../components/Table";
import AdminLayout from "../../utils/AdminLayout";
import { MdAdd } from "react-icons/md";
import CauseModal from "../../components/modals/CauseModal";
import axiosInstance from "../../configurations/axiosInstance";
import { routes } from "../../configurations/api";
import { useAuth0 } from "@auth0/auth0-react";

const CausesTable = () => {
  const columns = useMemo(
    () => [
      {
        Header: "Title",
        accessor: "title",
      },
      {
        Header: "Affected area",
        accessor: "zone",
      },
      {
        Header: "Target sum to raise ($)",
        accessor: "target",
      },
      {
        Header: "Amount raised ($)",
        accessor: "amountRaised",
      },
      {
        Header: "",
        accessor: "actions",
      },
    ],
    []
  );
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

  const handleAddCause = (form) => {
    (async () => {
      const accessToken = await getAccessTokenSilently();
      axiosInstance
        .post(routes.causes.addCause, form, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then(() => {
          getAllCauses()});
    })();
  };

  const [openedModal, setOpenedModal] = useState(false);
  return (
    <AdminLayout>
      <CauseModal
        modalIsOpen={openedModal}
        closeModal={() => {
          setOpenedModal(false);
        }}
        submitForm={handleAddCause}
        ariaHideApp={false}
      />
      <div className="row-between">
        <h2>{causes.length} Causes</h2>
        <Button onClick={() => setOpenedModal(true)}>
          <MdAdd /> Add cause
        </Button>
      </div>
      <Table data={causes} columns={columns} noHref/>
    </AdminLayout>
  );
};

export default CausesTable;
