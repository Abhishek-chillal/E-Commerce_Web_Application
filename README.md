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
   ```npm install
   ```
3. Set up your MongoDB database and update the connection string in config.js:
   ```
   // Update the following with your MongoDB connection string
    const MONGODB_URI = 'mongodb://localhost:5000/your-database-name';
   ```
4. Set up the Stripe Payment Gateway by adding your Stripe API keys in config.js:
   ```
   // Update the following with your Stripe API keys
   const stripeSecretKey = 'your-stripe-secret-key';
   const stripePublicKey = 'your-stripe-public-key';
   ```
5. Set up Nodemailer for email notifications by updating the configuration in auth.js:
   ```
   // Update the following with your email credentials and configurations
    transporter.sendMail({
          to: req.body.email,
          from: 'your-email-address',
          subject: 'Password reset',
          html: `
            <p>You requested a password reset</p>
            <p>Click this <a href="http://localhost:5000/reset/${token}">link</a> to set a new password.</p>
          `
        });
   ```
6. Start the application:
   ```
   npm start
   ```
   
##Screenshots

![Screenshot (524)](https://github.com/Abhishek-chillal/E-Commerce_Web_Application/assets/89154589/a24a436b-0699-44e0-acec-f4ce787dca51)
![Screenshot (523)](https://github.com/Abhishek-chillal/E-Commerce_Web_Application/assets/89154589/561c50f1-b7f5-4e25-a56b-91083a3715bf)
![Screenshot (478)](https://github.com/Abhishek-chillal/E-Commerce_Web_Application/assets/89154589/0af6edd2-7abe-4a7e-8e7c-7d6ff6826ecd)
![Screenshot (525)](https://github.com/Abhishek-chillal/E-Commerce_Web_Application/assets/89154589/e45223a3-691c-4e21-b18e-e7044a1cf8d5)

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or create a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) file for details.

MIT License © Abhishek Chillal
