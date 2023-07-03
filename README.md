# express-route-lister

A simple npm package that lists all the routes available in an Express application.

## Installation

You can install the package globally or use npx to run it directly without installation.

To install globally, run:

```
npm install -g express-route-lister

```

To run it using npx:

```
npx express-route-lister
```

## Usage

Make sure you are in the root directory of your Express application before running the package.

Once the package is running, you can access the list of routes by visiting http://localhost:3000 in your browser (assuming the default port is used).

The response will be a JSON object containing the routes available in your Express application, along with the HTTP methods supported by each route.

### Example

```
const express = require('express');
const app = express();

app.get('/users', (req, res) => {
  // Get all users
});

app.post('/users', (req, res) => {
  // Create a new user
});

app.put('/users/:id', (req, res) => {
  // Update a user by ID
});

// ... other routes ...

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});




```

Running the express-route-lister package will result in the following response:

```
[
  {
    "path": "/users",
    "methods": ["GET", "POST"]
  },
  {
    "path": "/users/:id",
    "methods": ["PUT"]
  }
  // ... other routes ...
]

```

The response shows that the Express application has two routes: /users supporting the HTTP methods GET and POST, and /users/:id supporting the PUT method.

### Dependencies

This package relies on the following dependencies:

- Express: A fast and minimalist web framework for Node.js.
- Chalk: A library for adding color to the terminal output.

### Contributing

Contributions are welcome! If you encounter any issues or have suggestions for improvements, please open an issue on the GitHub repository.

### License

This package is licensed under the MIT License.

### Acknowledgments

This package was inspired by the need to easily list routes in an Express application.
That's it! Customize the documentation as per your requirements, and make sure to update the URLs and repository information accordingly.
