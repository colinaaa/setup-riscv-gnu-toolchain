# Welcome to setup-riscv-gnu-toolchain 👋

![Version](https://img.shields.io/badge/version-0.0.0-blue.svg?cacheSeconds=2592000)
[![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://github.com/colinaaa/setup-riscv-gnu-toolchain#readme)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/colinaaa/setup-riscv-gnu-toolchain/graphs/commit-activity)
[![License: MIT](https://img.shields.io/github/license/colinaaa/setup-riscv-gnu-toolchain)](https://github.com/colinaaa/setup-riscv-gnu-toolchain/blob/master/LICENSE)

> Github action to setup riscv toolchain

Great thanks to bootlin for providing prebuilt toolchain.

### 🏠 [Homepage](https://toolchains.bootlin.com/)

## Usage

```yml
- uses: colinaaa/setup-riscv-gnu-toolchain@latest
  with:
    # optional, see: https://toolchains.bootlin.com/releases_riscv64.html
    release-date: 2020.08-1
```

Then all `riscv-linux-gnu-*` are in your `PATH`.

## Install

```sh
yarn install
```

## Run tests

```sh
yarn run test
```

## Author

👤 **Colin Wang**

- Website: about.outsiders.top
- Github: [@colinaaa](https://github.com/colinaaa)

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2020 [Colin Wang](https://github.com/colinaaa).

This project is [MIT](https://github.com/colinaaa/setup-riscv-gnu-toolchain/blob/master/LICENSE) licensed.

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
