import React, { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTable } from "react-table";
import Button from "./Button";
import CauseModal from "./modals/CauseModal";
import axiosInstance from "../configurations/axiosInstance";
import { routes } from "../configurations/api";
import { useAuth0 } from "@auth0/auth0-react";

let id = 0;

const Table = ({ data, columns, noHref }) => {
  const navigate = useNavigate();

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  const handleRowClick = (index) => {
    if (!noHref) navigate(`/causes/${index}`, { queryParams: { id: index } });
  };

  const [causes, setCauses] = useState([]);

  const { getAccessTokenSilently } = useAuth0();

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

  const handleClick = (e) => {
    id = e;
  }

  const handleModifyCause = (form) => {
    (async () => {
      const accessToken = await getAccessTokenSilently();
      axiosInstance
        .post(routes.causes.updateCause(id), form, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then(() => {
          getAllCauses();
          window.location.reload(false);
        });
    })();
  };

  const [openedModal, setOpenedModal] = useState(false);
  return (
    <div>
      <CauseModal
        modalIsOpen={openedModal}
        closeModal={() => {
          setOpenedModal(false);
        }}
        submitForm={handleModifyCause}
      />
      <table className="content-table" {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                className="cursor-pointer hover:bg-gray-50"
                onClick={() => handleRowClick(i)}
              >
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>
                      {cell.column.id === "actions" ? (
                        <Button onClick={() =>{ setOpenedModal(true)
                          handleClick(cell.row.original.id)}}>
                          Edit
                        </Button>
                      ) : (
                        cell.render("Cell")
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
