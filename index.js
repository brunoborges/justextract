// Imports
const core = require('@actions/core');
const tc = require('@actions/tool-cache');

// Application
const file = core.getInput('file');
console.log("File to extract: " + file);

const dest = core.getInput('dest');
console.log("Destination: " + dest);

const fileEnding = file.slice((file.lastIndexOf('.') - 1 >>> 0) + 2);
console.log("File Extension: " + fileEnding);

if ('.tar' === fileEnding || '.tar.gz' === fileEnding) {
    tc.extractTar(file, dest);
} else if ('.zip' === fileEnding) {
    tc.extractZip(file, dest);
} else if ('.7z' === fileEnding) {
    tc.extract7z(file, dest);
} else {
    throw file + " has an unsupported file extension.";
}
