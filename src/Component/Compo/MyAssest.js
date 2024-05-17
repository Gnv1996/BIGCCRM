import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 70,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "Link_ID",
    headerName: "Link_ID",
    width: 130,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "Site_Name",
    headerName: "Site_Name",
    width: 130,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "Connectivity",
    headerName: "Connectivity",
    type: "number",
    width: 90,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "Link_BW",
    headerName: "Link_BW",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "IP",
    headerName: "IP",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "Status",
    headerName: "Status",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    align: "center",
    headerAlign: "center",
    renderCell: (params) => (
      <input
        type="text"
        defaultValue={params.value}
        style={{
          borderRadius: 7,
          backgroundColor: "#D3D3D3",
          padding: "5px",
          textAlign: "center",
          border: "none",
          cursor: "pointer",
        }}
      />
    ),
  },
  {
    field: "Auto_Ticket",
    headerName: "Auto_Ticket",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    align: "center",
    headerAlign: "center",
    renderCell: (params) => (
      <input
        type="text"
        defaultValue={params.value}
        style={{
          borderRadius: 7,
          backgroundColor: "#D3D3D3",
          padding: "5px",
          textAlign: "center",
          border: "none",
          cursor: "pointer",
        }}
      />
    ),
  },
  {
    field: "Edit",
    headerName: "Edit",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    align: "center",
    headerAlign: "center",
    renderCell: (params) => (
      <button
        style={{
          borderRadius: 10,
          backgroundColor: "#FFC300",
          padding: "5px 30px",
          border: "none",
          cursor: "pointer",
        }}
      >
        Edit
      </button>
    ),
  },
  {
    field: "View",
    headerName: "View",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    align: "center",
    headerAlign: "center",
    renderCell: (params) => (
      <button
        style={{
          borderRadius: 10,
          backgroundColor: "#FFC300",
          padding: "5px 30px",
          border: "none",
          cursor: "pointer",
        }}
      >
        View
      </button>
    ),
  },
];

const rows = [
  {
    id: 1,
    Link_ID: "2021010",
    Site_Name: "Nanak Pyau",
    Connectivity: "ILL",
    Link_BW: "20 Mbps",
    IP: "192.168.164.1",
    Status: "ACTIVE",
    Auto_Ticket: "YES",
  },
  {
    id: 2,
    Link_ID: "2021010",
    Site_Name: "Nanak Pyau",
    Connectivity: "ILL",
    Link_BW: "20 Mbps",
    IP: "192.168.164.1",
    Status: "ACTIVE",
    Auto_Ticket: "YES",
  },
  {
    id: 3,
    Link_ID: "2021010",
    Site_Name: "Nanak Pyau",
    Connectivity: "ILL",
    Link_BW: "20 Mbps",
    IP: "192.168.164.1",
    Status: "ACTIVE",
    Auto_Ticket: "YES",
  },
  {
    id: 4,
    Link_ID: "2021010",
    Site_Name: "Nanak Pyau",
    Connectivity: "ILL",
    Link_BW: "20 Mbps",
    IP: "192.168.164.1",
    Status: "ACTIVE",
    Auto_Ticket: "YES",
  },
  {
    id: 5,
    Link_ID: "2021010",
    Site_Name: "Nanak Pyau",
    Connectivity: "ILL",
    Link_BW: "20 Mbps",
    IP: "192.168.164.1",
    Status: "ACTIVE",
    Auto_Ticket: "YES",
  },
  {
    id: 6,
    Link_ID: "2021010",
    Site_Name: "Nanak Pyau",
    Connectivity: "ILL",
    Link_BW: "20 Mbps",
    IP: "192.168.164.1",
    Status: "ACTIVE",
    Auto_Ticket: "YES",
  },
  {
    id: 7,
    Link_ID: "2021010",
    Site_Name: "Nanak Pyau",
    Connectivity: "ILL",
    Link_BW: "20 Mbps",
    IP: "192.168.164.1",
    Status: "ACTIVE",
    Auto_Ticket: "YES",
  },
  {
    id: 8,
    Link_ID: "2021010",
    Site_Name: "Nanak Pyau",
    Connectivity: "ILL",
    Link_BW: "20 Mbps",
    IP: "192.168.164.1",
    Status: "ACTIVE",
    Auto_Ticket: "YES",
  },
  {
    id: 9,
    Link_ID: "2021010",
    Site_Name: "Nanak Pyau",
    Connectivity: "ILL",
    Link_BW: "20 Mbps",
    IP: "192.168.164.1",
    Status: "ACTIVE",
    Auto_Ticket: "YES",
  },
];

export default function MyAssets() {
  const [filteredRows, setFilteredRows] = useState(rows);
  const [searchQuery, setSearchQuery] = useState("");

  const handleFilterModelChange = (model) => {
    let filteredRows = rows.filter((row) => {
      let valid = true;
      model.forEach((filter) => {
        const value = row[filter.columnField];
        if (value !== null && value !== undefined) {
          valid =
            valid &&
            value.toString().toLowerCase().includes(filter.value.toLowerCase());
        }
      });
      return valid;
    });
    setFilteredRows(filteredRows);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    let filteredRows = rows.filter((row) => {
      let valid = false;
      Object.values(row).forEach((value) => {
        if (value !== null && value !== undefined) {
          valid =
            valid ||
            value
              .toString()
              .toLowerCase()
              .includes(event.target.value.toLowerCase());
        }
      });
      return valid;
    });
    setFilteredRows(filteredRows);
  };

  return (
    <div
      style={{
        height: 400,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        marginTop: "140px",
        backgroundColor: "D3D3D3",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 10,
        }}
      >
        <Box
          sx={{
            display: "flex",
            border: "1px solid gray",
            justifyContent: "space-between",
            p: 2,
            marginLeft: 7,
            borderRadius: 5,
          }}
        >
          <strong className="">{filteredRows.length}</strong>
        </Box>
        <TextField
          label="Search"
          variant="outlined"
          value={searchQuery}
          onChange={handleSearchChange}
          size="small"
        />
      </div>
      <div style={{ flex: 1 }}>
        <DataGrid
          rows={filteredRows}
          columns={columns}
          pageSize={5}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          onFilterModelChange={handleFilterModelChange}
        />
      </div>
    </div>
  );
}
