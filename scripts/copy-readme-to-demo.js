const marked = require('marked');
const fs = require('fs');

const demoIndexPagePath = __dirname + '/../demo/dist/index.html';
const readmePath = __dirname + '/../README.md';
const readmeNeedle = '___README_MD_NEEDLE___';
const readme = fs.readFileSync(readmePath);
const demoIndex = fs.readFileSync(demoIndexPagePath);

const demoIndexHtml = demoIndex.toString();
const readmeHtml = marked(readme.toString());

const newDemoIndexHtml = demoIndexHtml.replace(readmeNeedle, readmeHtml);

fs.writeFileSync(demoIndexPagePath, newDemoIndexHtml);