// nodemon /Users/DRIVE/PROGRAM/Pratical/src/server.js   TO RUN ON WEB

const express = require("express");
const path = require("path");
const app = express();
const multer = require("multer");
const { merging } = require("./merged");
const upload = multer({ dest: "/Users/DRIVE/PROGRAM/Pratical/uploads" });

const port = 8000;

app.use("/static", express.static(path.join(__dirname, "../downloads")));

const staticPath = path.join(__dirname, "../public");
app.use(express.static(staticPath));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.post("/merge", upload.array("pdfs", 10), async (req, res) => {
  console.log(req.files);
  if (req.files.length < 2) {
    return res.status(400).send("Please upload at least two PDF files.");
  }

  const pdfPaths = req.files.map((file) => file.path);

  try {
    const mergedPdfPath = await merging(pdfPaths);
    res.sendFile(mergedPdfPath, { root: "/" });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port https://localhost:${port}`);
});
