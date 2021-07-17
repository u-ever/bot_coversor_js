const puppeteer = require('puppeteer');
const readlineSync = require('readline-sync');

console.log('=-'.repeat(30));
console.log('Bem vindo ao Bot Conversor de Moedas');

async function robo () {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  const moedaInicial = readlineSync.question('Digite a moeda inicial: ') || 'dolar'; 
  const moedaFinal = readlineSync.question('Digite a moeda final: ')|| 'real';
  const yourUrl = `https://www.google.com/search?q=${moedaInicial}+para+${moedaFinal}&oq=${moedaInicial}+para+${moedaFinal}&aqs=chrome.0.69i59.2311j0j9&sourceid=chrome&ie=UTF-8`;
  await page.goto(yourUrl);

  const resultado = await page.evaluate(() => {
    return document.querySelector('.a61j6.vk_gy.vk_sh.Hg3mWc').value;
  });
    
  console.log(`\nO valor de uma unidade de ${moedaInicial} em ${moedaFinal} atualmente é ${resultado}.\n`)
  console.log('=-'.repeat(30));
  await browser.close();
}

robo ();