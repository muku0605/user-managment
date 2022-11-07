import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  ButtonGroup,
  Button,
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
} from "@mui/material";
import customFetch from "../utils/axios";

const UserDashboard = () => {
  const [userList, setUserList] = useState([]);
  const fetchUser = async () => {
    try {
      const resp = await customFetch.get("/users");
      setUserList(resp.data.allUsers);
      console.log("user", userList);
    } catch (error) {
      console.log("Error", error);
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <TableContainer component={Paper}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            ></Typography>
            <Button
              varient="contained"
              sx={{
                background: "blue",
                color: "white",
                "&:hover": { background: "#3636bf" },
              }}
            >
              Add User
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Address</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userList.map((row) => (
            <TableRow
              key={row._id}
              sx={{ "&:last-child td,&:last-child th": { border: 0 } }}
            >
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.role}</TableCell>
              <TableCell>{row.address}</TableCell>
              <TableCell>
                <ButtonGroup
                  variant="outlined"
                  aria-label="outlined small  primary button group"
                >
                  <Button>Edit</Button>
                  <Button>Delete</Button>
                </ButtonGroup>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserDashboard;
