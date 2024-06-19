# [Backstage Demo](https://demo.backstage.io)

[![Link to backstage-demo in Backstage Demo, Component: backstage-demo](https://demo.backstage.io/api/badges/entity/default/component/backstage-demo/badge/pingback 'Link to backstage-demo in Backstage Demo')](https://demo.backstage.io/catalog/default/component/backstage-demo) [![Entity docs badge, docs: backstage-demo](https://demo.backstage.io/api/badges/entity/default/component/backstage-demo/badge/docs 'Entity docs badge')](https://demo.backstage.io/catalog/default/component/backstage-demo/docs)

本仓库是部署到 [demo.backstage.io](https://demo.backstage.io) 的演示 [Backstage](https://backstage.io/) 实例的源代码。

有关构建你自己的 Backstage 实例的说明，请参阅文档的[入门部分]((https://backstage.io/docs/getting-started/))。

## 参考项目

本演示和版本库的主旨是尽可能地展示 Backstage，让你能够通过运行 `npx @backstage/create-app@latest` 来创建一个新的 Backstage 实例。
除此以外，我们还做了一些额外的改动，以帮助更清晰地展示 Backstage 的某些功能。
同时，它也是一个参考项目，可以帮助我们了解如何更好地保持更新，并展示[新后端系统](https://backstage.io/docs/backend-system/)等最新架构模式的工作示例。

## 核心特性

以下是 Backstage 的核心功能和演示示例链接。

- [软件目录](https://demo.backstage.io/catalog)
- [软件模板](https://demo.backstage.io/create)
- [搜索](https://demo.backstage.io/search)
- [TechDocs](https://demo.backstage.io/docs)
- [Kubernetes 插件](https://demo.backstage.io/catalog/default/component/dice-roller)

> 注： Kubernetes 插件确实需要安装，而且被认为是核心功能。

## 附加插件

添加以下插件是为了帮助更好地说明 Backstage 功能并突出添加插件的功能。

- 勋章：请参阅本 `README` 文件顶部的勋章
- [成本洞察](https://demo.backstage.io/cost-insights)
- [浏览](https://demo.backstage.io/explore)
- [GitHub Actions](https://demo.backstage.io/catalog/default/component/backstage-demo/ci-cd)
- [GraphiQL](https://demo.backstage.io/graphiql)
- [首页](https://demo.backstage.io/home)
- [技术雷达](https://demo.backstage.io/tech-radar)
- [待办](https://demo.backstage.io/catalog/default/component/backstage-demo/todos)

## 代码定制

我们还进行了一些代码定制，下文将详细介绍。

### 自定义主题

We have created a custom theme called Aperture to help showcase what some of the possibilities are that a custom theme can allow and to have a working example.

> Note: This theme is just an example and not intended to be copied as is.

To view this theme in the Demo:

1. Go to the [Settings area](https://demo.backstage.io/settings)
2. In the Appearance card for the Theme click on "APERTURE"
3. The theme will automatically change, now you can explore the Demo to see how this theme looks

The Aperture custom theme code can be found in the [`aperture.ts`](https://github.com/backstage/demo/blob/master/packages/app/src/theme/aperture.ts) file.

More details on creating a custom theme can be found in the [Creating a Custom Theme](https://backstage.io/docs/getting-started/app-custom-theme#creating-a-custom-theme) documentation

### 首页插件

Beyond the installation of the Home plugin to get the most out of it you need to setup the initial code for it.

You can find the code in the [`HomePage.tsx`](https://github.com/backstage/demo/blob/master/packages/app/src/components/home/HomePage.tsx) file.

We have also setup the more advanced feature of the Home plugin that allows you to customize it more easily, the code for that in [`CustomizableHomePage.tsx`](https://github.com/backstage/demo/blob/master/packages/app/src/components/home/CustomizableHomePage.tsx)

To see the more advanced Home in the Demo site you will need to do the following:

1. Go to the [feature flags area](https://demo.backstage.io/settings/feature-flags)
2. Next click on the toggle labeled "customizable-home-page-preview"
3. Now refresh the page, feature flags are not reactive by design
4. Navigate to the Home by clicking on the "Home" icon in the sidebar
5. You should now see the more advanced Home, clicking on the "EDIT" button is a good place to start playing around with the features

More details on the Home plugin can be found in the [Backstage homepage - Setup and Customization](https://backstage.io/docs/getting-started/homepage) documentation.

### 搜索

The Search plugin has been expanded to include results from the Explore plugins Tools list. This has been done in two places:

1. Frontend changes are in the [`SearchPage.tsx`](https://github.com/backstage/demo/blob/master/packages/app/src/components/search/SearchPage.tsx) file
2. Backend changes are here the [`index.ts`](https://github.com/backstage/demo/blob/master/packages/backend/src/index.ts#L27) file

> Note: currently Search is setup on the frontend to include results from TechDocs but it is disabled in the backend due to a [bug that happens with an unusual setup](https://github.com/backstage/backstage/issues/23047) like the Demo site.

More information on adjusting search can be found in the [Customizing Search](https://backstage.io/docs/features/search/getting-started#customizing-search) documentation.

## 升级

This Demo site is kept in-sync with the weekly `next` release line as defined in the [Release Lines](https://backstage.io/docs/overview/versioning-policy#release-lines) documentation. Upgrading the Demo site has been automated so that a Pull Request with the latest changes is created the day after the weekly `next` release is published. This allows us to easily stay up to date!

The automation is done using a GitHub workflow but the concepts and most of its parts could easily be transferred to other CI/CD systems like Azure DevOps Pipelines, CircleCI, etc. The parts of this workflow can be found here:

- [Core workflow](https://github.com/backstage/demo/blob/master/.github/workflows/version-bump.yml)
- [Related scripts](https://github.com/backstage/demo/blob/master/scripts/set-release-name.js)

## 依赖升级

As Backstage uses packages for its various dependencies these will need to be kept up to date. We use [Renovate](https://github.com/renovatebot/renovate?tab=readme-ov-file#why-use-renovate) as it is incredibly helpful in keeping dependency versions up to date. Renovate will create Pull Requests for the various dependencies and all we need to to is review and merge them!

You can see our Renovate configuration in the [`renovate.json`](https://github.com/backstage/demo/blob/master/renovate.json) file and example [Pull Requests here](https://github.com/backstage/demo/pulls?q=is%3Aopen+is%3Apr+label%3Adependencies)

> Note: you may not see any Pull Request as we very much like to stay on top of them, clicking on the "Closed" option will let you see examples that have been merged in the past.

To learn how to get started with Renovate we recommend reading the [Installing and onboarding Renovate into repositories](https://docs.renovatebot.com/getting-started/installing-onboarding/) documentation.
