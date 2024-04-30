const shades = {
  black: (text) => `\x1B[30m${text}\x1B[0m`,
  red: (text) => `\x1b[31m${text}\x1B[0m`,
  green: (text) => `\x1b[32m${text}\x1B[0m`,
  yellow: (text) => `\x1B[33m${text}\x1B[0m`,
  blue: (text) => `\x1B[34m${text}\x1B[0m`,
  magneta: (text) => `\x1B[35m${text}\x1B[0m`,
  cyan: (text) => `\x1B[36m${text}\x1B[0m`,
  white: (text) => `\x1B[37m${text}\x1B[0m`,
  bgBlack: (text) => `\x1b[40m${text}\x1B[0m`,
  bgRed: (text) => `\x1b[41m${text}\x1B[0m`,
  bgGreen: (text) => `\x1b[42m${text}\x1B[0m`,
  bgYellow: (text) => `\x1b[43m${text}\x1B[0m`,
  bgBlue: (text) => `\x1b[44m${text}\x1B[0m`,
  bgMagneta: (text) => `\x1b[45m${text}\x1B[0m`,
  bgCyan: (text) => `\x1b[46m${text}\x1B[0m`,
  bgWhite: (text) => `\x1b[47m${text}\x1B[0m`,
  bold: (text) => `\x1b[1m${text}\x1B[0m`,
  italic: (text) => `\x1b[3m${text}\x1B[0m`,
  underline: (text) => `\x1b[4m${text}\x1B[0m`,
  strikeThrough: (text) => `\x1b[9m${text}\x1B[0m`,
  dot: (text) => `\u{2022}${text}\x1B[0m`,
  rgb: (text, red, green, blue) => {
    rgbVal = "";
    function rgbColor(red, green, blue) {
      // Ensure RGB values are within the valid range (0-255)
      red = Math.max(0, Math.min(255, red));
      green = Math.max(0, Math.min(255, green));
      blue = Math.max(0, Math.min(255, blue));

      // Convert RGB values to ANSI escape code
      return `\x1b[38;2;${red};${green};${blue}m`;
    }

    const colorCode = rgbColor(red, blue, green);
    return `${colorCode}${text}${"\x1B[0m"}`;
  },
  rainbow: (text) => {
    const rainbowColors = [
      "\x1b[35m", // Violet
      "\x1b[34m", // Indigo
      "\x1b[34m", // Blue
      "\x1b[32m", // Green
      "\x1b[33m", // Yellow
      "\x1b[38;5;208m", // Orange
      "\x1b[31m", // Red
    ];
    rtext = "";
    for (let i = 0; i < text.length; i++) {
      const color = rainbowColors[i % rainbowColors.length];
      rtext += color + text[i];
    }
    return `${rtext}${"\x1B[0m"}`;
  },
};

module.exports = shades;
