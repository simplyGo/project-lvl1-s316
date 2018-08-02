#!/usr/bin/env node
import { askName, runEvenGame } from '..';

runEvenGame(askName(), 3);
