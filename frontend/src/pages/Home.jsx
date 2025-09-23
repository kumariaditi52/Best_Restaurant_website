import React, { useContext } from "react";
import { Container, Typography, Box } from "@mui/material";
import { AuthContext } from "../AuthContext";
import Button from "./Button";
function Home() {
  const { user } = useContext(AuthContext);

  return (
    <>
    <div className="min-h-screen flex flex-row justify-between items-center bg-cover bg-no-repeat lg:px-32 px-5 bg-[url('./pages/backgroundimg.jpg')] ">
    <div className="w-full lg:w-2/3 space-y-5">
     <h1 className=" text-white font-semibold text-6xl"> Elevate your Inner Foodie with Every Bite</h1>
     <p className="text-white" >
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat cupiditate maxime perspiciatis dolores, architecto conse

     </p>
         <div className="lg:pl-44 justify-center">
          <Button title="Order Now"/>
         </div>
    </div>
    </div> 
    </>
  );
}

export default Home;
