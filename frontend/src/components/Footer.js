import React from "react";
import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box sx={{ bgcolor: "#1976d2", color: "white", p: 2, mt: 5, textAlign: "center" }}>
      <Typography variant="body2">© 2025 MyApp. All rights reserved.</Typography>
    </Box>
  );
}

export default Footer;
