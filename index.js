//Importacao das bibliotecas/Frameworks

require('dotenv').config();

const { firefox, selectors } = require('playwright');

const {keyboard, mouse, down, imageResource} = require('@nut-tree/nut-js');

const { Telegraf }  = require('telegraf'); // API associada ao Telegram

(async () => {

  try {
        console.log('BYTE foi iniciado');

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

        await mouse.scrollDown(150);

        await page.locator('.live-casino-slider-game__image').first().click();

        await page.waitForTimeout(1000);

        await page.locator('[placeholder="Usuário"]').click();

        await keyboard.type(username);

        await page.waitForTimeout(1000);

        await page.locator('[placeholder="Senha"]').click();
        
        await keyboard.type(passWord);

        await page.locator('button:has-text("Fazer Login")').click();
        
        await page.waitForTimeout(5000);

        await page.frameLocator('iframe').first().locator('text=Lembrar-me Mais Tarde').click();

        //   await page.waitForURL('https://livecasino.bet365.com/Play/LiveRoulette');
        
        await page.locator('button:has-text("Continuar")').click();
        
        await page.waitForTimeout(25000);
    
        //Variaveis globais
        var columnOne = 0;
        var columnTwo = 0;
        var columnThree = 0;

        var valueColunm1 = []; // valores sorteados
        var valueColunm2 = [];
        var valueColunm3 = [];

        var valorAntigo = 0;

        //arrays
        var arrayColunm1 = []
        var arrayColunm2 = []
        var arrayColunm3 = []

        var arrayDozen1 = [];
        var arrayDozen2 = [];
        var arrayDozen3 = [];

        var valueDuzia1 = []; //valores sorteados
        var valueDuzia2 = [];
        var valueDuzia3 = [];

        var duzia1 = 0
        var duzia2 = 0
        var duzia3 = 0

        async function SelectNumber(){

            let numberRollete =  await page.frameLocator('#inline-games-page-component__content iframe').frameLocator('#gamecontent').locator('.roulette-history-itemei7kIRQ9CIgT5_luqPyA').first().allInnerTexts();
            let valor = parseInt(numberRollete);

            if(valorAntigo == valor){
                valorAntigo = valor;
            }
            else{
                valorAntigo = valor; 
                console.log(`Numero sorteado: ${valor}`);

                //TODO PRIMERA ALGORITMO DA PRIMEIRA COLUNA
                valueColunm1.unshift(valor);

                for(var i = 1; i < 37; i = i + 3){
                    arrayColunm1.push(i); // nuemros da coluna 1
                }

                if(arrayColunm1.indexOf(valueColunm1[0])>=0){
                    columnOne = columnOne + 1;
                    if(columnOne == 5 || columnOne >= 8){
                        let message = `🎯Rollete (BET365)🎯 \n🤖Analise da mesa🤖 \n${columnOne} numeros da 1 coluna repetidos`;
                        bot.telegram.sendMessage(1624289481, message);
                        bot.telegram.sendMessage(1443534137, message);
                        bot.telegram.sendMessage(5088599673, message);
                        console.log('Mensagem enviada');
                    }
                    else{
                        return;
                    }
                }
                else{
                    valueColunm1.splice(0, valueColunm1.length); // zerando o array para = []
                    columnOne = 0;
                }


                //TODO ALGORITMO DA SEGUNDA COLUNA

                valueColunm2.unshift(valor);

                for(var i = 2; i < 37; i = i + 3){
                    arrayColunm2.push(i);
                }

                if(arrayColunm2.indexOf(valueColunm2[0])>=0){
                    columnTwo = columnTwo + 1;
                    if(columnTwo == 5 || columnTwo >= 8){
                        let message = `🎯Rollete (BET365)🎯 \n🤖Analise da mesa🤖 \n${columnTwo} numeros da 2 coluna repetidos`;
                        bot.telegram.sendMessage(1624289481, message);
                        bot.telegram.sendMessage(1443534137, message);
                        bot.telegram.sendMessage(5088599673, message);
                        console.log('Mensagem enviada');
                    }
                    else{
                        return; 
                    }
                }
                else{
                    valueColunm2.splice(0, valueColunm2.length); // zerando o array para = []
                    columnTwo = 0;
                }

                //TODO ALGORITMO DA TERCEIRA COLUNA

                valueColunm3.unshift(valor);

                for(var i = 3; i < 37; i = i + 3){
                    arrayColunm3.push(i);
                }

                if(arrayColunm3.indexOf(valueColunm3[0])>=0){
                    columnThree = columnThree + 1;
                    if(columnThree == 5 || columnThree >= 8){
                        let message = `🎯Rollete (BET365)🎯 \n🤖Analise da mesa🤖 \n${columnThree} numeros da 3 coluna repetidos`;
                        bot.telegram.sendMessage(1624289481, message);
                        bot.telegram.sendMessage(1443534137, message);
                        bot.telegram.sendMessage(5088599673, message);
                        console.log('Mensagem enviada');
                    }
                    else{
                        return;
                    }
                }
                else{
                    valueColunm3.splice(0, valueColunm3.length); // zerando o array para = []
                    columnThree = 0;
                }

                //TODO PRIMEIRA DUZIA

                valueDuzia1.unshift(valor)

                for(var i = 1; i <= 12; i++){
                    arrayDozen1.push(i);
                }

                if(arrayDozen1.indexOf(valueDuzia1[0])>=0){
                    duzia1 = duzia1 + 1;                    
                    if(duzia1 == 5 || duzia1 >= 8){
                        let message = `🎯Rollete (BET365)🎯 \n🤖Analise da mesa🤖 \n${duzia1} numeros da 1 duzia repetidos`;
                        bot.telegram.sendMessage(1624289481, message);
                        bot.telegram.sendMessage(1443534137, message);
                        bot.telegram.sendMessage(5088599673, message);
                        console.log('Mensagem enviada');   
                    }
                    else{
                        return;
                    }
                }
                else{
                    valueDuzia1.splice(0, valueDuzia1.length);
                    duzia1 = 0;
                }

                // TODO SEGUNDA DUZIA

                valueDuzia2.unshift(valor)

                for(var i = 13; i <= 24; i++){
                    arrayDozen2.push(i);
                }

                if(arrayDozen2.indexOf(valueDuzia2[0])>=0){
                    duzia2 = duzia2 + 1;                    
                    if(duzia2 == 5 || duzia2 >= 8){
                        let message = `🎯Rollete (BET365)🎯 \n🤖Analise da mesa🤖 \n${duzia2} numeros da 2 duzia repetidos`;
                        bot.telegram.sendMessage(1624289481, message);
                        bot.telegram.sendMessage(1443534137, message);
                        bot.telegram.sendMessage(5088599673, message);
                        console.log('Mensagem enviada');   
                    }
                    else{
                        return;
                    }
                }
                else{
                    valueDuzia2.splice(0, valueDuzia2.length);
                    duzia1 = 0;
                }

                //TODO TERCEIRA DUZIA

                valueDuzia3.unshift(valor)

                for(var i = 25; i <= 36; i++){
                    arrayDozen3.push(i);
                }

                if(arrayDozen3.indexOf(valueDuzia3[0])>=0){
                    duzia3 = duzia3 + 1;                    
                    if(duzia3 == 5 || duzia3 >= 8){
                        let message = `🎯Rollete (BET365)🎯 \n🤖Analise da mesa🤖 \n${duzia3} numeros da 3 duzia repetidos`;
                        bot.telegram.sendMessage(1624289481, message);
                        bot.telegram.sendMessage(1443534137, message);
                        bot.telegram.sendMessage(5088599673, message);
                        console.log('Mensagem enviada');   
                    }
                    else{
                        return;
                    }
                }
                else{
                    valueDuzia3.splice(0, valueDuzia3.length);
                    duzia3 = 0;
                }
            }
        }  

        var numberCaught = setInterval(SelectNumber, 1000);
        
        setInterval(again, 10000);
    
        async function again(){
            clearInterval(numberCaught);
            console.log('funcao de retorno iniciada!');
            await page.locator('img[alt="Lobby"]').click();
            await page.locator('text=Fechar').click();
            await page.locator('.live-casino-slider-game__image').first().click();
        }
    }
  catch{
    
  }
})();


let variavel;



function consoleLog() {
    console.log("Ola mundo!");
}

variavel = setInterval(consoleLog, 1000);

function pararFuncao() {
    clearInterval(variavel);
}

setInterval(pararFuncao, 5000);