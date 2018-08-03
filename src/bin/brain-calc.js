#!/usr/bin/env node
import { runGame } from '..';
import { gameDescription, calcGame } from '../games/calcGame';

runGame(gameDescription, calcGame);
