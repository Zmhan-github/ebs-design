# EBS Design System

[![NPM version][npm-image]][npm-url] 
[![NPM downloads][download-image]][download-url]
[![Discussions][discussions-image]][discussions-url]



[![Elements][elements-image]][elements-url]

[npm-image]: http://img.shields.io/npm/v/ebs-design.svg?style=flat-square
[npm-url]: http://npmjs.org/package/ebs-design
[elements-image]: https://i.ibb.co/gMSWhYM/Elements-1.png
[elements-url]: https://ebs-integrator.github.io/ebs-design/
[download-image]: https://img.shields.io/npm/dm/ebs-design.svg?style=flat-square
[download-url]: https://npmjs.org/package/ebs-design
[discussions-image]: https://img.shields.io/badge/discussions-on%20github-blue?style=flat-square
[discussions-url]: https://github.com/ebs-integrator/ebs-design/discussions


## ⚠️ WARNING

The UI Kit is UNDER DEVELOPMENT, PLEASE CREATE ISSUES OR PR WITH CHANGES

DON'T USE IT IN PRODUCTION UNTIL AT LEAST RC WILL BE RELEASED

## 🧾 Documentation

For more usage details visit [Storybook](https://ebs-integrator.github.io/ebs-design/)

## ⭐ Features

- Modern design and exceptional user experience.
- Fully customizable components using variables.
- Written in TypeScript with predictable static types.
- High-quality and performant React components.
- 100% Open Source.

## 📦 Installation

Use the package manager [yarn](https://classic.yarnpkg.com/en/docs/install/#debian-stable) or npm to install library.

<img width="415px" src="https://nodei.co/npm/ebs-design.png?downloads=true&downloadRank=true&stars=true" />


## 🏗️ Usage guide

Import components you want into your UI

```javascript
import { Button } from 'ebs-design';

// Create and import your scss to customize
import './variables.scss';
```

and use them like so

```javascript
const Example: React.FC = () => (
  <>
    <Button type="primary" size="large">
      Do something
    </Button>

    <Badge count={1}>
      <Icon component={IconSVG} />
    </Badge>
  </>
);
```

#### Using SASS
If your app isn't already configured with SASS, you will first need to install `node-sass` (version: ^4.0.0 || ^5.0.0):
```bash
npm install -D node-sass@^5.0.0
# or
yarn add node-sass@^5.0.0
```

#### Example of `variables.scss`

```scss
// Main colors
$primary-color: #3366ff;
$success-color: #2ac952;
$info-color: #3bc0f9;
$warning-color: #ffd83d;
$danger-color: #ff3a30;
$normal-color: #a5a5a5;

// Primary colors
$primary-000: #eef5ff;
$primary-100: #d6e4ff;
$primary-200: #adc8ff;
$primary-300: #85a9ff;
$primary-400: #6690ff;
$primary-600: #254eda;
$primary-700: #1a39b6;
$primary-800: #102693;
$primary-900: #0a1a7a;

@import 'ebs-design/dist/styles/index.scss';
```

## ❤️ Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Z-Indexes

1. Mask 990
2. Select dropdown 999
