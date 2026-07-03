import axios from 'axios';
import * as cheerio from 'cheerio';

/**
 * Função principal para processar o Google Doc e imprimir o gráfico.
 * @param url A URL do Google Doc publicado.
 */
async function printSecretMessage(url: string): Promise<void> {
    try {
        // 1. Obter e analisar o HTML
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);
        
        // Supondo que os dados estejam em uma tabela (ajuste os seletores conforme necessário)
        const rows = $('table tr');
        
        interface Point { x: number; y: number; char: string }
        const points: Point[] = [];
        
        let maxX = 0;
        let maxY = 0;

        // 2. Extrair dados (ajuste os índices de células conforme o formato real do doc)
        rows.each((i, el) => {
            const cells = $(el).find('td');
            if (cells.length >= 3) {
                const x = parseInt($(cells[0]).text());
                const char = $(cells[1]).text();
                const y = parseInt($(cells[2]).text());
                
                if (!isNaN(x) && !isNaN(y)) {
                    points.push({ x, y, char });
                    if (x > maxX) maxX = x;
                    if (y > maxY) maxY = y;
                }
            }
        });

        // 3. Construir e imprimir a grade
        // Nota: y geralmente representa a linha (altura) e x a coluna (largura)
        const grid: string[][] = Array.from({ length: maxY + 1 }, () => 
            Array(maxX + 1).fill(' ')
        );

        points.forEach(p => {
            grid[p.y][p.x] = p.char;
        });

        // Imprimir formatado
        grid.forEach(row => console.log(row.join('')));

    } catch (error) {
        console.error("Erro ao processar o documento:", error);
    }
}

// Exemplo de uso:
 printSecretMessage('https://docs.google.com/document/d/e/2PACX-1vSvM5gDlNvt7npYHhp_XfsJvuntUhq184By5xO_pA4b_gCWeXb6dM6ZxwN8rE6S4ghUsCj2VKR21oEP/pub');