const PDFMerger = require("pdf-merger-js");
const path = require("path");

const merging = async (pdfPaths) => {
  const merger = new PDFMerger();

  for (const pdfPath of pdfPaths) {
    await merger.add(pdfPath);
  }

  const timestamp = new Date().getTime();
  const outputPath = path.join(__dirname, "../downloads", `${timestamp}.pdf`);


  await merger.save(outputPath);

  return outputPath;
};

module.exports = {
  merging,
};
