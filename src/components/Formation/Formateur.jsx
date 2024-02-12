import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Navbar from "./../Navbar";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const Formateur = () => {
const [Formateur,setFormateur]= React.useState([])


  React.useEffect(() => {
    const fetchFormateurs = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/formateur",
          {
            // params: {
            //   page: 0,
            // },
          }
        );
        // Checking if the response status is OK (200)
        if (response.status === 200) {
          // Extracting data from the response
          const data = await response.data;
          // Updating state with the fetched data
          setFormateur(data);
          // Logging the fetched data
          console.log(data);
        }
      } catch (error) {
        // Handling errors
        console.error("Error fetching formations:", error);
      }
    };

    // Calling the fetchFormations function when the component mounts
    fetchFormateurs();
  }, []);
  return (
    <div className="flex flex-col">
      <Navbar />
      <TableContainer component={Paper} className="mt-32 flex flex-col">
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name </StyledTableCell>
              <StyledTableCell align="right">CV</StyledTableCell>
              <StyledTableCell align="right">Fonction</StyledTableCell>
              <StyledTableCell align="right">Status</StyledTableCell>
              <StyledTableCell align="right">Salaire</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Formateur.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.employeur}
                </StyledTableCell>
                <StyledTableCell align="right">{row.cv}</StyledTableCell>
                <StyledTableCell align="right">{row.fonction}</StyledTableCell>
                <StyledTableCell align="right">{row.status}</StyledTableCell>
                <StyledTableCell align="right">{row.salaire}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
export default Formateur;
