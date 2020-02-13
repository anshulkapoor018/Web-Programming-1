const bluebird = require("bluebird");
const Promise = bluebird.Promise;
const prompt = bluebird.promisifyAll(require("prompt"));
const fs = bluebird.promisifyAll(require("fs"));
var fileDataUtil = require('./fileData');
var textMetricsUtil = require('./textMetrics');

async function main(){
  var chapID;
  for (chapID = 1; chapID <= 3; chapID++) {
    var chapterToScanPath = "./chapter" + chapID + ".txt";
    var chapterResultJSON = "./chapter" + chapID + ".result.json";
    if (fs.existsSync(chapterResultJSON)) { // Check for Path Exists or not
      const getJSON = await fileDataUtil.getFileAsJSON(chapterResultJSON);
      console.log(getJSON);
    } else {
      const check = await fileDataUtil.getFileAsString(chapterToScanPath);
      var result = await textMetricsUtil.createMetrics(check);
      const textForFile1 = JSON.stringify(result);
      await fs.writeFileAsync(chapterResultJSON, textForFile1)
      .catch(err => {
          throw err;
      });
      console.log(result);
    }
  }
}

main().catch(err => {
  console.log(err);
});
