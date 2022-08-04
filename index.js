//Importacao das bibliotecas/Frameworks

require('http').createServer().listen(3000);

const { firefox } = require('playwright');

const {keyboard} = require('@nut-tree/nut-js');

const { Telegraf }  = require('telegraf'); // API associada ao Telegram

(async () => {

  console.log('BYTE foi iniciado');

  let tokenTelegram = "5458875943:AAGQDcfTylsL81s6AClA7NOQyXa75KUN3yY";

  const bot = new Telegraf(tokenTelegram); // inicializa a instancia de comunicacão com o bot do Telegram pelo token

  bot.hears('Ola', (ctx) => ctx.reply('Bem vindo ao BYTE jogadores(as) 😜')); // Ao digitar Ola e retornado um messageBot
  bot.launch();

  keyboard.config.autoDelayMs = 1.0; // tempo que sera escrito na tela

  let username = 'Feh_20' // usuario de acesso
  let passWord = '@Tchu523435' // senha

  const browser = await firefox.launch({headless: false});

  const page = await browser.newPage();

  await page.goto('https://livecasino.bet365.com/home/br');

  await page.locator('[aria-label="Roulette"] img').click();

  await page.locator('[placeholder="Usuário"]').click();

  await keyboard.type(username);

  await page.waitForTimeout(1000);

  await page.locator('[placeholder="Senha"]').click();
  
  await keyboard.type(passWord);

  await page.locator('button:has-text("Fazer Login")').click();
  
  await page.waitForTimeout(5000);

  await page.frameLocator('iframe').first().locator('text=Lembrar-me Mais Tarde').click();

  await page.waitForURL('https://livecasino.bet365.com/Play/LiveRoulette');
  
  await page.locator('button:has-text("Continuar")').click();
  
  await page.waitForTimeout(25000);
  
  //Variaveis globais
  var columnOne = 0;
  var columnTwo = 0;
  var columnThree = 0;
  var duzia1 = 0;
  var duzia2 = 0;
  var duzia3 = 0;

  var valorAntigo = 0;


  async function SelectNumber(){
    let numberRollete =  await page.frameLocator('#inline-games-page-component__content iframe').frameLocator('#gamecontent').locator('.roulette-history-itemei7kIRQ9CIgT5_luqPyA').first().allInnerTexts();
    let valor = parseInt(numberRollete);

    if(valorAntigo == valor){
      valorAntigo = valor;    
    }
    else{
      
      //Atribuindo valor antigo a variavel para nao ocorrer looping de numeros sorteados!
      valorAntigo = valor;

      //Adicionando logica solicitada para as colunas!
      for(var i = 1; i < 37; i = i + 3){
        var coluna1 = i;

        if(valor == coluna1){
          columnOne = columnOne + 1;

          if(columnOne == 8 || columnOne == 5 || columnOne > 8 ){
            let message = `💎Foram repetidos ${columnOne} número(s) da primeira coluna !! 💎`;
            // bot.telegram.sendMessage(1443534137, message);
            bot.telegram.sendMessage(5088599673, message);
            console.log('Mensagem enviada');
          }
        }
      }

      for(var i = 2; i < 37; i = i + 3){
        var coluna2 = i;
    
        if(valor == coluna2){
          columnTwo = columnTwo + 1;

          if(columnTwo == 8 || columnTwo == 5 || columnTwo > 8){
            let message = `💎Foram repetidos ${columnTwo} número(s) da segunda coluna !! 💎`
            // bot.telegram.sendMessage(1443534137, message);
            bot.telegram.sendMessage(5088599673, message);
            console.log('Mensagem enviada');
          }
        }
      }

      for(var i = 3; i < 37; i = i + 3){
        var coluna3 = i;
    
        if(valor == coluna3){
          columnThree = columnThree + 1;

          if(columnThree == 8 || columnThree == 5 || columnThree > 8){
            let message = `💎Foram repetidos ${columnThree} número(s) da terceira coluna !! 💎`;
            // bot.telegram.sendMessage(1443534137, message);
            bot.telegram.sendMessage(5088599673, message);
            console.log('Mensagem enviada');
          }
        }
      }

      // Adicionando logica solicitada para as dúzias

      for(var i = 1; i <= 12; i++){
        let firstDozen = i;

        if(valor == firstDozen){
          duzia1 = duzia1 + 1;

          if(duzia1 >= 8 || duzia1 == 5){
            let message = `🎈 Foram sorteados ${duzia1} números da primeria duzia !!! 🎈`;
            // bot.telegram.sendMessage(1443534137, message);
            bot.telegram.sendMessage(5088599673, message);
            console.log('Messagem enviada referente a primeria duzia');
          }
        }
      }

      for(var i = 13; i <= 24; i++){
        let secondDozen = i;

        if(valor == secondDozen){
          duzia2 = duzia2 + 1;

          if(duzia2 >= 8 || duzia2 == 5){
            let message = `🎈 Foram sorteados ${duzia2} números da segunda duzia !!! 🎈`;
            // bot.telegram.sendMessage(1443534137, message);
            bot.telegram.sendMessage(5088599673, message);
            console.log('Messagem enviada referente a segunda duzia');
          }
        }
      }

      for(var i = 25; i <= 36; i++){
        let thirdDozen = i;

        if(valor == thirdDozen){
          duzia3 = duzia3  + 1;

          if(duzia3 >= 8 || duzia3 == 5){
            let message = `🎈 Foram sorteados ${duzia3} números da terceira duzia !!! 🎈`;
            // bot.telegram.sendMessage(1443534137, message);
            bot.telegram.sendMessage(5088599673, message);
            console.log('Messagem enviada referente a terceira duzia');
          }
        }
      }

      //Condicao de for sorteado o valor = 0
      if(valor == 0){
        let message = `O número ${valor} foi sorteado, não pertence a nenhuma coluna ou duzia 🤔`;
        // bot.telegram.sendMessage(1443534137, message);
        bot.telegram.sendMessage(5088599673, message);
        console.log('Mensagem enviada');
      }
      console.log(`Numero sorteado foi: ${valor}`);
    }  
  }

  var timer = 380000;

  async function ScriptAsync(){

    console.log('executando funcao');
    if(timer == 380000){

      timer = timer + 60000;

      await page.waitForTimeout(2000);
      await page.frameLocator('#inline-games-page-component__content iframe').frameLocator('#gamecontent').locator('button:has-text("Ok")').click();
      await page.frameLocator('#inline-games-page-component__content iframe').frameLocator('#gamecontent').locator('text=bet365 Roulette').first().click();
      // await page.waitForTimeout(24000);  
    }
    else{
      await page.waitForTimeout(2000);
      await page.frameLocator('#inline-games-page-component__content iframe').frameLocator('#gamecontent').locator('button:has-text("Ok")').click();
      await page.waitForTimeout(25000);
      await page.frameLocator('#inline-games-page-component__content iframe').frameLocator('#gamecontent').locator('button:has-text("Ok")').click();

      await page.frameLocator('#inline-games-page-component__content iframe').frameLocator('#gamecontent').locator('text=bet365 Roulette').first().click();
      // await page.waitForTimeout(24000);  
    }  
  }

  var timerInterval = timer;

  console.log(`novo timer: ${timerInterval}`);

  setInterval(SelectNumber, 1000); 
  setInterval(ScriptAsync, timerInterval);

})();
