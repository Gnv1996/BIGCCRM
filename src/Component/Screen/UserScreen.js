import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 70,
    align: "center",
    headerAlign: "center",
    headerClassName: "custom-header",
  },
  {
    field: "name",
    headerName: "Name",
    width: 130,
    align: "center",
    headerAlign: "center",
    headerClassName: "custom-header",
  },
  {
    field: "mobile",
    headerName: "Mobile",
    width: 130,
    align: "center",
    headerAlign: "center",
    headerClassName: "custom-header",
  },
  {
    field: "Emp_id",
    headerName: "Emp-id",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    align: "center",
    headerAlign: "center",
    headerClassName: "custom-header",
  },
  {
    field: "User_Type",
    headerName: "User Type",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    align: "center",
    headerAlign: "center",
    headerClassName: "custom-header",
  },
  {
    field: "Live_Location",
    headerName: "Live Location",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    align: "center",
    headerAlign: "center",
    headerClassName: "custom-header",
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
        Google Map
      </button>
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
    headerClassName: "custom-header",
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
    field: "Status",
    headerName: "Status",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    align: "center",
    headerAlign: "center",
    headerClassName: "custom-header",
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
];

const rows = [
  {
    id: 1,
    name: "Neeraj Kumar",
    mobile: "8802482398",
    Emp_id: "neeraj@fiberstory.in",
    User_Type: "Admin",

    Status: "ACTIVE",
  },
  {
    id: 2,
    name: "Neeraj Kumar",
    mobile: "8802482398",
    Emp_id: "neeraj@fiberstory.in",
    User_Type: "Admin",

    Status: "ACTIVE",
  },
  {
    id: 3,
    name: "Neeraj Kumar",
    mobile: "8802482398",
    Emp_id: "neeraj@fiberstory.in",
    User_Type: "Admin",

    Status: "ACTIVE",
  },
  {
    id: 4,
    name: "Neeraj Kumar",
    mobile: "8802482398",
    Emp_id: "neeraj@fiberstory.in",
    User_Type: "Admin",

    Status: "ACTIVE",
  },
  {
    id: 5,
    name: "Neeraj Kumar",
    mobile: "8802482398",
    Emp_id: "neeraj@fiberstory.in",
    User_Type: "Admin",

    Status: "ACTIVE",
  },
  {
    id: 6,
    name: "Neeraj Kumar",
    mobile: "8802482398",
    Emp_id: "neeraj@fiberstory.in",
    User_Type: "Admin",

    Status: "ACTIVE",
  },
  {
    id: 7,
    name: "Neeraj Kumar",
    mobile: "8802482398",
    Emp_id: "neeraj@fiberstory.in",
    User_Type: "Admin",

    Status: "ACTIVE",
  },
  {
    id: 8,
    name: "Neeraj Kumar",
    mobile: "8802482398",
    Emp_id: "neeraj@fiberstory.in",
    User_Type: "Admin",

    Status: "ACTIVE",
  },
  {
    id: 9,
    name: "Neeraj Kumar",
    mobile: "8802482398",
    Emp_id: "neeraj@fiberstory.in",
    User_Type: "Admin",
    Status: "ACTIVE",
  },
];

export default function UserScreen() {
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
      }}
    >
      <Box sx={{ padding: 2 }}>
        <Typography
          variant="h5"
          align="left"
          gutterBottom
          sx={{ fontWeight: "bold", fontSize: 25 }}
        >
          {" "}
          Users List
        </Typography>

        <Button
          variant="contained"
          color="primary"
          sx={{ marginTop: 2, padding: "10px" }} // Adds margin on top of the button
        >
          Add Users
        </Button>
      </Box>
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
