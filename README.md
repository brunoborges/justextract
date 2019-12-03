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

```yaml
uses: brunoborges/justextract@master
with:
  file: fileName
  dest: destFolder
```
