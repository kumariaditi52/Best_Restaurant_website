import React from "react";
import { Container, Typography, Box } from "@mui/material";

function Contact() {
  return (
    <Container>
      <Box sx={{ mt: 5 }}>
        <Typography variant="h4">Contact Us</Typography>
        <Typography sx={{ mt: 2 }}>
          Reach out to us at support@example.com
        </Typography>
      </Box>
    </Container>
  );
}

export default Contact;
