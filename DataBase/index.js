import path from 'node:path';
import { URL } from 'node:url'
import dotenv from 'dotenv';

const __dirname = new URL('.', import.meta.url).pathname;

dotenv.config({
  path: path.join(__dirname, '.env'),
  override: true
})
