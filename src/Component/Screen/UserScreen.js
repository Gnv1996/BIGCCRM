import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useMediaQuery } from "@mui/material";

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
    sortable: false,
    width: 160,
    align: "center",
    headerAlign: "center",
    headerClassName: "custom-header",
  },
  {
    field: "User_Type",
    headerName: "User Type",
    sortable: false,
    width: 160,
    align: "center",
    headerAlign: "center",
    headerClassName: "custom-header",
  },
  {
    field: "Live_Location",
    headerName: "Live Location",
    sortable: false,
    width: 160,
    align: "center",
    headerAlign: "center",
    headerClassName: "custom-header",
    renderCell: (params) => (
      <button
        variant="contained"
        style={{
          backgroundColor: "#FFC300",
          margin: "10px",
          width: "100px",
          height: "40px",
          textAlign: "center",
          borderRadius: "7px",
          display: "flex", // Set display to flex
          justifyContent: "center", // Center content horizontally
          alignItems: "center",
          "&:hover": {
            backgroundColor: "#FFA500",
          },
        }}
      >
        Google Map
      </button>
    ),
  },
  {
    field: "Edit",
    headerName: "Edit",
    sortable: false,
    width: 160,
    align: "center",
    headerAlign: "center",
    headerClassName: "custom-header",
    renderCell: (params) => (
      <button
        style={{
          backgroundColor: "#FFC300",
          margin: "10px",
          width: "100px",
          height: "40px",
          textAlign: "center",
          borderRadius: "7px",
          display: "flex", // Set display to flex
          justifyContent: "center", // Center content horizontally
          alignItems: "center",
          "&:hover": {
            backgroundColor: "#FFA500",
          },
        }}
      >
        Edit
      </button>
    ),
  },
  {
    field: "Status",
    headerName: "Status",
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
  const isSmallScreen = useMediaQuery("(max-width:600px)");

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
        width: "100%",
        display: "flex",
        flexDirection: "column",
        padding: isSmallScreen ? "10px" : "30px",
        marginTop: "100px",
      }}
    >
      <Box sx={{ marginBottom: "10px" }}>
        <Typography
          variant="h5"
          align="left"
          gutterBottom
          sx={{ fontWeight: "bold", fontSize: 25 }}
        >
          Users List
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ marginTop: 2, padding: "10px" }}
        >
          Add Users
        </Button>
      </Box>
      <div style={{ padding: 2, color: "gray" }}>Display</div>
      <Box
        sx={{
          display: "flex",
          flexDirection: isSmallScreen ? "column" : "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 2,
          // marginLeft: "20px",
        }}
      >
        <Box
          sx={{
            border: "1px solid gray",
            padding: "10px 15px",
            borderRadius: "10px",
          }}
        >
          <strong>{filteredRows.length}</strong>
        </Box>
        <TextField
          label="Search"
          variant="outlined"
          value={searchQuery}
          onChange={handleSearchChange}
          size="small"
          sx={{
            width: isSmallScreen ? "100%" : "auto",
            marginTop: isSmallScreen ? 2 : 0,
          }}
        />
      </Box>
      <Box sx={{ flex: 1 }}>
        <DataGrid
          rows={filteredRows}
          columns={columns}
          pageSize={5}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          onFilterModelChange={handleFilterModelChange}
        />
      </Box>
    </div>
  );
}
