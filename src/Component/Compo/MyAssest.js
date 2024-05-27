import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button"; // Import MUI Button component
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

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
    sortable: false,
    width: 160,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "IP",
    headerName: "IP",
    sortable: false,
    width: 160,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "Status",
    headerName: "Status",
    sortable: false,
    width: 160,
    align: "center",
    headerAlign: "center",
    renderCell: (params) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <input
          type="text"
          defaultValue={params.value}
          style={{
            borderRadius: 7,
            backgroundColor: "#D3D3D3",
            width: "100px",
            padding: "5px",
            textAlign: "center",
            border: "none",
            cursor: "pointer",
          }}
        />
      </div>
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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <input
          type="text"
          defaultValue={params.value}
          style={{
            borderRadius: 7,
            backgroundColor: "#D3D3D3",
            width: "100px",
            padding: "5px",
            textAlign: "center",
            border: "none",
            cursor: "pointer",
          }}
        />
      </div>
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
      <Button
        variant="contained"
        style={{
          backgroundColor: "#FFC300",
          color: "#000",
          borderRadius: 10,
          padding: "5px 30px",
          cursor: "pointer",
        }}
      >
        Edit
      </Button>
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
      <Button
        variant="contained"
        style={{
          backgroundColor: "#FFC300",
          color: "#000",
          borderRadius: 10,
          padding: "5px 30px",
          cursor: "pointer",
        }}
      >
        View
      </Button>
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

const useStyles = styled(() => ({
  odd: {
    backgroundColor: "#ffffff", // white
  },
  even: {
    backgroundColor: "#FBFBFB", // light gray
  },
}));

export default function MyAssets() {
  const [filteredRows, setFilteredRows] = useState(rows);
  const [searchQuery, setSearchQuery] = useState("");
  const [dropdownValue2, setDropdownValue2] = useState("");
  const [dropdownValue1, setDropdownValue1] = useState("");
  const classes = useStyles();

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

  const handleDropdownChange1 = (event) => {
    setDropdownValue1(event.target.value);
  };

  const handleDropdownChange2 = (event) => {
    setDropdownValue2(event.target.value);
  };

  return (
    <div
      style={{
        height: 400,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#FBFBFB",
      }}
    >
      <div
        style={{
          width: "70%",
          marginBottom: 10,
          marginTop: "140px",
          marginLeft: "18px",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <FormControl fullWidth size="small">
              <InputLabel>Select</InputLabel>
              <Select
                value={dropdownValue2}
                label="Dropdown 2"
                onChange={handleDropdownChange2}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Active</MenuItem>
                <MenuItem value={20}>Passive</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={2}>
            <TextField
              label="Active All/Block All"
              variant="outlined"
              fullWidth
              size="small"
            />
          </Grid>
          <Grid item xs={2}>
            <FormControl fullWidth size="small">
              <InputLabel>Select</InputLabel>
              <Select
                value={dropdownValue1}
                label="Dropdown 1"
                onChange={handleDropdownChange1}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Yes</MenuItem>
                <MenuItem value={20}>No</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={2}>
            <TextField
              label="Ticket All Yes / Ticket All No"
              variant="outlined"
              fullWidth
              size="small"
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              label="Add MyAssests"
              variant="outlined"
              fullWidth
              size="small"
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              label="Export MyAssests"
              variant="outlined"
              fullWidth
              size="small"
            />
          </Grid>
        </Grid>
      </div>
      <div style={{ marginLeft: "15px", padding: 2, color: "gray" }}>
        Display
      </div>
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
            border: "1px solid gray",
            padding: "10px 15px",
            borderRadius: "10px",
            marginLeft: 2,
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
        />
      </div>
      <div style={{ flex: 1, marginLeft: "10px" }}>
        <DataGrid
          rows={filteredRows}
          columns={columns}
          pageSize={5}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          getRowClassName={(params) =>
            params.index % 2 === 0 ? classes.even : classes.odd
          }
        />
      </div>
    </div>
  );
}
