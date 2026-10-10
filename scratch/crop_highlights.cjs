const Jimp = require('jimp');

async function cropHighlights() {
  try {
    const imagePath = 'C:\\Users\\djmun\\.gemini\\antigravity\\brain\\f2b139cd-4503-4c3c-bd7f-034382a557ac\\.user_uploaded\\media_1791635232079_8aa1b15c.png';
    const image = await Jimp.read(imagePath);
    
    const rows = [
      { y: 0, h: 209 },
      { y: 239, h: 208 },
      { y: 479, h: 201 },
      { y: 706, h: 175 }
    ];
    
    const cols = [
      { x: 0, w: 317 },
      { x: 413, w: 210 },
      { x: 732, w: 292 }
    ];
    
    let index = 0;
    
    for (let r = 0; r < rows.length; r++) {
      for (let c = 0; c < cols.length; c++) {
        const x = cols[c].x;
        const y = rows[r].y;
        const w = cols[c].w;
        const h = rows[r].h;
        
        console.log(`Cropping cell ${index} at x:${x}, y:${y}, w:${w}, h:${h}`);
        
        const cellImage = image.clone();
        cellImage.crop(x, y, w, h);
        
        const outPath = `./public/images/highlight_${index}.png`;
        await cellImage.writeAsync(outPath);
        index++;
      }
    }
    
    console.log('All highlights cropped with exact boundaries!');
  } catch (err) {
    console.error('Error:', err);
  }
}

cropHighlights();
