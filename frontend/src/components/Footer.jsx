// import React from "react";
// import { Box, Typography } from "@mui/material";

// function Footer() {
//   return (
//     <Box sx={{ bgcolor: "#1976d2", color: "white", p: 2, mt: 5, textAlign: "center" }}>
//       <Typography variant="body2">© 2025 MyApp. All rights reserved.</Typography>
//     </Box>
//   );
// }

// export default Footer;


import React from "react";
import { Box, Typography, Link, Grid } from "@mui/material";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#d35400", // 🍊 Restaurant orange
        color: "#fff8f0",
        py: 4,
        mt: "auto",
        boxShadow: "0 -4px 10px rgba(0,0,0,0.2)",
      }}
    >
      <Grid container spacing={3} justifyContent="center">
        {/* Column 1 - Logo */}
        <Grid item xs={12} md={4} textAlign="center">
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", fontFamily: "'Poppins', sans-serif" }}
          >
            🍴 FoodieHub
          </Typography>
          <Typography variant="body2">
            Taste the best flavors in town!
          </Typography>
        </Grid>

        {/* Column 2 - Links */}
        <Grid item xs={12} md={4} textAlign="center">
          <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: "bold" }}>
            Quick Links
          </Typography>
          <Box>
            <Link href="/home" color="inherit" underline="hover" sx={{ mx: 1 }}>
              Home
            </Link>
            <Link
              href="/services"
              
              color="inherit"
              underline="hover"
              sx={{ mx: 1 }}
            >
              Services
            </Link>
            <Link
              href="/about"
              color="inherit"
              underline="hover"
              sx={{ mx: 1 }}
            >
              About
            </Link>
            <Link
              href="/contact"
              color="inherit"
              underline="hover"
              sx={{ mx: 1 }}
            >
              Contact
            </Link>
          </Box>
        </Grid>

        {/* Column 3 - Contact */}
        <Grid item xs={12} md={4} textAlign="center">
          <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: "bold" }}>
            Contact Us
          </Typography>
          <Typography variant="body2">📍 Gurugram, Haryana</Typography>
          <Typography variant="body2">📞 +91 9876543210</Typography>
          <Typography variant="body2">
            📧 support@foodiehub.com
          </Typography>
        </Grid>
      </Grid>

      {/* Bottom Copyright */}
      <Box textAlign="center" mt={3} borderTop="1px solid rgba(255,255,255,0.2)" pt={2}>
        <Typography variant="body2">
          © {new Date().getFullYear()} FoodieHub. All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;

