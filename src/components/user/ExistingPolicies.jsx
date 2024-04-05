import { Card, CardContent } from "@mui/material";
import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, childrensEducation, lifeInsurance, retirement) {
  return { name, childrensEducation, lifeInsurance, retirement };
}
const rows = [
  createData("Policy No", "-", "-", "-"),
  createData("Date of Commencement", "01-01-2024", "01-01-2024", "01-01-2024"),
  createData("Annual Premium", "AED 0.00", "AED 0.00", "AED 0.00"),
  createData("Term", "0 Years", "0 Years", "0 Years"),
  createData("Date of Maturity", "01-01-2024", "01-01-2024", "01-01-2024"),
  createData(
    "Benefits",
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit amet"
  ),
];
function ExistingPolicies() {
  return (
    <div className="w-full rounded overflow-y-auto">
      <Card
        className="rounded overflow-scroll"
        style={{ borderRadius: "16px" }}
      >
        <div className="flex justify-between px-9 mt-5">
          <p className="font-bold">EXISTING POLICIES</p>
        </div>
        <CardContent>
          {/* <TableContainer component={Paper}> */}
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell align="left">Children's Education</TableCell>
                <TableCell align="left">Life Insurance</TableCell>
                <TableCell align="left">Retirement</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <span className="text-[#9397BB] ">{row.name}</span>
                  </TableCell>
                  <TableCell align="left">
                    <span className="font-semibold">
                      {" "}
                      {row.childrensEducation}{" "}
                    </span>
                  </TableCell>
                  <TableCell align="left">
                    <span className="font-semibold"> {row.lifeInsurance} </span>
                  </TableCell>
                  <TableCell align="left">
                    <span className="font-semibold"> {row.retirement} </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          {/* </TableContainer> */}
        </CardContent>
      </Card>
    </div>
  );
}

export default ExistingPolicies;
