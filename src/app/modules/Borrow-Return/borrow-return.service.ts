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
      memberId: data.memberId,
    },
  });

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

const overDueBook = async () => {
  const result = await prisma.borrowRecord.findMany({
    where: {
      returnDate: null,
    },
    include: {
      book: true,
      member: true,
    },
  });
  const today = new Date();
  const finalResult = result.map((record) => {
    const { borrowId, borrowDate, book, member } = record;

    const borrowDateTime = new Date(borrowDate);
    const timeDiference = today.getTime() - borrowDateTime.getTime();
    const dayDiference = Math.floor(timeDiference / (1000 * 60 * 60 * 24));
    const overdueDays = dayDiference - 14;

    if (overdueDays > 0) {
      return {
        borrowId,
        bookTitle: book.title,
        borrowerName: member.name,
        overdueDays,
      };
    } else {
      return null;
    }
  }).filter(data => data != null);

  return finalResult;
};

export const BorrowReturnService = {
  createBorrow,
  returnBook,
  overDueBook,
};
