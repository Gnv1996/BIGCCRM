import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

const columns = [
  { id: "name", label: "Link ID", minWidth: 170 },
  { id: "device", label: "Device Name", minWidth: 100 },
  {
    id: "IP",
    label: "IP Address",
    minWidth: 170,
    align: "center",
  },
  {
    id: "Live",
    label: "Live Status",
    minWidth: 170,
    align: "center",
  },
  {
    id: "Performance",
    label: "Performance",
    minWidth: 170,
    align: "center",
  },
  {
    id: "Network",
    label: "Network Chart",
    minWidth: 170,
    align: "center",
  },
  {
    id: "Connectivity",
    label: "Connectivity",
    minWidth: 170,
    align: "center",
  },
];

function createData(
  name,
  device,
  IP,
  Live,
  Performance,
  Network,
  Connectivity
) {
  return { name, device, IP, Live, Performance, Network, Connectivity };
}

const rows = [
  createData(
    "1021007",
    "IGL BHAWAN-AIRTEl",
    "103.178.176.250",
    "Down",
    "30 ms",
    ["#000000", "#000000", "#000000", "#000000", "#000000"],
    "IIL"
  ),
  createData(
    "1021007",
    "IGL BHAWAN-AIRTEl",
    "103.178.176.250",
    "Down",
    "30 ms",
    ["#008000", "#008000", "#008000", "#008000", "#008000"],
    "IIL"
  ),
  createData(
    "1021007",
    "IGL BHAWAN-AIRTEl",
    "103.178.176.250",
    "Down",
    "30 ms",
    ["#008000", "#008000", "#008000", "#008000", "#008000"],
    "IIL"
  ),
  createData(
    "1021007",
    "IGL BHAWAN-AIRTEl",
    "103.178.176.250",
    "Down",
    "30 ms",
    ["#008000", "#008000", "#008000", "#008000", "#008000"],
    "IIL"
  ),
  createData(
    "1021007",
    "IGL BHAWAN-AIRTEl",
    "103.178.176.250",
    "Down",
    "30 ms",
    ["#008000", "#008000", "#008000", "#008000", "#008000"],
    "IIL"
  ),
  createData(
    "1021007",
    "IGL BHAWAN-AIRTEl",
    "103.178.176.250",
    "Down",
    "30 ms",
    ["#008000", "#008000", "#008000", "#008000", "#FF0000"],
    "IIL"
  ),
  createData(
    "1021007",
    "IGL BHAWAN-AIRTEl",
    "103.178.176.250",
    "Down",
    "30 ms",
    ["#FF0000", "#FF0000", "#FF0000", "#FF0000", "#FF0000"],
    "IIL"
  ),
  createData(
    "1021007",
    "IGL BHAWAN-AIRTEl",
    "103.178.176.250",
    "Down",
    "30 ms",
    ["#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#F3FF33"],
    "IIL"
  ),
  createData(
    "1021007",
    "IGL BHAWAN-AIRTEl",
    "103.178.176.250",
    "Down",
    "30 ms",
    ["#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#F3FF33"],
    "IIL"
  ),
  createData(
    "1021007",
    "IGL BHAWAN-AIRTEl",
    "103.178.176.250",
    "Down",
    "30 ms",
    ["#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#F3FF33"],
    "IIL"
  ),
  createData(
    "1021007",
    "IGL BHAWAN-AIRTEl",
    "103.178.176.250",
    "Down",
    "30 ms",
    ["#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#F3FF33"],
    "IIL"
  ),
  createData(
    "United Kingdom",
    "IGL BHAWAN-AIRTEl",
    "103.178.176.250",
    "Down",
    "30 ms",
    ["#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#F3FF33"],
    "IIL"
  ),
  createData(
    "Russia",
    "IGL BHAWAN-AIRTEl",
    "103.178.176.250",
    "Down",
    "30 ms",
    ["#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#F3FF33"],
    "IIL"
  ),
  createData(
    "Nigeria",
    "IGL BHAWAN-AIRTEl",
    "103.178.176.250",
    "Down",
    "30 ms",
    ["#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#F3FF33"],
    "IIL"
  ),
  createData(
    "Brazil",
    "IGL BHAWAN-AIRTEl",
    "103.178.176.250",
    "Down",
    "30 ms",
    ["#008000", "#008000", "#008000", "#008000", "#008000"],
    "IIL"
  ),
];

export default function AnalyticScreen() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchText, setSearchText] = useState("");

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const filteredRows = rows.filter((row) => {
    return Object.values(row).some((value) =>
      String(value).toLowerCase().includes(searchText.toLowerCase())
    );
  });

  return (
    <Paper
      sx={{
        width: "100%",
        overflow: "hidden",
        marginTop: 12,
        backgroundColor: "D3D3D3",
      }}
    >
      <Box sx={{ padding: 2 }}>
        <Typography
          variant="h5"
          align="left"
          gutterBottom
          sx={{ fontWeight: "bold" }}
        >
          {" "}
          Network Performance
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          p: 2,
          borderRadius: "5px",
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
          value={searchText}
          onChange={handleSearchChange}
          size="small"
        />
      </Box>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                  sx={{ fontWeight: "bold", fontSize: 20 }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, rowIndex) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={rowIndex}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.id === "Network" ? (
                            <Box sx={{ display: "flex", gap: 0.5 }}>
                              {value.map((color, colorIndex) => (
                                <Box
                                  key={colorIndex}
                                  sx={{
                                    width: 20,
                                    height: 20,
                                    backgroundColor: color,
                                  }}
                                />
                              ))}
                            </Box>
                          ) : column.format && typeof value === "number" ? (
                            column.format(value)
                          ) : (
                            value
                          )}
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
