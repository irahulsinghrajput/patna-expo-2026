const Jimp = require('jimp');
const fs = require('fs');

async function cropHighlights() {
  try {
    const imagePath = 'C:\\Users\\djmun\\.gemini\\antigravity\\brain\\f2b139cd-4503-4c3c-bd7f-034382a557ac\\.user_uploaded\\media_1791635232079_8aa1b15c.png';
    console.log('Reading highlights collage...');
    const image = await Jimp.read(imagePath);
    
    const W = image.bitmap.width;
    const H = image.bitmap.height;
    
    const cols = 3;
    const rows = 4;
    
    const cellW = Math.floor(W / cols);
    const cellH = Math.floor(H / rows);
    
    let index = 0;
    
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const x = c * cellW;
        const y = r * cellH;
        
        console.log(`Cropping cell ${index} at x:${x}, y:${y}, w:${cellW}, h:${cellH}`);
        
        // Clone original image to crop
        const cellImage = image.clone();
        cellImage.crop(x, y, cellW, cellH);
        
        // Make background transparent (if it's white)
        // Since it's a PNG, maybe it's already transparent. Let's just save it.
        const outPath = `./public/images/highlight_${index}.png`;
        await cellImage.writeAsync(outPath);
        index++;
      }
    }
    
    console.log('All highlights cropped successfully!');
  } catch (err) {
    console.error('Error:', err);
  }
}

cropHighlights();
