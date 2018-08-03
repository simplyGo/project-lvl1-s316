#!/usr/bin/env node
import { runGame } from '..';
import { greeting, calcGame } from '../games/calcGame';

runGame(greeting, calcGame);
