const Jimp = require('jimp');

async function findBounds() {
  const image = await Jimp.read('C:\\Users\\djmun\\.gemini\\antigravity\\brain\\f2b139cd-4503-4c3c-bd7f-034382a557ac\\.user_uploaded\\media_1791635232079_8aa1b15c.png');
  const W = image.bitmap.width;
  const H = image.bitmap.height;
  
  // Find horizontal dividing lines (rows that are completely transparent or white)
  console.log(`Image Size: ${W}x${H}`);
  
  let rowGaps = [];
  let inGap = false;
  let gapStart = 0;
  
  for (let y = 0; y < H; y++) {
    let emptyRow = true;
    for (let x = 0; x < W; x++) {
      const rgba = Jimp.intToRGBA(image.getPixelColor(x, y));
      // if not white and not transparent
      if (rgba.a > 10 && (rgba.r < 250 || rgba.g < 250 || rgba.b < 250)) {
        emptyRow = false;
        break;
      }
    }
    
    if (emptyRow && !inGap) {
      inGap = true;
      gapStart = y;
    } else if (!emptyRow && inGap) {
      inGap = false;
      rowGaps.push({ start: gapStart, end: y, height: y - gapStart });
    }
  }
  
  console.log('Row Gaps:', rowGaps);
  
  let colGaps = [];
  inGap = false;
  gapStart = 0;
  
  for (let x = 0; x < W; x++) {
    let emptyCol = true;
    for (let y = 0; y < H; y++) {
      const rgba = Jimp.intToRGBA(image.getPixelColor(x, y));
      if (rgba.a > 10 && (rgba.r < 250 || rgba.g < 250 || rgba.b < 250)) {
        emptyCol = false;
        break;
      }
    }
    
    if (emptyCol && !inGap) {
      inGap = true;
      gapStart = x;
    } else if (!emptyCol && inGap) {
      inGap = false;
      colGaps.push({ start: gapStart, end: x, width: x - gapStart });
    }
  }
  
  console.log('Col Gaps:', colGaps);
}

findBounds();
