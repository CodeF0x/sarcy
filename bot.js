const telegraf = require('telegraf');
const uuid1 = require('uuid/v1');

bot = new telegraf(process.env.TOKEN);

bot.on('inline_query', ({
    inlineQuery,
    answerInlineQuery
}) => {
    const sarcasmString = makeSarcasm(inlineQuery.query);

    if (!sarcasmString) {
      return;
    }

    const option = {
      type: 'article',
      id: uuid1(),
      title: sarcasmString,
      input_message_content: {
        message_text: sarcasmString
      }
    };

    return answerInlineQuery([option]);
});

bot.on('choosen_inline_result', ({
    chosenInlineResult
}) => {
    console.log(chosenInlineResult);
});

bot.launch();


function makeSarcasm(string) {
    const sarcasm = [];

    for (let i = 0; i < string.length; i++) {
        if (i % 2 === 0) {
            sarcasm.push(string[i].toUpperCase());
        } else {
            sarcasm.push(string[i].toLowerCase());
        }
    }
    return sarcasm.join('');
}