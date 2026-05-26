# E-commerce Backend API

A lightweight Node.js/Express backend for an e-commerce platform, structured using the **MVC (Model-View-Controller)** architecture.

## Project Overview

This project provides a set of RESTful APIs to manage products and orders. It uses an in-memory data store for demonstration purposes and is organized into modular components to ensure scalability and maintainability.

## Architecture

The project follows the MVC pattern:

-   **Models (`src/models/`)**: Responsible for data structures and data access logic (e.g., fetching from and saving to the in-memory database).
-   **Controllers (`src/controllers/`)**: Handle incoming HTTP requests, interact with models, and return appropriate responses.
-   **Routes (`src/routes/`)**: Define the API endpoints and map them to specific controller actions.

## Directory Structure

```text
/
├── server.js               # Entry point of the application
├── package.json            # Project dependencies and scripts
├── README.md               # Project documentation
└── src/
    ├── controllers/        # Request handlers
    │   ├── orderController.js
    │   └── productController.js
    ├── models/             # Data logic
    │   ├── order.js
    │   └── product.js
    └── routes/             # Route definitions
        ├── orderRoutes.js
        └── productRoutes.js
```

## Getting Started

### Prerequisites

-   Node.js installed on your machine.

### Installation

1.  Navigate to the project directory:
    ```bash
    cd internship
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```

### Running the Server

Start the API server:
```bash
npm start
```
The server will run at `http://localhost:3000`.

## API Documentation

### Products

| Method | Endpoint             | Description                |
| :----- | :------------------- | :------------------------- |
| GET    | `/api/products`      | Get all products           |
| GET    | `/api/products/:id`  | Get a specific product     |
| POST   | `/api/products`      | Create a new product       |
| DELETE | `/api/products/:id`  | Delete a product by ID     |

### Orders

| Method | Endpoint             | Description                |
| :----- | :------------------- | :------------------------- |
| GET    | `/api/orders`        | Get all orders             |
| GET    | `/api/orders/:id`    | Get a specific order by ID |
| POST   | `/api/orders`        | Place a new order          |

#### Example: Placing an Order
**Request:** `POST /api/orders`
**Body:**
```json
{
  "productId": 1,
  "quantity": 2
}
```
