var result = textMetricsUtil.createMetrics(check);
    const textForFile1 = JSON.stringify(result);
    await fs.writeFileAsync(chapter1ResultPath, textForFile1)
    .catch(err => {
        throw err;
    });