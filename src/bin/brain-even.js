#!/usr/bin/env node
import { askName, runEvenGame } from '..';

console.log('Answer "yes" if number even otherwise answer "no".');

runEvenGame(askName());
