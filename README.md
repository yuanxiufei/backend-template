# Backend Template

## 项目介绍

这是一个基于 Vue3 + Element Plus 的后台管理系统模板，集成了用户管理、权限控制、国际化等常用功能。

## 技术栈

- Vue 3.4.21
- Vue Router 4.3.0
- Vuex 4.1.0
- Element Plus 2.9.7
- Vite 4.5.2
- Sass
- ESLint + Prettier

## 功能特性

- 用户管理与权限控制
- 国际化支持
- 主题定制
- 富文本编辑器
- Excel 导入导出
- Markdown 支持
- 全屏功能
- 标签页导航

## 安装使用

### 环境要求

- Node.js >= 14.0.0
- npm >= 6.0.0

### 安装依赖

```bash
npm install
```

### 开发环境运行

```bash
npm run dev
```

### 生产环境构建

```bash
npm run build
```

### 代码格式化

```bash
npm run format
```

### 代码检查

```bash
npm run lint
```

## 项目结构

```
├── src/                    # 源代码
│   ├── api/               # API接口
│   ├── assets/            # 静态资源
│   ├── components/        # 公共组件
│   ├── directives/        # 自定义指令
│   ├── i18n/              # 国际化
│   ├── layout/            # 布局组件
│   ├── router/            # 路由配置
│   ├── store/             # 状态管理
│   ├── styles/            # 全局样式
│   ├── utils/             # 工具函数
│   ├── views/             # 页面组件
│   ├── App.vue           # 根组件
│   └── main.js           # 入口文件
├── data/                  # 项目文档和资源
│   ├── nodes/            # 课程文档
│   │   ├── 图文课程/     # 图文课程资料
│   │   └── *.md          # 课程章节文档
│   └── resources/        # 项目资源
│       ├── assets/       # 资源文件
│       ├── lang/         # 语言文件
│       ├── svg/          # SVG图标
│       ├── views/        # 页面模板
│       └── 动态路由表/    # 路由配置
├── public/                # 静态资源
├── .env.*                 # 环境变量配置
├── .prettierrc           # Prettier配置文件，定义代码格式化规则
│   └── 配置项包括：单引号、无分号、行宽100字符、无尾随逗号等
├── .prettierignore       # Prettier忽略配置，指定不需要格式化的文件
│   └── 包含：dist、node_modules等构建和依赖目录
├── babel.config.js       # Babel配置文件，用于JavaScript代码转换
│   └── 配置了Vue3语法支持、ES6+转换、装饰器等特性
├── commitlint.config.js  # Git提交信息规范配置
│   └── 定义了feat、fix、docs等提交类型及验证规则
├── vite.config.js         # Vite配置
└── package.json           # 项目配置
```

## 开发指南

### 代码规范

本项目使用 ESLint + Prettier 进行代码规范和格式化，主要规范包括：

1. **ESLint 规则**

   - 使用标准的 Vue3 + JavaScript 规范
   - 生产环境禁用 console 和 debugger
   - 使用单引号
   - 不使用分号
   - 函数括号前不加空格
   - 最大行宽 100 字符

2. **Prettier 格式化规则**

   - 不使用分号
   - 使用单引号
   - 每行最大长度为 100
   - 不使用尾随逗号
   - 使用 2 个空格缩进
   - Vue 文件中的 script 和 style 标签保持缩进

3. **代码检查和格式化命令**

   ```bash
   # 运行 ESLint 检查
   npm run lint

   # ESLint 自动修复
   npm run lint:fix

   # Prettier 格式化
   npm run format

   # 检查代码格式是否符合 Prettier 规范
   npm run format:check
   ```

### Git 提交规范

本项目使用 commitlint 规范 Git 提交信息，提交类型必须是以下类型之一：

- feat: 新功能
- fix: 修复 bug
- docs: 文档注释
- style: 代码格式（不影响代码运行的变动）
- refactor: 重构（既不是新增功能，也不是修复 bug）
- perf: 性能优化
- test: 增加测试
- chore: 构建过程或辅助工具的变动
- revert: 回退
- build: 打包

**提交步骤：**

1. 暂存更改：

   ```bash
   git add .
   ```

2. 使用规范化提交命令：

   ```bash
   npm run commit
   ```

   > 注：该命令会引导你填写符合规范的提交信息

3. 提交前会自动运行以下检查：
   - ESLint 代码检查
   - Prettier 代码格式化
   - commitlint 提交信息检查

### 开发流程

1. 开发新功能时请先创建新分支
2. 确保代码符合项目规范
3. 使用 `npm run commit` 提交代码
4. 提交前确保所有检查都已通过

## 构建部署

### 环境变量配置

项目使用 `.env.*` 文件管理不同环境的配置：

- `.env.development`：开发环境配置

  ```
  ENV = 'development'
  VITE_BASE_API = '/api'  # 开发环境API地址
  ```

- `.env.production`：生产环境配置
  ```
  ENV = 'production'
  VITE_BASE_API = '/prod-api'  # 生产环境API地址
  ```

> 注：只有以 `VITE_` 为前缀的变量才会暴露给 Vite 处理

### 打包命令

1. 测试环境打包

   ```bash
   # 使用开发环境配置打包
   npm run build -- --mode development
   ```

2. 生产环境打包
   ```bash
   # 默认使用生产环境配置
   npm run build
   ```

### 打包优化

项目使用 Vite 作为构建工具，已配置以下优化：

- 生产环境自动开启代码压缩
- 自动分割第三方依赖包
- 静态资源处理和优化
- 按需加载和代码分割

### 部署

1. 执行相应环境的打包命令生成部署文件
2. 将 `dist` 目录下的文件部署到对应环境的服务器
3. 确保服务器配置了正确的 API 代理规则

## 浏览器支持

- Chrome >= 87
- Firefox >= 78
- Safari >= 13
- Edge >= 88

## 贡献指南

1. Fork 本仓库
2. 创建新的特性分支
3. 提交你的更改
4. 发起 Pull Request

## 许可证

[MIT License](LICENSE)
