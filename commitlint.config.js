module.exports = {
  extends: ['@commitlint/config-conventional'], // extends can be nested
  rules: {
    'type-enum': [2, 'always', ['feat', 'fix', 'docs']]
  },
  prompt: {
    settings: {},
    // 配置显示信息
    messages: {
      type: '选择你要提交的类型 :',
      scope: '选择一个提交范围（可选）:',
      customScope: '请输入自定义的提交范围 :',
      subject: '填写简短精炼的变更描述 :\n',
      body: '填写更加详细的变更描述（可选）。使用 "|" 换行 :\n',
      breaking: '列举非兼容性重大的变更（可选）。使用 "|" 换行 :\n',
      footerPrefixesSelect: '选择关联issue前缀（可选）:',
      customFooterPrefix: '输入自定义issue前缀 :',
      footer: '列举关联issue (可选) 例如: #31, #I3244 :\n',
      confirmCommit: '是否提交或修改commit ?'
    },
    types: [
      { value: 'feat', name: 'feat:✨ 新增功能', emoji: '✨ ' },
      { value: 'fix', name: 'fix:🐛 修复缺陷', emoji: '🐛 ' },
      { value: 'docs', name: 'docs:📝 文档更新', emoji: '📝 ' },
      { value: 'style', name: 'style:💄 代码格式', emoji: '💄 ' },
      { value: 'refactor', name: 'refactor:📦️ 代码重构', emoji: '📦️ ' },
      { value: 'perf', name: 'perf:🚀 性能提升', emoji: '🚀 ' },
      { value: 'test', name: 'test:🚨 测试相关', emoji: '🚨 ' },
      { value: 'build', name: 'build:🛠 构建相关', emoji: '🛠 ' },
      { value: 'ci', name: 'ci:🎡 持续集成', emoji: '🎡 ' },
      { value: 'chore', name: 'chore:🔨 其他修改', emoji: '🔨 ' },
      { value: 'revert', name: 'revert: 回退代码', emoji: ':rewind:' }
    ],
    useEmoji: true,
    confirmColorize: true,
    emojiAlign: 'center'
  }
}
