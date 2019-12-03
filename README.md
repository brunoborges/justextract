# Just Extract Action

This action extracts files present in the filesystem using the GitHub Toolkit tool-cache module functions.

## Inputs

### `file`

**Required** The name of the file to be extracted.

## Outputs

The file will be extracted inside GITHUB_WORKSPACE.

## Example usage

```yaml
uses: brunoborges/justextract@master
with:
  file: fileName
```
