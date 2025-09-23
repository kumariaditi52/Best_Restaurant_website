import React from "react";
import { Container, Typography, Box } from "@mui/material";

function About() {
  return (
    <Container>
      <Box sx={{ mt: 5 }}>
        <Typography variant="h4">About Us</Typography>
        <Typography sx={{ mt: 2 }}>
          We are a team of passionate developers building modern applications.
        </Typography>
      </Box>
    </Container>
  );
}

export default About;  // ✅ important
