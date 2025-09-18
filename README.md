# React Calculator

A simple yet functional calculator built with React.js. This application provides basic arithmetic operations in a clean, user-friendly interface.

## Features

- Basic arithmetic operations (addition, subtraction, multiplication, division)
- Clear button to reset calculations
- Responsive design that works on different screen sizes
- Clean and intuitive user interface
- Built with modern React (v19.1.0)
- CSS Modules for scoped styling

## Demo

![Calculator Demo](public/calculator-demo.png)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher) or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/calculator-react-app.git
   cd calculator-react-app
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Application

Start the development server:

```bash
npm start
# or
yarn start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

This will create an optimized production build in the `build` folder.

## Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Button.js        # Button component
│   ├── button-container.js # Button container component
│   └── display.js       # Display component
├── App.js               # Main application component
├── App.module.css       # Styling for the application
└── index.js             # Application entry point
```

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (advanced use)

## Technologies Used

- React 19.1.0
- React DOM 19.1.0
- Create React App
- CSS Modules
- Bootstrap 5.3.6 (for basic styling)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).
