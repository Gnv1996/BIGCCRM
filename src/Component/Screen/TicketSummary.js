import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";

const columns = [
  { id: "Ticket_No", label: "TicketNo", minWidth: 170, align: "center" },
  { id: "Site", label: "Site Name", minWidth: 100, align: "center" },
  { id: "Link_ID", label: "Link ID", minWidth: 170, align: "center" },
  {
    id: "Problem_Code",
    label: "Problem Code",
    minWidth: 170,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "Status",
    label: "Status",
    minWidth: 170,
    align: "center",
    format: (value) => value.toFixed(2),
  },
  {
    id: "Closer",
    label: "SR# Closer Time",
    minWidth: 170,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "Up_Timer",
    label: "Up Timer",
    minWidth: 170,
    align: "center",
    format: (value) => value.toFixed(2),
  },
  {
    id: "Down_Timer",
    label: "Down Timer",
    minWidth: 170,
    align: "center",
    format: (value) => value.toFixed(2),
  },
  {
    id: "RFO",
    label: "RFO",
    minWidth: 170,
    align: "center",
    format: (value) => value.toFixed(2),
  },
  {
    id: "Assigned_By",
    label: "Assigned By",
    minWidth: 170,
    align: "center",
    format: (value) => value.toFixed(2),
  },
  {
    id: "Created_By",
    label: "Created By",
    minWidth: 170,
    align: "center",
    format: (value) => value.toFixed(2),
  },
];

function createData(
  Ticket_No,
  Site,
  Link_ID,
  Problem_Code,
  Status,
  Closer,
  Up_Timer,
  Down_Timer,
  RFO,
  Assigned_By,
  Created_By
) {
  return {
    Ticket_No,
    Site,
    Link_ID,
    Problem_Code,
    Status,
    Closer,
    Up_Timer,
    Down_Timer,
    RFO,
    Assigned_By,
    Created_By,
  };
}

const rows = [
  createData(
    "TACOO22925",
    "Pushpa Bhawan",
    "2021143",
    "LINK DOWN",
    "Closed",
    "01:18",
    "57",
    "4",
    "POWER OUTAGE",
    "CRM",
    "CRM"
  ),
  createData(
    "TACOO22925",
    "Pushpa Bhawan",
    "2021143",
    "LINK DOWN",
    "Closed",
    "01:18",
    "57",
    "4",
    "POWER OUTAGE",
    "CRM",
    "CRM"
  ),
  createData(
    "TACOO22925",
    "Pushpa Bhawan",
    "2021143",
    "LINK DOWN",
    "Closed",
    "01:18",
    "57",
    "4",
    "POWER OUTAGE",
    "CRM",
    "CRM"
  ),
  createData(
    "TACOO22925",
    "Pushpa Bhawan",
    "2021143",
    "LINK DOWN",
    "Closed",
    "01:18",
    "57",
    "4",
    "POWER OUTAGE",
    "CRM",
    "CRM"
  ),
  createData(
    "TACOO22925",
    "Pushpa Bhawan",
    "2021143",
    "LINK DOWN",
    "Closed",
    "01:18",
    "57",
    "4",
    "POWER OUTAGE",
    "CRM",
    "CRM"
  ),
  createData(
    "TACOO22925",
    "Pushpa Bhawan",
    "2021143",
    "LINK DOWN",
    "Closed",
    "01:18",
    "57",
    "4",
    "POWER OUTAGE",
    "CRM",
    "CRM"
  ),
  createData(
    "TACOO22925",
    "Pushpa Bhawan",
    "2021143",
    "LINK DOWN",
    "Closed",
    "01:18",
    "57",
    "4",
    "POWER OUTAGE",
    "CRM",
    "CRM"
  ),
  createData(
    "TACOO22925",
    "Pushpa Bhawan",
    "2021143",
    "LINK DOWN",
    "Closed",
    "01:18",
    "57",
    "4",
    "POWER OUTAGE",
    "CRM",
    "CRM"
  ),
  createData(
    "TACOO22925",
    "Pushpa Bhawan",
    "2021143",
    "LINK DOWN",
    "Closed",
    "01:18",
    "57",
    "4",
    "POWER OUTAGE",
    "CRM",
    "CRM"
  ),
  createData(
    "TACOO22925",
    "Pushpa Bhawan",
    "2021143",
    "LINK DOWN",
    "Closed",
    "01:18",
    "57",
    "4",
    "POWER OUTAGE",
    "CRM",
    "CRM"
  ),
  createData(
    "TACOO22925",
    "Pushpa Bhawan",
    "2021143",
    "LINK DOWN",
    "Closed",
    "01:18",
    "57",
    "4",
    "POWER OUTAGE",
    "CRM",
    "CRM"
  ),
  createData(
    "TACOO22925",
    "Pushpa Bhawan",
    "2021143",
    "LINK DOWN",
    "Closed",
    "01:18",
    "57",
    "4",
    "POWER OUTAGE",
    "CRM",
    "CRM"
  ),
];

export default function TicketSummary() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setPage(0);
  };

  const filteredRows = rows.filter((row) =>
    Object.values(row).some(
      (value) =>
        typeof value === "string" &&
        value.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <Paper style={{ width: "100%", overflow: "hidden", marginTop: "120px" }}>
      <Box sx={{ padding: 2 }}>
        <Typography
          variant="h5"
          align="left"
          gutterBottom
          sx={{ fontWeight: "bold", fontSize: 25 }}
        >
          {" "}
          Ticketing
        </Typography>

        <Button
          variant="contained"
          color="primary"
          sx={{ marginTop: 2, padding: "10px" }} // Adds margin on top of the button
        >
          Export Tickets
        </Button>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          p: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            border: "1px solid gray",
            justifyContent: "space-between",
            borderRadius: "5px",
            padding: 2,
          }}
        >
          <strong className="">{filteredRows.length}</strong>
        </Box>
        <TextField
          label="Search"
          variant="outlined"
          value={searchTerm}
          onChange={handleSearchChange}
          size="small"
        />
      </Box>
      <TableContainer style={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{
                    minWidth: column.minWidth,
                    fontWeight: "bold",
                    fontSize: 18,
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    <TableCell>{index + 1}</TableCell>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={filteredRows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
