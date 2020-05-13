#!/usr/bin/env node

const chalk = require('chalk-animation');
const clear = require('clear');
const figlet = require('figlet');
let str = figlet.textSync("HAPPY BIRTHDAY TO YOU", { horizontalLayout: 'full' })
let wish = chalk.rainbow(str)
let start = 1;
let end = 24
clear();

const getWish = (from, to) => {
    while (from <= to) {

        console.log(
            wish.render()
        );
        from++
    };
};
getWish(start, end)