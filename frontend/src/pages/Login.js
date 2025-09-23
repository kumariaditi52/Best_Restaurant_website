// import React, { useState, useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { TextField, Button, Container, Typography, Box } from "@mui/material";
// import { AuthContext } from "../AuthContext";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();
//   const { setIsAuthenticated, setUser } = useContext(AuthContext);

//   const handleLogin = (e) => {
//     e.preventDefault();
//     const storedUser = JSON.parse(localStorage.getItem("user"));

//     if (storedUser && storedUser.email === email && storedUser.password === password) {
//       setIsAuthenticated(true);
//       setUser(storedUser);
//       navigate("/home"); // ✅ Redirect to Home
//     } else {
//       alert("Invalid credentials");
//     }
//   };

//   return (
//     <Container maxWidth="xs">
//       <Box sx={{ mt: 5 }}>
//         <Typography variant="h4" align="center" gutterBottom>
//           Login
//         </Typography>
//         <form onSubmit={handleLogin}>
//           <TextField
//             label="Email"
//             type="email"
//             fullWidth
//             margin="normal"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <TextField
//             label="Password"
//             type="password"
//             fullWidth
//             margin="normal"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <Button type="submit" fullWidth variant="contained" sx={{ mt: 2 }}>
//             Login
//           </Button>
//         </form>
//       </Box>
//     </Container>
//   );
// }

// export default Login;


import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container, Typography, Box, Paper } from "@mui/material";
import { AuthContext } from "../AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setIsAuthenticated, setUser } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser && storedUser.email === email && storedUser.password === password) {
      setIsAuthenticated(true);
      setUser(storedUser);
      navigate("/home");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <Container maxWidth="xs">
      <Paper elevation={6} sx={{ p: 4, mt: 8, borderRadius: 3, backgroundColor: "#fff8f0" }}>
        <Typography variant="h4" align="center" gutterBottom sx={{ color: "#d35400" }}>
          🍕 Login
        </Typography>
        <Typography align="center" sx={{ color: "#7f8c8d", mb: 2 }}>
          Login to explore our tasty menu
        </Typography>
        <form onSubmit={handleLogin}>
          <TextField
            label="Email Address"
            placeholder="Enter your email"
            type="email"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            sx={{ mt: 2, bgcolor: "#e67e22", "&:hover": { bgcolor: "#d35400" } }}
          >
            Login
          </Button>
        </form>
      </Paper>
    </Container>
  );
}

export default Login;

