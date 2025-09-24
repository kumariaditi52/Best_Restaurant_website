// import React, { useState } from "react";
// import { Container, Typography, Box, TextField, Button } from "@mui/material";

// // Full list of food items with price
// const foodItems = [
//   { name: "Fresh Salads", image: "https://images.pexels.com/photos/1640778/pexels-photo-1640778.jpeg", price: 10 },
//   { name: "Party Platters", image: "https://images.pexels.com/photos/1640779/pexels-photo-1640779.jpeg", price: 25 },
//   { name: "Sea Food", image: "https://images.pexels.com/photos/1640780/pexels-photo-1640780.jpeg", price: 30 },
//   { name: "Vegan Desserts", image: "https://images.pexels.com/photos/1640781/pexels-photo-1640781.jpeg", price: 15 },
//   { name: "Grilled Chicken", image: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg", price: 20 },
//   { name: "Fruit Platter", image: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg", price: 18 },
//   { name: "Pasta Special", image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg", price: 22 },
// ];

// function Services() {
//   const [visibleCount, setVisibleCount] = useState(4); // Initially show 4 cards
//   const [selectedItem, setSelectedItem] = useState(null);
//   const [quantity, setQuantity] = useState(1);

//   const handleViewMore = () => {
//     setVisibleCount(foodItems.length); // Show all cards
//   };

//   const handleCardClick = (item) => {
//     setSelectedItem(item);
//     setQuantity(1);
//   };

//   const handleQuantityChange = (e) => {
//     setQuantity(Number(e.target.value));
//   };

//   const handleAddOrder = (item, qty = 1) => {
//     alert(`Added ${qty} x ${item.name} to order!`);
//     setSelectedItem(null);
//   };

//   return (
//     <Box>
//       {/* Hero Image */}
//       <Box
//         sx={{
//           height: { xs: 200, md: 400 },
//           backgroundImage:
//             "url('https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           color: "white",
//           textAlign: "center",
//         }}
//       >
//         <Typography
//           variant="h3"
//           sx={{
//             fontWeight: "bold",
//             bgcolor: "rgba(0,0,0,0.4)",
//             p: 2,
//             borderRadius: 2,
//           }}
//         >
//           Catering Services
//         </Typography>
//       </Box>

//       {/* Food Section */}
//       <Box sx={{ py: 10, bgcolor: "#f8f8f8" }}>
//         <Container sx={{ textAlign: "center", mb: 6 }}>
//           <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>
//             Our Food Menu
//           </Typography>
//           <Typography variant="body1">
//             Please call at least 24 hours in advance for catering orders
//           </Typography>
//         </Container>

