# use-lorem-ipsum

> React Hook for generating random lorem ipsum words, sentences, paragraphs

[![NPM](https://img.shields.io/npm/v/use-lorem-ipsum.svg)](https://www.npmjs.com/package/use-lorem-ipsum) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm add use-lorem-ipsum
```

## Signature

```jsx
const message = useLoremIpsum(type, count);
```

## Props

Name | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
`type` | `string` | yes | - | specify one from `words`, `sentences`, `paragraphs`
`count` | `number` | _optional_ | 1 | specify number of times the `type` should be repeated

## Example
[Codesandbox Demo 📦](https://codesandbox.io/s/use-lorem-ipsum-forked-6gf24?file=/src/App.js)

## Usage

```jsx
import React from 'react'

import { useLoremIpsum } from 'use-lorem-ipsum'

export default () => {
  const message = useLoremIpsum("words", 2);

  return (
    <div>
      Hello {message}
    </div>
  );
}
```

## License

© [HarshMakadia](https://github.com/Harshmakadia)
