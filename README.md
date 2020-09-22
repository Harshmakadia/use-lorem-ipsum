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


## Demo
![Demo](https://user-images.githubusercontent.com/13532530/93763878-d2e35e00-fc2f-11ea-925b-926c79abb735.png)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://harshmakadia.me/"><img src="https://avatars2.githubusercontent.com/u/13532530?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Harsh Makadia</b></sub></a><br /><a href="https://github.com/Harshmakadia/use-lorem-ipsum/commits" title="Code">💻</a> <a href="#design-harshmakadia" title="Design">🎨</a> <a href="#ideas-harshmakadia" title="Ideas, Planning, & Feedback">🤔</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

## License

© [HarshMakadia](https://github.com/Harshmakadia)
