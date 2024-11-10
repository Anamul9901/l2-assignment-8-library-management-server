import { Book, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAllBook = async () => {
  const result = await prisma.book.findMany();

  return result;
};


const creteBook = async(data: Book)=>{
const result = await prisma.book.create({data})

return result;
}


export const BookService = {
    getAllBook,
    creteBook
}