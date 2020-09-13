// Imports
const core = require('@actions/core');
const tc = require('@actions/tool-cache');

// Application
const file = core.getInput('file');
console.log("File to extract: " + file);

const dest = process.env['GITHUB_WORKSPACE'];
console.log("Destination: " + dest);

function getFileEnding(file) {
    if (file.endsWith('.tar.gz')) {
        return '.tar.gz';
    } else {
        return file.slice((file.lastIndexOf('.') >>> 0));
    }
}

const fileEnding = getFileEnding(file);
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
