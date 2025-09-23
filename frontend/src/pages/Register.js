// import React, { useState, useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { TextField, Button, Container, Typography, Box } from "@mui/material";
// import { AuthContext } from "../AuthContext";

// function Register() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();
//   const { setUser } = useContext(AuthContext);

//   const handleRegister = (e) => {
//     e.preventDefault();
//     const newUser = { name, email, password };

//     // Save user to localStorage
//     localStorage.setItem("user", JSON.stringify(newUser));

//     // Reset context (not logged in yet)
//     setUser(null);

//     // Redirect to Login
//     navigate("/login");
//   };

//   return (
//     <Container maxWidth="xs">
//       <Box sx={{ mt: 5 }}>
//         <Typography variant="h4" align="center" gutterBottom>
//           Register
//         </Typography>
//         <form onSubmit={handleRegister}>
//           <TextField
//             label="Name"
//             fullWidth
//             margin="normal"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
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
//             Register
//           </Button>
//         </form>
//       </Box>
//     </Container>
//   );
// }

// export default Register;



import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container, Typography, Box, Paper } from "@mui/material";
import { AuthContext } from "../AuthContext";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const newUser = { name, email, password };
    localStorage.setItem("user", JSON.stringify(newUser));
    setUser(null);
    navigate("/login");
  };

  return (
    <Container maxWidth="xs">
      <Paper elevation={6} sx={{ p: 4, mt: 8, borderRadius: 3, backgroundColor: "#fff8f0" }}>
        <Typography variant="h4" align="center" gutterBottom sx={{ color: "#d35400" }}>
          🍴 Register
        </Typography>
        <Typography align="center" sx={{ color: "#7f8c8d", mb: 2 }}>
          Create your account to order delicious food
        </Typography>
        <form onSubmit={handleRegister}>
          <TextField
            label="Full Name"
            placeholder="Enter your name"
            fullWidth
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
            Register
          </Button>
        </form>
      </Paper>
    </Container>
  );
}

export default Register;

