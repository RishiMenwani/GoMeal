import prisma from "../../prisma";

export const connectToDatabase = async () => {
  try {
    await prisma.$connect();
    console.log("Databse connected");
  } catch (error) {
    throw new Error("Unable to connect the Database");
  }
};
