import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf8');

test('check json stylish format', () => {
  const sourceData = readFile('expected-result-stylish.txt');
  const expected = sourceData.trim();
  const actual = genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'), 'stylish');
  expect(actual).toEqual(expected);
});
