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

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000";
function Login() {
  const navigate = useNavigate();
  const { setIsAuthenticated, setUser } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const validate = () => {
    if (!email.trim() || !password) {
      setErrorMsg("Please enter email and password.");
      return false;
    }
    const emailRe = /\S+@\S+\.\S+/;
    if (!emailRe.test(email)) {
      setErrorMsg("Please enter a valid email.");
      return false;
    }
    setErrorMsg("");
    return true;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setErrorMsg("");

    try {
      const res = await fetch(`${API_BASE}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), password })
      });
      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.message || "Login failed");
        setLoading(false);
        return;
      }

      // save token + user
      if (data.token && data.user) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));

        // update context
        setIsAuthenticated(true);
        setUser(data.user);

        // navigate to protected home
        navigate("/home");
      } else {
        setErrorMsg("Login failed: invalid response from server.");
      }

    } catch (err) {
      console.error("Login error:", err);
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
          🍕 Welcome Back
        </Typography>

        <Typography align="center" sx={{ color: "#7f8c8d", mb: 2 }}>
          Login to continue ordering delicious food
        </Typography>

        {errorMsg && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {errorMsg}
          </Alert>
        )}

        <Box component="form" onSubmit={handleLogin} noValidate>
          <TextField
            label="Email Address"
            placeholder="you@example.com"
            type="email"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoFocus
          />

          <TextField
            label="Password"
            placeholder="Enter your password"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
            {loading ? <CircularProgress size={22} color="inherit" /> : "Login"}
          </Button>

          <Typography align="center" sx={{ mt: 2, color: "#7f8c8d" }}>
            New here?{" "}
            <Box
              component="span"
              onClick={() => navigate("/")}
              sx={{ color: "#d35400", cursor: "pointer", fontWeight: "bold" }}
            >
              Create an account
            </Box>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}

export default Login;
