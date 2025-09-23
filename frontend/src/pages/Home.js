import React, { useContext } from "react";
import { Container, Typography, Box } from "@mui/material";
import { AuthContext } from "../AuthContext";

function Home() {
  const { user } = useContext(AuthContext);

  return (
    <Container>
      <Box sx={{ mt: 5, textAlign: "center" }}>
        <Typography variant="h4">
          Welcome {user ? user.name : "Guest"} 👋
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          This is your Home Page.
        </Typography>
      </Box>
    </Container>
  );
}

export default Home;
