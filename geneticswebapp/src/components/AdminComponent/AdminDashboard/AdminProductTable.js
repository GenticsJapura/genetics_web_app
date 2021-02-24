import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";

const columns = [
  { id: "Product", label: "Product", minWidth: 170 },
  { id: "Price", label: "Price", minWidth: 100 },
  { id: "deleteID", label: "", minWidth: 100 },
];

function createData(Product, Price, deleteID) {
  return { Product, Price, deleteID };
}

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
});

export default function AdminProductTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const [productList, setproductList] = useState([]);

  useEffect(() => {
    getAllData();
  }, []);

  function getAllData() {
    axios
      .get(process.env.REACT_APP_BACKEND_URL + "/api/product")
      .then((res) => {
        setproductList(res.data);
      })
      .catch((err) => {
        alert("Something went wrong");
      });
  }

  //map table row data
  const rows = productList.map((product) => {
    return createData(product.title, product.price + " LKR", product.id);
  });

  function deleteProduct(value) {
    const config = {
      headers: {
        "x-auth-token": localStorage.getItem("x-auth-token"),
      },
    };

    axios
      .delete(
        process.env.REACT_APP_BACKEND_URL + "/api/product/" + value,
        config
      )
      .then(() => {
        //re-render again
        getAllData();
      })
      .catch((err) => {
        alert("Something went wrong");
      });
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.id === "deleteID" ? (
                            <button
                              className="btn btn-danger btn-sm"
                              onClick={() => {
                                deleteProduct(value);
                              }}
                            >
                              Remove
                            </button>
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
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
