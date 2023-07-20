# E-Commerce Web Application

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE.md)


## Description

This project is a feature-rich E-Commerce Web Application that allows users to browse, buy, and manage orders securely. The application is built using a tech stack comprising HTML, CSS, JavaScript, Node.js, Express, MongoDB, Mongoose, Nodemailer, and Stripe Payment Gateway.

## Key Features

- **User Authentication and Authorization:** Secure user registration and login system with role-based access control for customers and administrators.

- **Product Listings and Search:** Display of products with relevant details and powerful search functionality for easy navigation.

- **Shopping Cart Management:** Users can add products to their shopping carts, view cart contents, and edit or remove items.

- **Secure Online Payments:** Integration of the Stripe Payment Gateway to facilitate safe and smooth online transactions.

- **Order Management and Invoice Generation:** Enables users to place orders and receive order invoices via email. Users can also download their order invoices for record-keeping.

## Tech Stack

- **Front-end:** HTML, CSS, JavaScript

- **Back-end:** Node.js, Express

- **Database:** MongoDB (with Mongoose)

- **Payment Gateway:** Stripe

- **Email Management:** Nodemailer

## Installation and Setup

1. Clone the repository:

```bash
git clone https://github.com/your-username/E-Commerce_Web_Application.git
cd E-Commerce_Web_Application
```

2. Install the required dependencies:
  **npm install**
   
3. Set up your MongoDB database and update the connection string in config.js:
   // Update the following with your MongoDB connection string
    const MONGODB_URI = 'mongodb://localhost:5000/your-database-name';
5. 
