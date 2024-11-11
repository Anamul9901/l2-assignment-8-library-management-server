import { BorrowRecord, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createBorrow = async (data: BorrowRecord) => {
  await prisma.book.findUniqueOrThrow({
    where: {
      bookId: data.bookId,
    },
  });

  await prisma.member.findUniqueOrThrow({
    where: {
        memberId: data.memberId
    }
  })

  const result = await prisma.borrowRecord.create({ data });
  return result;
};

const returnBook = async (borrowId: string) => {
  await prisma.borrowRecord.findUniqueOrThrow({
    where: {
      borrowId,
    },
  });
  const result = await prisma.borrowRecord.update({
    where: {
      borrowId,
    },
    data: {
      returnDate: new Date(),
    },
  });

  return result;
};

export const BorrowReturnService = {
  createBorrow,
  returnBook,
};
