import path from 'path';
import parsers from './parsers.js';
import readFile from './readFile.js';
import treeDiff from './findDiff.js';
import formatters from './formatters/index.js';

const getFileData = (filepath) => {
  const fileData = readFile(filepath);
  const fileFormat = path.extname(filepath);
  if (fileFormat[0] === '.') {
    fileFormat.slice(1);
  }
  const parsedData = parsers(fileData, fileFormat);

  return parsedData;
};

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  const content1 = getFileData(filepath1);
  const content2 = getFileData(filepath2);

  const difference = treeDiff(content1, content2);
  const result = formatters(difference, formatName);

  return result;
};

export default genDiff;
