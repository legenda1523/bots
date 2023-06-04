const Telegraf = require('telegraf');
const Extra = require('telegraf/extra');
const MArkup = require('telegraf/markup');
const dotenv = require('dotenv');
dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.use(Telegraf.log());

bot.command('start', (ctx) => {
    return ctx.replyWithHTML('Assalomu Alaykum Hurmatli, <i>' + ctx.message.from.user_name +'</i>')
})

    Extra.HTML()
    .markup(Markup.inlineKeyboard([
        Markup.callbackButton('Dushanba', 'du'),
        Markup.callbackButton('Seshanba', 'su'),
        Markup.callbackButton('Chorshanba', 'chor'),
        Markup.callbackButton('Payshanba', 'pay'),
        Markup.callbackButton('Juma', 'ju'),
        Markup.callbackButton('Shanba', 'sha'),
        Markup.callbackButton('Yakshanba', 'yak'),
    ]))

    bot.action('du', (ctx) => {
        ctx.reply('Algebra',
        'Algebra',
        'Algebra',
        'Algebra',
        'Algebra',
        'Algebra',
        )
    });

    bot.action('su', (ctx) => {
        ctx.reply('Algebra',
        'Algebra',
        'Algebra',
        'Algebra',
        'Algebra',
        'Algebra',
        )
    });

    bot.action('chor', (ctx) => {
        ctx.reply('Algebra',
        'Algebra',
        'Algebra',
        'Algebra',
        'Algebra',
        'Algebra',
        )
    });

    bot.action('pay', (ctx) => {
        ctx.reply('Algebra',
        'Algebra',
        'Algebra',
        'Algebra',
        'Algebra',
        'Algebra',
        )
    });

    bot.action('ju', (ctx) => {
        ctx.reply('Algebra',
        'Algebra',
        'Algebra',
        'Algebra',
        'Algebra',
        'Algebra',
        )
    });

    bot.action('sha', (ctx) => {
        ctx.reply('Algebra',
        'Algebra',
        'Algebra',
        'Algebra',
        'Algebra',
        'Algebra',
        )
    });

    bot.action('yak', (ctx) => {
        ctx.reply('Algebra',
        'Algebra',
        'Algebra',
        'Algebra',
        'Algebra',
        'Algebra',
        )
    });



bot.launch();
