import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  TextField,
  Button,
  Card,
} from "@mui/material";

function Contact() {
  return (
    <Box
      sx={{
        position: "relative",
        bgcolor: "#fff8f0",
        py: 10,
        backgroundImage:
          "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        color: "white",
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          bgcolor: "rgba(0,0,0,0.6)",
        }}
      />

      <Container
        maxWidth="lg"
        sx={{ position: "relative", zIndex: 2, textAlign: "center", mb: 6 }}
      >
        {/* ===== Hero Text ===== */}
        <Typography
          variant="h2"
          sx={{ fontWeight: "bold", mb: 2, color: "#f1c40f" }}
        >
          Let’s Connect 🍔
        </Typography>
        <Typography
          variant="h6"
          sx={{ maxWidth: "700px", mx: "auto", color: "#ecf0f1" }}
        >
          Got a question, craving, or event to plan? Drop us a message – we’re
          just a click away.
        </Typography>
      </Container>

      {/* ===== Contact Section ===== */}
      <Container maxWidth="md" sx={{ position: "relative", zIndex: 2 }}>
        <Card
          sx={{
            p: 5,
            borderRadius: "20px",
            bgcolor: "rgba(255,255,255,0.9)",
            boxShadow: 6,
          }}
        >
          <Grid container spacing={4}>
            {/* Left Contact Info */}
            <Grid item xs={12} md={6}>
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", mb: 3, color: "#2c3e50" }}
              >
                Contact Details
              </Typography>
              <Typography sx={{ mb: 1, color: "text.secondary" }}>
                📍 123 Foodie Street, Gourmet City
              </Typography>
              <Typography sx={{ mb: 1, color: "text.secondary" }}>
                📞 +91 99999999999
              </Typography>
              <Typography sx={{ mb: 1, color: "text.secondary" }}>
                📧 support@example.com
              </Typography>
              <Typography sx={{ mb: 3, color: "text.secondary" }}>
                ⏰ Mon - Sun | 10:00 AM - 11:00 PM
              </Typography>
            </Grid>

            {/* Right Form */}
            <Grid item xs={12} md={6}>
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", mb: 3, color: "#2c3e50" }}
              >
                Send a Message
              </Typography>
              <Box component="form" noValidate autoComplete="off">
                <TextField
                  fullWidth
                  label="Your Name"
                  variant="outlined"
                  sx={{ mb: 2 }}
                />
                <TextField
                  fullWidth
                  label="Your Email"
                  type="email"
                  variant="outlined"
                  sx={{ mb: 2 }}
                />
                <TextField
                  fullWidth
                  label="Your Message"
                  multiline
                  rows={4}
                  variant="outlined"
                  sx={{ mb: 2 }}
                />
                <Button
                  fullWidth
                  variant="contained"
                  sx={{
                    bgcolor: "#e67e22",
                    "&:hover": { bgcolor: "#d35400" },
                    fontWeight: "bold",
                    py: 1.5,
                    borderRadius: "30px",
                  }}
                >
                  Send Message
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Card>
      </Container>
    </Box>
  );
}

export default Contact;
