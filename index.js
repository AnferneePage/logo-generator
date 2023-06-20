const fs = require('fs');
const path = require('path');

function generateSVG(text, textColor, shape, shapeColor) {
    let shapeElement = '';

    switch (shape) {
        case 'circle':
            shapeElement = `<circle cx="50%" cy="50%" r="35%" fill="${shapeColor}" />`;
            break;
        case 'triangle':
            shapeElement = `<polygon points="150,20 20,180 280,180" fill="${shapeColor}" />`;
            break;
        case 'square':
            shapeElement = `<rect x="20%" y="20%" width="60%" height="60%" fill="${shapeColor}" />`;
            break;
        default:
            throw new Error('Invalid shape');
    }

    const svgContent = `
      <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        ${shapeElement}
        <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" fill="${textColor}" font-size="72">${text}</text>
      </svg>
    `;

    return svgContent;
}


function saveSVG(svgContent) {
    const dispPath = path.join(__dirname, 'disp');
    fs.mkdirSync(dispPath, { recursive: true });
    const filePath = path.join(dispPath, 'logo.svg');
    fs.writeFileSync(filePath, svgContent);
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question('Enter up to three characters: ', (text) => {
    readline.question('Enter the text color (keyword or hexadecimal number): ', (textColor) => {
        console.log('Choose a shape:');
        console.log('1. Circle');
        console.log('2. Triangle');
        console.log('3. Square');

        readline.question('Enter the shape number: ', (shapeNumber) => {
            let shape;
            switch (shapeNumber) {
                case '1':
                    shape = 'circle';
                    break;
                case '2':
                    shape = 'triangle';
                    break;
                case '3':
                    shape = 'square';
                    break;
                default:
                    throw new Error('Invalid shape number');
            }

            readline.question('Enter the shape color (keyword or hexadecimal number): ', (shapeColor) => {
                readline.close();

              
                const svgContent = generateSVG(text, textColor, shape, shapeColor);

                
                saveSVG(svgContent);

                console.log('Generated logo.svg');
            });
        });
    });
});
