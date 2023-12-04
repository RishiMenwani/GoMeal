// pages/register.js
import React from "react";
import { Container } from "@mui/material";
import Image from "next/image";
import Register from "@/components/Register";

const RegisterPage = () => {
  return (
    <Container className="flex h-screen">
      <div className="">
        <Image
          src="/Images/SignUp/background.jpg"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div>
        <Register />
      </div>
    </Container>
  );
};

export default RegisterPage;
