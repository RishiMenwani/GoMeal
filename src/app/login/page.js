import React from "react";
import { Container, Paper, TextField, Button } from "@mui/material";
import Image from "next/image";
import Login from "@/components/Login";

const LoginPage = () => {
  return (
    <Container className="flex h-screen ">
      <div className="flex-1 ">
        <Image
          src="/Images/Login/background2.jpg"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div>
        <Login />
      </div>
    </Container>
  );
};

export default LoginPage;
