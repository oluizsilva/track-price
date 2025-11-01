const express = require('express');
const puppeteer = require('puppeteer');

const server = express();

server.get('/', (request, response) => {
    response.send('AAAAA');

});

const port = 3000;
server.listen(port, () => {
    console.log(`Server rodando com sucesso em: http://localhost:${port}`);

});

// ========================

(async () => {
    
     
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://terramedia.fandom.com/wiki/O_Senhor_dos_An%C3%A9is');
    // await page.screenshot({ path: 'example.png' });

    await browser.close();
})();