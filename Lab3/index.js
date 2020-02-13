const bluebird = require("bluebird");
const Promise = bluebird.Promise;
const prompt = bluebird.promisifyAll(require("prompt"));
const fs = bluebird.promisifyAll(require("fs"));
var fileDataUtil = require('./fileData');
var textMetricsUtil = require('./textMetrics');

const chapter1Path = "./Lab3/chapter1.txt";
const chapter1ResultPath = "./Lab3/chapter1.result.json";

const chapter2Path = "./Lab3/chapter2.txt";
const chapter2ResultPath = "./Lab3/chapter2.result.json";

const chapter3Path = "./Lab3/chapter3.txt";
const chapter3ResultPath = "./Lab3/chapter3.result.json";

async function main(path, resultJSON){
  if (fs.existsSync(resultJSON)) { // Check for Path Exists or not
    const getJSON = await fileDataUtil.getFileAsJSON(resultJSON);
    console.log(getJSON);
  } else {
    const check = await fileDataUtil.getFileAsString(path);
    var result = textMetricsUtil.createMetrics(check);
    const textForFile1 = JSON.stringify(result);
    await fs.writeFileAsync(resultJSON, textForFile1)
    .catch(err => {
        throw err;
    });
    console.log(result);
  }
}

main(chapter1Path, chapter1ResultPath);
main(chapter2Path, chapter2ResultPath);
main(chapter3Path, chapter3ResultPath);
