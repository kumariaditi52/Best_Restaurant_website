// import React, { useContext } from "react";
// import { AppBar, Toolbar, Typography, Button } from "@mui/material";
// import { Link, useNavigate } from "react-router-dom";
// import { AuthContext } from "../AuthContext";

// function Header() {
//   const { isAuthenticated, setIsAuthenticated, setUser } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     setIsAuthenticated(false);
//     setUser(null);
//     localStorage.removeItem("user");
//     navigate("/login");
//   };

//   return (
//     <AppBar position="static">
//       <Toolbar>
//         <Typography variant="h6" sx={{ flexGrow: 1 }}>
//           logo
//         </Typography>
//         {isAuthenticated ? (
//           <>
//             <Button color="inherit" component={Link} to="/home">Home</Button>
//             <Button color="inherit" component={Link} to="/services">Services</Button>
//             <Button color="inherit" component={Link} to="/about">About</Button>
//             <Button color="inherit" component={Link} to="/contact">Contact</Button>
//             <Button color="inherit" onClick={handleLogout}>Logout</Button>
//           </>
//         ) : (
//           <>
//             <Button color="inherit" component={Link} to="/">Register</Button>
//             <Button color="inherit" component={Link} to="/login">Login</Button>
//           </>
//         )}
//       </Toolbar>
//     </AppBar>
//   );
// }

// export default Header;


import React, { useContext } from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";

function Header() {
  const { isAuthenticated, setIsAuthenticated, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#d35400", // 🍊 Restaurant orange
        boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
      }}
    >
      <Toolbar>
        {/* Logo / Brand Name */}
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            fontWeight: "bold",
            cursor: "pointer",
            color: "#fff8f0",
            fontFamily: "'Poppins', sans-serif",
          }}
          onClick={() => navigate("/home")}
        >
          🍴 FoodieHub
        </Typography>

        {/* Navigation */}
        {isAuthenticated ? (
          <>
            <Button
              component={Link}
              to="/home"
              sx={{ color: "#fff8f0", "&:hover": { bgcolor: "#e67e22" } }}
            >
              Home
            </Button>
            <Button
              component={Link}
              to="/services"
              sx={{ color: "#fff8f0", "&:hover": { bgcolor: "#e67e22" } }}
            >
              Services
            </Button>
            <Button
              component={Link}
              to="/about"
              sx={{ color: "#fff8f0", "&:hover": { bgcolor: "#e67e22" } }}
            >
              About
            </Button>
            <Button
              component={Link}
              to="/contact"
              sx={{ color: "#fff8f0", "&:hover": { bgcolor: "#e67e22" } }}
            >
              Contact
            </Button>
            <Button
              onClick={handleLogout}
              sx={{
                color: "#fff8f0",
                bgcolor: "#c0392b",
                ml: 1,
                "&:hover": { bgcolor: "#a93226" },
              }}
            >
              Logout
            </Button>
          </>
        ) : (
          <>
            <Button
              component={Link}
              to="/"
              sx={{ color: "#fff8f0", "&:hover": { bgcolor: "#e67e22" } }}
            >
              Register
            </Button>
            <Button
              component={Link}
              to="/login"
              sx={{ color: "#fff8f0", "&:hover": { bgcolor: "#e67e22" } }}
            >
              Login
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Header;

