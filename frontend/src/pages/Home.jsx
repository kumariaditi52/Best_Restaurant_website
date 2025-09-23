import React from "react";
import { Typography, Box, Button as MuiButton } from "@mui/material";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

function Home() {
  const dishes = [
    { name: "Salad Bowl", price: "$10", image: "./assets/dahipuri.jpg" },
    { name: "Tofu Stir Fry", price: "$11", image: "./assets/hamburger.jpg" },
    { name: "Rice & Egg", price: "$8", image: "./assets/images.jpg" },
    { name: "Pasta Delight", price: "$14", image: "./assets/momos.jpg" },
    { name: "Veg Sandwich", price: "$9", image: "./assets/pani.jpg" },
    { name: "Cheese Burger", price: "$13", image: "./assets/pizza.jpg" },
  ];

  return (
    <div className="relative">

      {/* Hero Section */}
      <div
        className="relative min-h-screen flex flex-col lg:flex-row items-center justify-between px-5 lg:px-32 bg-cover bg-center"
        style={{ backgroundImage: "url('./assets/backgroundimg.jpg')" }}
      >
        {/* Overlay for text contrast */}
        <div className="absolute inset-0 bg-black/30 z-10"></div>

        {/* Left Text Content */}
        <div className="lg:w-1/2 flex flex-col space-y-5 z-20">
          <Typography
            variant="h2"
            className="text-orange-600 font-bold text-4xl lg:text-5xl"
          >
            We provide the <br /> best food for you
          </Typography>
          <Typography variant="body1" className="text-gray-100 max-w-md">
            Delicious meals made with love and freshest ingredients.
          </Typography>
          <div className="flex space-x-4 mt-5">
            <MuiButton
              variant="contained"
              sx={{ bgcolor: "#1f2937", color: "white" }}
            >
              Menu
            </MuiButton>
            <MuiButton
              variant="contained"
              sx={{ bgcolor: "#f97316", color: "white" }}
            >
              Book a Table
            </MuiButton>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-3 mt-5">
            <FaFacebookF className="text-gray-100 hover:text-orange-400 cursor-pointer transition-colors" />
            <FaInstagram className="text-gray-100 hover:text-pink-500 cursor-pointer transition-colors" />
            <FaTwitter className="text-gray-100 hover:text-blue-500 cursor-pointer transition-colors" />
          </div>
        </div>

       {/* Right Images */}
<div className="lg:w-1/2 relative mt-10 lg:mt-0 flex justify-center items-center z-20">
  {/* Main Restaurant Image */}
  <img
    src="./assets/freshly-steamed.jpg"
    alt="Restaurant"
    className="rounded-xl shadow-2xl w-full lg:w-96 z-20 transition-transform hover:scale-105"
  />

  {/* Chef Image */}
  <img
    src="./assets/pngtree-young-woman-chef.png"
    alt="Chef"
    className="absolute -bottom-10 left-10 w-32 h-32 rounded-full border-4 border-white shadow-xl z-30 transition-transform hover:scale-110"
  />

  {/* Food Plate Image */}
  <img
    src="./assets/istockphoto.jpg"
    alt="Food Plate"
    className="absolute -bottom-10 right-10 w-32 h-32 rounded-full border-4 border-white shadow-xl z-30 transition-transform hover:scale-110"
  />
</div>

      </div>

      {/* Our Special Dishes Section */}
      <Box className="py-16 px-5 lg:px-32 bg-gray-50">
        <Typography
          variant="h4"
          className="text-center font-bold mb-4 text-orange-600"
        >
          Our Special Dishes
        </Typography>
        <Typography variant="body1" className="text-center text-gray-700 mb-10">
          Handpicked dishes curated for your taste buds.
        </Typography>

        <div className="flex flex-wrap justify-center gap-8">
          {dishes.map((dish, index) => (
            <div
              key={index}
              className="relative group w-40 h-40 rounded-full overflow-hidden shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105"
            >
              <img
                src={dish.image}
                alt={dish.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform"
              />

              {/* Price Badge */}
              <div className="absolute top-2 right-2 bg-orange-600 text-white px-2 py-1 rounded-full text-xs shadow z-30">
                {dish.price}
              </div>

              {/* Overlay with Dish Name */}
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20">
                <Typography className="text-white font-semibold text-center px-2">
                  {dish.name}
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </Box>
    </div>
  );
}

export default Home;
