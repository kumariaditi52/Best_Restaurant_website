import React from "react";
import { Container, Typography, Box } from "@mui/material";

function Services() {
  return (
    <Container>
      <Box sx={{ mt: 5 }}>
        <Typography variant="h4">Our Services</Typography>
        <Typography sx={{ mt: 2 }}>
          We provide top-notch services to help your business grow.
        </Typography>
      </Box>
    </Container>
  );
}

export default Services;  // ✅ important
