import React, { useMemo, useState } from "react";
import Button from "../../components/Button";
import Table from "../../components/Table";
import AdminLayout from "../../utils/AdminLayout";
import { MdAdd } from "react-icons/md";
import CauseModal from "../../components/modals/CauseModal";

const Causes = () => {
  const columns = useMemo(
    () => [
      {
        Header: "Title",
        accessor: "cause_title",
      },
      {
        Header: "Affected area",
        accessor: "affected_area",
      },
      {
        Header: "Target sum to raise",
        accessor: "target_sum",
      },
      {
        Header: "",
        accessor: "actions",
      },
    ],
    []
  );
  const data = useMemo(
    () => [
      {
        cause_title: "Kids from Ukraine",
        affected_area: "Ukraine",
        target_sum: "500 000€",
        actions: ""
      },
      {
        cause_title: "Kids from Ukraine",
        affected_area: "Ukraine",
        target_sum: "500 000€",
        actions: ""
      },
      {
        cause_title: "Kids from Ukraine",
        affected_area: "Ukraine",
        target_sum: "500 000€",
        actions: ""
      },
      {
        cause_title: "Kids from Ukraine",
        affected_area: "Ukraine",
        target_sum: "500 000€",
        actions: ""
      },
      {
        cause_title: "Kids from Ukraine",
        affected_area: "Ukraine",
        target_sum: "500 000€",
        actions: ""
      },
      {
        cause_title: "Kids from Ukraine",
        affected_area: "Ukraine",
        target_sum: "500 000€",
        actions: ""
      },
      {
        cause_title: "Kids from Ukraine",
        affected_area: "Ukraine",
        target_sum: "500 000€",
        actions: ""
      },
      {
        cause_title: "Kids from Ukraine",
        affected_area: "Ukraine",
        target_sum: "500 000€",
        actions: ""
      },
      {
        cause_title: "Kids from Ukraine",
        affected_area: "Ukraine",
        target_sum: "500 000€",
        actions: ""
      },
    ],
    []
  );

  const [openedModal, setOpenedModal] = useState(false);
  return (
    <AdminLayout>
      <CauseModal
        modalIsOpen={openedModal}
        closeModal={() => {
          setOpenedModal(false);
        }}
      />
      <div className="row-between">
        <h2>{data.length} Causes</h2>
        <Button onClick={() => setOpenedModal(true)}>
          <MdAdd /> Add cause
        </Button>
      </div>
      <Table data={data} columns={columns} />
    </AdminLayout>
  );
};

export default Causes;
