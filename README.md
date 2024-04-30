# ConsoleArtist

## Overview

ConsoleArtist is a lightweight npm package designed to empower developers to craft vibrant and visually appealing text output in their Node.js terminal applications. With ConsoleArtist, you can effortlessly add color and style to your command-line interfaces, enhancing readability and user experience.

## Features

- **Colorful Text**: Apply a spectrum of colors to your text, including foreground and background options.
- **Text Styles**: Choose from various text styles such as bold, italic, underline, and strikethrough to create emphasis and clarity.
- **Predefined Palettes**: Access predefined color palettes like rainbow and RGB for quick and convenient styling.
- **Integration with `console.log()`**: Seamlessly integrate ConsoleArtist with Node.js `console.log()` for straightforward usage in your applications.
- **Lightweight and Efficient**: Enjoy a lightweight implementation that adds style without compromising performance.

## Available Colors

- Foreground Colors:
  - black, red, green, yellow, blue, magneta, cyan, white
- Background Colors:
  - bgBlack, bgRed, bgGreen, bgYellow, bgBlue, bgMagneta, bgCyan, bgWhite
- Additional Styles:
  - bold, italic, underline, strikethrough
- Special Effects:
  - dot

## Installation

You can install ConsoleArtist via npm:

```bash
npm install consoleartist

const artist = require('consoleartist');

// Apply color and style to text
console.log(artist.green('Hello, world!'));

// Access predefined color palettes
console.log(artist.rainbow('Colorful text!'));

// Apply RGB color
// artist.rgb(text,r,g,b)
console.log(artist.rgb('Hello World!', 255, 0, 0)); // Red text

// Chain multiple styles together
const {red, bold} = artist;
console.log(red(bold('Bold and red text')));

// Background color
console.log(artist.bgGreen('Green background'));
```

Feel free to customize and tailor ConsoleArtist according to your specific requirements and preferences. Happy crafting!
