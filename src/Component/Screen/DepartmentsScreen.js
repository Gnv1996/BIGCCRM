import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

function createData(depart_code, depart_name) {
  return { depart_code, depart_name };
}

const rows = [
  createData("D01", "SUPPORT"),
  createData("D02", "MONITORING"),
  createData("D03", "ADMIN"),
  createData("D04", "PROJECT"),
  createData("D05", "FIELD TEAM"),
];

export default function DepartmentScreen() {
  return (
    <Box sx={{ padding: 2, marginTop: 12, backgroundColor: "#f5f5f5" }}>
      <Typography
        variant="h5"
        align="left"
        gutterBottom
        sx={{ fontWeight: "bold", fontSize: 25 }}
      >
        Departments
      </Typography>
      <Button
        variant="contained"
        color="primary"
        sx={{ marginTop: 2, padding: "10px" }} // Adds margin on top of the button
      >
        Add Department
      </Button>

      <div style={{ padding: 2, color: "gray", marginTop: "5px" }}>Display</div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 2,
          marginTop: 2,
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{
            border: "1px solid gray",
            padding: "10px 15px",
            borderRadius: "10px",
          }}
        >
          {rows.length}
        </Typography>
        <TextField label="Search" variant="outlined" size="small" />
      </Box>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: "bold", fontSize: 20 }}>
                Department Code
              </TableCell>
              <TableCell
                align="center" // Aligns content to the center
                style={{ fontWeight: "bold", fontSize: 20 }}
              >
                Department Name
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                key={row.depart_code}
                className={index % 2 === 0 ? "even-row" : "odd-row"}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" align="left">
                  {" "}
                  {/* Aligns content to the left */}
                  {row.depart_code}
                </TableCell>
                <TableCell align="center">{row.depart_name}</TableCell>{" "}
                {/* Aligns content to the center */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
