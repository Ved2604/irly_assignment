# Book Management API

The Book Management API is a RESTful API built using NestJS, a progressive Node.js framework, and Prisma as the ORM for interacting with a SQL database. This API provides endpoints for performing CRUD (Create, Read, Update, Delete) operations on books. 

Deployment link <a href="https://irly-assignment.onrender.com/books"> https://irly-assignment.onrender.com/books </a> 

Use this link to test the api on Postman.

## Tech Stack used

- Node.js (v14 or higher)
- Nest.js
- Prisma
- Postgress

## Installation

1. Clone the repository:

<pre>
<code class="language-bash">git clone https://github.com/Ved2604/irly_assignment</code>
</pre>

2. Install dependencies:

<pre>
<code class="language-bash">npm install</code>
</pre>

3. Set up the database and apply migrations:

<pre>
<code class="language-bash">npx prisma migrate dev</code>
</pre>

## Usage

1. Start the development server:

<pre>
<code class="language-bash">npm run start:dev</code>
</pre>

2. The API will be available at `http://localhost:3000`.

## API Endpoints

### Books

- `POST /books`: Create a new book
- `GET /books`: Retrieve a list of all books
- `GET /books/:id`: Retrieve details of a specific book
- `PUT /books/:id`: Update details of a specific book
- `DELETE /books/:id`: Delete a specific book

## Example Requests

### Create a Book

<pre>
<code class="language-bash">POST /books
Content-Type: application/json

{
  "title": "The Great Gatsby",
  "summary": "A classic novel about the decadence of the Jazz Age.",
  "publishedDate": "1925-04-10"
}</code>
</pre>

### Get All Books

<pre>
<code class="language-bash">GET /books</code>
</pre>

### Get a Specific Book

<pre>
<code class="language-bash">GET /books/1</code>
</pre>

### Update a Book

<pre>
<code class="language-bash">PUT /books/1
Content-Type: application/json

{
  "title": "The Great Gatsby (Updated)",
  "summary": "A classic novel about the decadence of the Jazz Age (Updated)."
}</code>
</pre>

### Delete a Book

<pre>
<code class="language-bash">DELETE /books/1</code>
</pre>

## Code Structure

- `src/books/books.controller.ts`: Defines the routes and handles HTTP requests for the books API.
- `src/books/books.service.ts`: Contains the business logic for interacting with the book data.
- `src/books/dto/create-book.dto.ts`: Defines the data transfer object (DTO) for creating a new book.
- `src/books/dto/update-book.dto.ts`: Defines the DTO for updating an existing book.

## Dependencies

- `@nestjs/common`: Provides essential functionality for building Nest.js applications.
- `@nestjs/core`: Exports the Nest.js infrastructure core code.
- `@nestjs/platform-express`: Provides a wrapper for the Express.js server.
- `@prisma/client`: Prisma ORM client for interacting with the database.

