# 无代码平台

无代码平台 demo

## 规范配置

平时工作都比较少的去配置项目规范，毕竟项目规范配置完成之后可能都是照搬模版，所以这里把一些常用的规范配置都放在这里，方便以后使用，本项目会按照企业级规范进行配置，可能大部分小公司都没有做到这么严格的项目规范（没有说小公司不好的意思，毕竟规范这东西还是要结合场景，无脑添加反而影响开发效率），本项目也是对所有规范配置流程做一个梳理，配置规范可以参考本项目的配置流程，也不用手忙脚乱打开一个个规范库的文档一个个查看了，详情可以参考[文档](./doc/项目规范配置.md)

使用到的规范库

- [stylelint](https://stylelint.io/) 样式规范
- [cspell](https://cspell.org/) 拼写规范
- [eslint](https://eslint.org/) 代码规范
- [prettier](https://prettier.io/) 代码格式化
- [husky](https://typicode.github.io/husky/#/) git钩子
- [commitlint](https://commitlint.js.org/#/) git提交规范
- [lint-staged](https://github.com/okonet/lint-staged) git提交前检查
- [cz-git](https://cz-git.qbb.sh/zh/) git提交交互式命令行工具

### eslint

- [@vue/eslint-config-prettier](https://github.com/vuejs/eslint-config-prettier)
- [@vue/eslint-config-typescript](https://github.com/vuejs/eslint-config-typescript)
- [@rushstack/eslint-patch](https://github.com/microsoft/rushstack)
