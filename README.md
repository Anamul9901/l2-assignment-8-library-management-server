# Library Management System

## Project Overview
This Library Management System API helps library staff and members manage books, membership, and borrowing activitis. It is built with Node.js, Express, TypeScript, Prisma ORM, and PostgreSQL. The API includes:
CRUD (Create, Read, Update, Delete) oparations for managing books, members, and borrowing records.
Special endpoints for borrowing and returning books.
This setup makes managing library resources simple and efficient.

## Live URL
[Library Management System - Live Deployment](https://l2-a8-ser.vercel.app/)

## Technology Stack
- **Node.js** 
- **Express.js** 
- **TypeScript** 
- **Prisma ORM** 
- **PostgreSQL** 

## Project Features
### Main Features
1. **Book Management**
   - Create, read, update, and delete book records
   - Track the availability of each book for borrowing
2. **Member Management**
   - Create, read, update, and delete library members
3. **Borrowing & Returning Books**
   - Borrow a book by specifying member and book details
   - Return borrowed books and update availability

### Other Features
1. **Error Handling** - Standardized error messages with HTTP status codes and descriptions.
2. **Overdue Borrow List** - View overdue borrowed books, with borrower details and the number of overdue days.

## Database Schema
The database schema is defined using Prisma ORM and includes the following tables:
1. **Book**: Stores details of each book.
2. **Member**: Stores information about each library member.
3. **BorrowRecord**: Tracks the borrowing and return activities for books.

Each table uses a UUID as a primary key.

## API Endpoints
### Book Endpoints
- **POST /api/books**: Add a new book
- **GET /api/books**: Retrieve all books
- **GET /api/books/:bookId**: Retrieve a book by its ID
- **PUT /api/books/:bookId**: Update book information
- **DELETE /api/books/:bookId**: Delete a book by its ID

### Member Endpoints
- **POST /api/members**: Add a new library member
- **GET /api/members**: Retrieve all members
- **GET /api/members/:memberId**: Retrieve a member by ID
- **PUT /api/members/:memberId**: Update member information
- **DELETE /api/members/:memberId**: Remove a member

### Borrow & Return Endpoints
- **POST /api/borrow**: Borrow a book
- **POST /api/return**: Return a book
- **GET /api/borrow/overdue**: Retrieve overdue borrowed books

## Setup Instructions
1. **Clone the repository**
   ```bash
   git clone https://github.com/Anamul9901/l2-assignment-8-library-management-server.git
   cd l2-assignment-8-library-management-server

   yarn

