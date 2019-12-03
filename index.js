const core = require('@actions/core');
const tc = require('@actions/tool-cache');

/*
function getFileEnding(file) {
    let fileEnding = '';

    if (file.endsWith('.tar')) {
        fileEnding = '.tar';
    } else if (file.endsWith('.tar.gz')) {
        fileEnding = '.tar.gz';
    } else if (file.endsWith('.zip')) {
        fileEnding = '.zip';
    } else if (file.endsWith('.7z')) {
        fileEnding = '.7z';
    } else {
        throw new Error("${file} has an unsupported file extension");
    }

    return fileEnding;
}
*/

try {
    const file = core.getInput('file');
    console.log("File to extract: ${file}.");

    const dest = core.getInput('dest');
    console.log("Destination: ${dest}.");

    const fileEnding = file.slice((file.lastIndexOf('.') - 1 >>> 0) + 2);
    console.log("File Extension: ${fileEnding}.");

    if ('.tar' === fileEnding || '.tar.gz' === fileEnding) {
        tc.extractTar(file, dest);
    } else if ('.zip' === fileEnding) {
        tc.extractZip(file, dest);
    } else if ('.7z' === fileEnding) {
        tc.extract7z(file, dest);
    } else {
        throw new Error("${file} has an unsupported file extension.");
    }
} catch (error) {
    core.setFailed(error.message);
}
