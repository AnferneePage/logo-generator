# Logo Generator

Logo Generator is a command-line application that allows you to create custom SVG logos. You can specify the text, text color, shape, and shape color, and the application will generate an SVG file based on your input.

## Installation

1. Clone the repository or download the code files.
2. Navigate to the project directory.
3. Install the dependencies by running the following command: npm install


## Usage

1. Open a terminal and navigate to the project directory.
2. Run the following command to start the application: node index.js
3. Follow the prompts to enter the logo details:
- Enter up to three characters for the text.
- Enter the text color (keyword or hexadecimal number).
- Choose a shape by entering the corresponding number:
  - 1. Circle
  - 2. Triangle
  - 3. Square
- Enter the shape color (keyword or hexadecimal number).
4. After providing all the inputs, the application will generate an SVG file named `logo.svg` in the `disp` directory.
5. Open the `logo.svg` file in a browser to view your generated logo.

## Dependencies

- inquirer: Used for user input prompts.
- fs: Used for file system operations.
- path: Used for working with file and directory paths.

See the link below to see how to application is ran.
https://drive.google.com/file/d/1ooxdIypl3lRAME2rejrMfbX3yNBZx_Kw/view
