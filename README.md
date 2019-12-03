# Just Extract Action

This action extracts files present in the filesystem using the GitHub Toolkit tool-cache module functions.

## Inputs

### `file`

**Required** The name of the file to be extracted.

### `dest`

*Optional* The destination where to extract the file.

## Outputs

### `extractedPath`

Full path of where the file was extracted to.

## Example usage

uses: actions/hello-world-javascript-action@v1
with:
  who-to-greet: 'Mona the Octocat'