//         {/* Food Cards */}
//         <Container>
//           <Box
//             sx={{
//               display: "flex",
//               flexWrap: "wrap",
//               justifyContent: "center",
//               gap: 4,
//             }}
//           >
//             {foodItems.slice(0, visibleCount).map((item, index) => (
//               <Box
//                 key={index}
//                 sx={{
//                   width: 220,
//                   p: 3,
//                   borderRadius: 3,
//                   bgcolor: "white",
//                   display: "flex",
//                   flexDirection: "column",
//                   alignItems: "center",
//                   boxShadow: 3,
//                   transition: "0.3s",
//                   cursor: "pointer",
//                   "&:hover": { boxShadow: 6, transform: "translateY(-5px)" },
//                 }}
//               >
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   style={{
//                     width: 150,
//                     height: 150,
//                     borderRadius: "12px",
//                     objectFit: "cover",
//                     marginBottom: 12,
//                   }}
//                   onClick={() => handleCardClick(item)}
//                 />
//                 <Typography
//                   variant="subtitle1"
//                   sx={{ fontWeight: "bold", color: "#333", textAlign: "center" }}
//                 >
//                   {item.name}
//                 </Typography>
//                 <Typography sx={{ color: "#666", mt: 1 }}>${item.price}</Typography>
                
//                 {/* Order Now Button */}
//                 <Button
//                   variant="contained"
//                   color="primary"
//                   sx={{ mt: 2 }}
//                   onClick={() => handleAddOrder(item)}
//                 >
//                   Order Now
//                 </Button>
//               </Box>
//             ))}
//           </Box>

//           {/* View More Button */}
//           {visibleCount < foodItems.length && (
//             <Box sx={{ textAlign: "center", mt: 6 }}>
//               <Button
//                 variant="outlined"
//                 onClick={handleViewMore}
//                 sx={{
//                   px: 4,
//                   py: 1,
//                   borderColor: "black",
//                   color: "black",
//                   "&:hover": { bgcolor: "black", color: "white" },
//                 }}
//               >
//                 View More
//               </Button>
//             </Box>
//           )}
//         </Container>
//       </Box>

//       {/* Product Details Modal */}
//       {selectedItem && (
//         <Box
//           sx={{
//             position: "fixed",
//             top: 0,
//             left: 0,
//             width: "100%",
//             height: "100%",
//             bgcolor: "rgba(0,0,0,0.5)",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             zIndex: 999,
//           }}
//           onClick={() => setSelectedItem(null)}
//         >
//           <Box
//             sx={{
//               bgcolor: "white",
//               p: 4,
//               borderRadius: 3,
//               width: { xs: "90%", md: 400 },
//               position: "relative",
//             }}
//             onClick={(e) => e.stopPropagation()}
//           >
//             <img
//               src={selectedItem.image}
//               alt={selectedItem.name}
//               style={{ width: "100%", borderRadius: 12, marginBottom: 16 }}
//             />
//             <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
//               {selectedItem.name}
//             </Typography>
//             <Typography variant="subtitle1" sx={{ mb: 2 }}>
//               Price: ${selectedItem.price}
//             </Typography>
//             <TextField
//               type="number"
//               label="Quantity"
//               value={quantity}
//               onChange={handleQuantityChange}
//               fullWidth
//               sx={{ mb: 2 }}
//               inputProps={{ min: 1 }}
//             />
//             <Button
//               variant="contained"
//               color="primary"
//               fullWidth
//               onClick={() => handleAddOrder(selectedItem, quantity)}
//             >
//               Add to Order
//             </Button>
//           </Box>
//         </Box>
//       )}
//     </Box>
//   );
// }

// export default Services;


import React, { useState } from "react";
import { Container, Typography, Box, TextField, Button } from "@mui/material";

// Food items data
const foodItems = [
  { name: "Fresh Salads", image: "./assets/menu/bowl-salad.jpg", price: 10 },
  { name: "Party Platters", image: "./assets/menu/download.jpg", price: 25 },
  { name: "Sea Food", image: "assets/menu/images.jpg", price: 30 },
  { name: "Vegan Desserts", image: "./assets/menu/images1.jpg", price: 15 },
  { name: "Grilled Chicken", image: "./assets/menu/download.jpg", price: 20 },
  { name: "Fruit Platter", image: "./assets/menu/italian-food.jpg", price: 18 },
  { name: "Pasta Special", image: "./assets/menu/saafood.jpg", price: 22 },
];

function Services() {
  const [visibleCount, setVisibleCount] = useState(4);
  const [selectedItem, setSelectedItem] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [orderDate, setOrderDate] = useState(new Date().toISOString().split("T")[0]);

  const handleViewMore = () => setVisibleCount(foodItems.length);

  const handleOrderNow = (item) => {
    setSelectedItem(item);
    setQuantity(1);
    setOrderDate(new Date().toISOString().split("T")[0]);
  };

  const increaseQuantity = () => setQuantity(q => q + 1);
  const decreaseQuantity = () => setQuantity(q => (q > 1 ? q - 1 : 1));

  const handleAddOrder = () => {
    const totalPrice = selectedItem.price * quantity;
    alert(`Order Added:
Name: ${selectedItem.name}
Quantity: ${quantity}
Price: $${totalPrice}
Date: ${orderDate}`);
    setSelectedItem(null);
  };

  return (
    <Box>
      {/* Hero Image */}
      <Box
        sx={{
          height: { xs: 200, md: 400 },
          backgroundImage: "url('https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            bgcolor: "rgba(0,0,0,0.4)",
            p: 2,
            borderRadius: 2,
          }}
        >
          Catering Services
        </Typography>
      </Box>

      {/* Food Menu */}
      <Box sx={{ py: 10, bgcolor: "#f8f8f8" }}>
        <Container sx={{ textAlign: "center", mb: 6 }}>
          <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>Our Food Menu</Typography>
          <Typography>Please call at least 24 hours in advance for catering orders</Typography>
        </Container>

        {/* Food Cards */}
        <Container>
          <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 4 }}>
            {foodItems.slice(0, visibleCount).map((item, index) => (
              <Box
                key={index}
                sx={{
                  width: 220,
                  p: 3,
                  borderRadius: 3,
                  bgcolor: "white",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  boxShadow: 3,
                  transition: "0.3s",
                  "&:hover": { boxShadow: 6, transform: "translateY(-5px)" },
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: 150, height: 150, borderRadius: 12, objectFit: "cover", marginBottom: 12 }}
                />
                <Typography sx={{ fontWeight: "bold", color: "#333", textAlign: "center" }}>{item.name}</Typography>
                <Typography sx={{ color: "#666", mt: 1 }}>${item.price}</Typography>
                <Button
                  sx={{ mt: 2, bgcolor: "#1a1a1a", color: "white", "&:hover": { bgcolor: "#333" } }}
                  variant="contained"
                  onClick={() => handleOrderNow(item)}
                >
                  Order Now
                </Button>
              </Box>
            ))}
          </Box>

          {/* View More Button */}
          {visibleCount < foodItems.length && (
            <Box sx={{ textAlign: "center", mt: 6 }}>
              <Button
                variant="outlined"
                onClick={handleViewMore}
                sx={{
                  px: 4,
                  py: 1,
                  borderColor: "black",
                  color: "black",
                  "&:hover": { bgcolor: "black", color: "white" },
                }}
              >
                View More
              </Button>
            </Box>
          )}
        </Container>
      </Box>

      {/* Order Details Modal */}
      {selectedItem && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            bgcolor: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 999,
          }}
          onClick={() => setSelectedItem(null)}
        >
          <Box
            sx={{
              bgcolor: "white",
              p: 4,
              borderRadius: 3,
              width: { xs: "90%", md: 400 },
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedItem.image}
              alt={selectedItem.name}
              style={{ width: "100%", borderRadius: 12, marginBottom: 16 }}
            />
            <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>{selectedItem.name}</Typography>
            <Typography variant="subtitle1" sx={{ mb: 2 }}>Price: ${selectedItem.price}</Typography>

            {/* Quantity */}
            <Box sx={{ display: "flex", alignItems: "center", mb: 2, justifyContent: "center", gap: 1 }}>
              <Button variant="contained" sx={{ bgcolor: "#1a1a1a", "&:hover": { bgcolor: "#333" } }} onClick={() => setQuantity(q => (q > 1 ? q - 1 : 1))}>-</Button>
              <TextField
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                type="number"
                inputProps={{ min: 1 }}
                sx={{ width: 60, textAlign: "center" }}
              />
              <Button variant="contained" sx={{ bgcolor: "#1a1a1a", "&:hover": { bgcolor: "#333" } }} onClick={() => setQuantity(q => q + 1)}>+</Button>
            </Box>

            {/* Total Price */}
            <Typography sx={{ mb: 2, textAlign: "center", fontWeight: "bold" }}>
              Total: ${selectedItem.price * quantity}
            </Typography>

            {/* Order Date */}
            <TextField
              label="Order Date"
              type="date"
              fullWidth
              value={orderDate}
              onChange={(e) => setOrderDate(e.target.value)}
              sx={{ mb: 2 }}
            />

            {/* Add to Order */}
            <Button
              variant="contained"
              fullWidth
              sx={{ bgcolor: "#1a1a1a", color: "white", "&:hover": { bgcolor: "#333" } }}
              onClick={handleAddOrder}
            >
              Add to Order
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default Services;
