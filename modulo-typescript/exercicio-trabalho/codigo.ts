import axios from 'axios';
import * as cheerio from 'cheerio';

interface Point { x: number; y: number; char: string }

async function printMessage(url:string): Promise<void>{
    try{
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);
        const rows = $('table tr');
        const points: Point[] = [];
        let maxX = 0;
        let maxY = 0;

        //
        rows.each((i, el) =>{
            const cells = $(el).find('td');
            if(cells.length >= 3){
                const x = parseInt($(cells[0]).text());
                const char = $(cells[1]).text();
                const y = parseInt($(cells[2]).text());

                if(!isNaN(x) && !isNaN(y)){
                    points.push({x,y,char});
                    if(x > maxX) maxX = x;
                    if(y > maxY) maxY = y;
                }
            }
        });    

        const grid: string[][] = Array.from({length: maxY +1}, () => Array(maxX + 1).fill(' '));

        points.forEach(p => {
            grid[p.y][p.x] = p.char;
        });

        grid.forEach(row => console.log(row.join('')));        
    } catch(error){
        console.error("Error processing document:", error);
    }
}

printMessage('https://docs.google.com/document/d/e/2PACX-1vSvM5gDlNvt7npYHhp_XfsJvuntUhq184By5xO_pA4b_gCWeXb6dM6ZxwN8rE6S4ghUsCj2VKR21oEP/pub');