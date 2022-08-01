
//Importacao das bibliotecas/Frameworks
const { firefox } = require('playwright');

const {keyboard} = require('@nut-tree/nut-js');

const { Telegraf }  = require('telegraf'); // API associada ao Telegram

(async () => {

  let tokenTelegram = "5458875943:AAGQDcfTylsL81s6AClA7NOQyXa75KUN3yY";

  const bot = new Telegraf(tokenTelegram); // inicializa a instancia de comunicacão com o bot do Telegram pelo token

  bot.hears('Ola', (ctx) => ctx.reply('Bem vindo ao BYTE jogadores(as) 😜')); // Ao digitar Ola e retornado um messageBot
  bot.launch();

  keyboard.config.autoDelayMs = 1.0; // tempo que sera escrito na tela

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

  await page.waitForTimeout(28000);

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
      console.log('duplicou numero!');
    }
    else{
      
      //Atribuindo valor antigo a variavel para nao ocorrer looping de numeros sorteados!
      valorAntigo = valor;

      //Adicionando logica solicitada para as colunas!
      for(var i = 1; i < 37; i = i + 3){
        var coluna1 = i;

        if(valor == coluna1){
          columnOne = columnOne + 1;

          if(columnOne == 8 || columnOne == 4 ){
            let message = `Numero ${valor} é da coluna 1, foram sorteado(s) ${columnOne} número(s) desta coluna !!`;
            bot.telegram.sendMessage(5088599673, message);
            console.log('Mensagem enviada');
          }
        }
      }

      for(var i = 2; i < 37; i = i + 3){
        var coluna2 = i;
    
        if(valor == coluna2){
          columnTwo = columnTwo + 1;

          if(columnTwo == 8 || columnTwo == 4){
            let message = `Numero ${valor} é da coluna 2, foram sorteado(s) ${columnTwo} número(s) desta coluna !!`
            bot.telegram.sendMessage(5088599673, message);
            console.log('Mensagem enviada');
          }
        }
      }

      for(var i = 3; i < 37; i = i + 3){
        var coluna3 = i;
    
        if(valor == coluna3){
          columnThree = columnThree + 1;

          if(columnThree == 8 || columnThree == 4){
            message = `Numero ${valor} é da coluna 3, foram sorteado(s) ${columnThree} número(s) desta coluna !!`
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

          if(duzia1 == 8 || duzia1 == 3){
            let message = `Foram sorteados ${duzia1} números da primeria duzia !!!`;
            bot.telegram.sendMessage(5088599673,message);
            console.log('Messagem enviada referente a primeria duzia');
          }
        }
      }

      for(var i = 13; i <= 24; i++){
        let secondDozen = i;

        if(valor == secondDozen){
          duzia2 = duzia2 + 1;

          if(duzia2 == 8 || duzia2 == 3){
            let message = `Foram sorteados ${duzia2} números da segunda duzia !!!`;
            bot.telegram.sendMessage(5088599673,message);
            console.log('Messagem enviada referente a segunda duzia');
          }
        }
      }

      for(var i = 25; i <= 36; i++){
        let thirdDozen = i;

        if(valor == thirdDozen){
          duzia3 = duzia3  + 1;

          if(duzia3 == 8 || duzia3 == 3){
            let message = `Foram sorteados ${duzia3} números da terceira duzia !!!`;
            bot.telegram.sendMessage(5088599673, message);
            console.log('Messagem enviada referente a terceira duzia');
          }
        }
      }

      //Condicao de for sorteado o valor = 0
      if(valor == 0){
        let message = `O número ${valor} foi sorteado, não pertence a nenhuma coluna ou duzia 🤔`;
        bot.telegram.sendMessage(5088599673, message);
        console.log('Mensagem enviada');
      }
      console.log(`Numero sorteado foi: ${valor}`);
    }  
      
  }

  async function clickTimer(){
    await page.frameLocator('#inline-games-page-component__content iframe').frameLocator('#gamecontent').locator('li:nth-child(4)').click();
  }

  setInterval(SelectNumber, 23000); 
  setInterval(clickTimer, 15000);
})();