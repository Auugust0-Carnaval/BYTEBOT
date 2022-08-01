
const { firefox } = require('playwright');

const {keyboard} = require('@nut-tree/nut-js');

const puppeteer = require('puppeteer');

const { Telegraf }  = require('telegraf');




(async () => {

  let tokenTelegram = "5458875943:AAGQDcfTylsL81s6AClA7NOQyXa75KUN3yY";

  const bot = new Telegraf(tokenTelegram); // inicializa a instancia de comunicacão com o bot do Telegram pelo token

  bot.hears('Ola', (ctx) => ctx.reply('Bem vindo ao Droid jogadores(as) 😜')); // Ao digitar Ola e retornado um messageBot
  bot.launch();

  keyboard.config.autoDelayMs = 0.2; // tempo que sera escrito na tela

  let username = 'Tchu_20' // usuario de acesso
  let passWord = '@Tchu523435' // senha

  const browser = await firefox.launch({headless: false});

  const page = await browser.newPage();

  await page.goto('https://livecasino.bet365.com/home/br');

  await page.locator('[aria-label="Roulette"] img').click();

  await page.locator('[placeholder="Usuário"]').click();

  await keyboard.type(username);

  await page.locator('[placeholder="Senha"]').click();
  
  await keyboard.type(passWord);

  await page.locator('button:has-text("Fazer Login")').click();
  
  await page.waitForTimeout(5000);

  await page.frameLocator('iframe').first().locator('text=Lembrar-me Mais Tarde').click();

  await page.waitForURL('https://livecasino.bet365.com/Play/LiveRoulette');
  
  await page.locator('button:has-text("Continuar")').click();

  await page.waitForTimeout(30000);

  var columnOne = 0;
  var columnTwo = 0;
  var columnThree = 0;

  async function SelectNumber(){
    let numberRollete =  await page.frameLocator('#inline-games-page-component__content iframe').frameLocator('#gamecontent').locator('.roulette-history-itemei7kIRQ9CIgT5_luqPyA').first().allInnerTexts();
    let valor = parseInt(numberRollete);

    for(var i = 1; i < 37; i = i + 3){
      var coluna1 = i;

      if(valor == coluna1){
        columnOne = columnOne + 1;

        if(columnOne == 3){
          let message = `Numero ${valor} é da coluna 1, foram sorteado(s) ${columnOne} número(s) desta coluna !!`;
          bot.telegram.sendMessage(1830472691, message);
          console.log('Mensagem enviada');
        }
        
      }
    }

    for(var i = 2; i < 37; i = i + 3){
      var coluna2 = i;
  
      if(valor == coluna2){
        columnTwo = columnTwo + 1;

        if(columnTwo == 3){
          let message = `Numero ${valor} é da coluna 2, foram sorteado(s) ${columnTwo} número(s) desta coluna !!`
          bot.telegram.sendMessage(1830472691, message);
          console.log('Mensagem enviada');
        }
      }
    }

    for(var i = 3; i < 37; i = i + 3){
      var coluna3 = i;
  
      if(valor == coluna3){
        columnThree = columnThree + 1;

        if(columnThree == 3){
          message = `Numero ${valor} é da coluna 3, foram sorteado(s) ${columnThree} número(s) desta coluna !!`
          bot.telegram.sendMessage(1830472691, message);
          console.log('Mensagem enviada');
        }
       
      }
    }
  }

  setInterval(SelectNumber, 23000); 
})();


