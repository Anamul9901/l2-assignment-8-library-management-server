# Library Management System API

## Project Overview
This Library Management System API enables library staff and members to manage books, memberships, and borrowing activities effectively. It is built with Node.js, Express, TypeScript, Prisma ORM, and PostgreSQL. The API provides endpoints for CRUD operations on books, members, and borrow records, along with dedicated endpoints for borrowing and returning books.

## Live URL
[Library Management System API - Live Deployment](https://your-live-url.com)

## Technology Stack
- **Node.js** - Backend runtime environment
- **Express.js** - Web framework for Node.js
- **TypeScript** - Strongly typed programming language for JavaScript
- **Prisma ORM** - Database ORM for handling PostgreSQL interactions
- **PostgreSQL** - Relational database for data storage

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

### Bonus Features
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
   git clone https://github.com/your-username/library-management-system-api.git
   cd library-management-system-api
