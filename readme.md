# hash-search [![Build Status](https://travis-ci.org/egoist/hash-search.svg?branch=master)](https://travis-ci.org/egoist/hash-search)

> location.hash &amp; location.search for single page application

## Install

```
$ npm install --save hash-search
```

## Usage

```js
const hashSearch = require('hash-search')

hashSearch('#/user/egoist?mode=admin')
/*
{
	hash:   '#/user/egoist',
	search: '?mode=admin'
}
*/
```

## API

### hashSearch(hash)

#### hash

Type: `string`

Hash string, default is `location.hash`

## License

MIT © [EGOIST](https://github.com/egoist)
