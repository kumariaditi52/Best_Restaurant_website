import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  Paper,
  Alert,
  CircularProgress
} from "@mui/material";
import { AuthContext } from "../AuthContext";

// backend base URL (set REACT_APP_API_URL in .env if different)
const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000";

function Register() {
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const validate = () => {
    if (!name.trim() || !email.trim() || !password) {
      setErrorMsg("Please fill all fields.");
      return false;
    }
    // simple email regex
    const emailRe = /\S+@\S+\.\S+/;
    if (!emailRe.test(email)) {
      setErrorMsg("Please enter a valid email address.");
      return false;
    }
    if (password.length < 6) {
      setErrorMsg("Password should be at least 6 characters.");
      return false;
    }
    if (password !== confirm) {
      setErrorMsg("Passwords do not match.");
      return false;
    }
    setErrorMsg("");
    return true;
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setErrorMsg("");
    try {
      const res = await fetch(`${API_BASE}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), email: email.trim(), password })
      });
      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.message || "Registration failed");
        setLoading(false);
        return;
      }

      // optional: update context or leave user null until login
      setUser(null);

      setSuccessMsg("Registered successfully! Redirecting to login...");
      // navigate to login after short delay so user sees message
      setTimeout(() => {
        navigate("/login");
      }, 900);

    } catch (err) {
      console.error("Register error:", err);
      setErrorMsg("Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="xs" sx={{ mb: 6 }}>
      <Paper
        elevation={6}
        sx={{
          p: 4,
          mt: 8,
          borderRadius: 3,
          backgroundColor: "#fff8f0"
        }}
      >
        <Typography variant="h4" align="center" gutterBottom sx={{ color: "#d35400" }}>
          🍽️ Create Account
        </Typography>

        <Typography align="center" sx={{ color: "#7f8c8d", mb: 2 }}>
          Sign up to order from FoodieHub — deliciousness awaits!
        </Typography>

        {errorMsg && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {errorMsg}
          </Alert>
        )}
        {successMsg && (
          <Alert severity="success" sx={{ mb: 2 }}>
            {successMsg}
          </Alert>
        )}

        <Box component="form" onSubmit={handleRegister} noValidate>
          <TextField
            label="Full Name"
            placeholder="e.g. name"
            fullWidth
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
            inputProps={{ maxLength: 60 }}
          />

          <TextField
            label="Email Address"
            placeholder="you@example.com"
            type="email"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            helperText="We'll never share your email."
          />

          <TextField
            label="Password"
            placeholder="At least 6 characters"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <TextField
            label="Confirm Password"
            placeholder="Repeat your password"
            type="password"
            fullWidth
            margin="normal"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 2,
              bgcolor: "#e67e22",
              "&:hover": { bgcolor: "#d35400" },
              py: 1.2,
            }}
            disabled={loading}
          >
            {loading ? <CircularProgress size={22} color="inherit" /> : "Register"}
          </Button>

          <Typography align="center" sx={{ mt: 2, color: "#7f8c8d" }}>
            Already have an account?{" "}
            <Box
              component="span"
              onClick={() => navigate("/login")}
              sx={{ color: "#d35400", cursor: "pointer", fontWeight: "bold" }}
            >
              Login
            </Box>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}

export default Register;
