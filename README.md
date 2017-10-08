# react-setup
> React Web app.

## Table of Contents

- [Install](#install)
  - [System Dependencies](#system-dependencies)
  - [Project Dependencies](#project-dependencies)
- [Usage](#usage)
  - [Running the web app](#running-the-web-app)
  - [Running the native mobile app](#running-the-native-mobile-app)
- [Developer Guide](#developer-guide)
  - [Linting and Code Formatting Conventions](#linting-and-code-formatting-conventions)
  - [Package Management](#package-management)
  - [Inspecting and Debugging](#inspecting-and-debugging)
  - [Jira](#jira)
- [Developer Tools](#developer-tools)
  - [Storybook](#storybook)
  - [Blueprints](#blueprints)
  - [Build Tools](#build-tools)


## Install


## Usage


### Running the web app
For Web the following commands should create a bundle where the corresponding .env.[environment] file will be taken into consideration:

```bash
yarn web #defaults to dev
ENV=dev yarn web
ENV=prod yarn web
ENV=uat yarn web
ENV=sit yarn web
```

### Webpack Dependency Statistics

To get insight from what you have built, you can add `WEBPACK_STATS` when running `yarn web` or `yarn web:build`. For example:


## Developer Guide


### Linting and Code Formatting Conventions

We use eslint for Javascript code format.

**Lint Manually**

```bash
yarn lint
```

**Fix Many Basic Lint Errors Auto-Magically**

```bash
yarn lintFix
```

**Lint Cache**

The [eslint cache](http://eslint.org/docs/user-guide/command-line-interface#caching) is enabled with the `--cache` flag, which reduces runtimes by 90% or more, by running only on changed files.

This is a great technique to accelerate local dev, especially with mandatory commit hooks. However, it should be disabled when running in CI, or when debugging a change to lint settings. For these cases, use `yarn lintNoCache`.

**Lint on Commit**

This is implemented automatically using [ghooks](https://github.com/gtramontina/ghooks). In general, commits should not be made without first fixing any lint errors.

**Bypass Lint**

If you have to bypass lint for a special commit that you will come back and clean (adding to a local feature branch, etc.) then you can bypass git hooks with adding `--no-verify` to your commit command. (This option is also available in SourceTree on the "Commit Options" that appears when you have a commit in progress.)


**Understanding Linting Errors**

Our lint config is based on [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb)


### Package Management

#### Yarn

We use Yarn instead of npm for javascript package management. Yarn is kinda like an enhanced version of npm. It’s ‘deterministic’, which means that it guarantees that no two people who install the same packages can get end up with a different state of their dependencies, no matter what order they’re installed in. It’s also blazing fast, and was created by Facebook. It’s now used by default in React-Native installations.
Read more, and get install docs at https://yarnpkg.com/en/docs/install#alternatives-tab

Yarn commands are similar to npm’s, but different. In some cases, they’re simpler and shorter. For instance `yarn add` replaces `npm install —save`.

**NOTES**:

* While it’s possible to install Yarn as just another package through npm, avoid this, which has all the usual problems of npm, including non-deterministic behavior. Ideally, Yarn is a standalone system binary, outside the npm context.

* When installing with homebrew, homebrew dumps a new instance of node on you as a dependency of Yarn, but you have the advantage that homebrew will keep Yarn up to date. Either just delete the excess node you don’t want, which seems to work well, or install Yarn using the basic `curl` script. But… you’ll need to handle updates manually, if you use the curl script.

* If you hit `EACCESS` permissions errors while using Yarn, which require to use `sudo`, try running this from project root to reset your permissions: `sudo chown -R $(whoami) node_modules`

#### No rnpm, please

Please, do *not* install rnpm to support react-native packages. rnpm is now [included in react-native core](https://github.com/rnpm/rnpm) and you link native packages through the react-native-cli.


### Inspecting and Debugging

#### IDEs

If you run the app from XCode or Android Studio, their built-in consoles should show output from the Javascript `console`.

Note, some other IDEs like WebStorm and Nuclide also have remote-debug support for R-N. See their docs for info.

#### Chrome Debugger

However, you can do MUCH better with a focused Javascript debugger, like Chrome's. (Also, most of the time, it's possible to avoid opening the heavy platform-specific IDEs.)
To use:

* with the emulator front-most, press `<cmd-d>` (`<ctrl-d>` on Windows)
* select "Debug JS Remotely"
* (This should launch a new Chrome tab titled "React Native Debugger")
* Once your Chrome debugger tab is open, open the dev-tools
* THEN, note an important option in the Chrome debugger:
  * If you want to, you can go to the `Sources` tab and click on the "Pause on Exceptions" button, so that you can inspect the stack, variables, and detailed error message, whenever an exception is thrown.
  * You may also want to experiment with "Pause on Caught Exceptions", right below it.
  * Note, however, that pausing on exceptions in the debugger means you may not get the same rich error display in the R-N itself. If you have a particularly challenging error, you may want to toggle "Pause on Exceptions" on and off, so you can get the best of both tools.

**NOTE**: sometimes the debugger connection gets 'stuck', and interferes with your ability to re-launch a new emulator/packager session. If this happens, close all debugger tabs, and manually reset the debugger from the emulator by pressing `<ctrl-d>` and then selecting "Stop Remote JS Debugging".

#### Reactotron

[Reactotron](https://github.com/infinitered/reactotron) is a desktop application that reproduces the functionality of the Redux Dev Tools. Hooks for it are already installed. Just [download and install the app](https://github.com/infinitered/reactotron).

Config for Reactotron is in `/Config`.


## Developer Tools

### Storybook

This project uses [storybook](https://getstorybook.io/docs) to visualize custom UI components created by developers. This has two important uses:

* it provides us with a 'visual styleguide' so we can easily learn which reusable components are available and how to use them
* it allows us to easily develop react/react-native components in isolation from the rest of the system (just be sure to test the integration with the system before you PR)

To use, simply create a javascript file that ends in `.story.js`, which will allow webpack to find and load it. In your story file, export a block that looks like this:

```
export default storiesOf('DrawerButton', module)
  .add('basic version', () => (
    <View style={{}}>
      <DrawerButton {...props} />
    </View>
  ));
```

A pre-wired story file will be included by default with all new components you scaffold with redux cli (`redux generate dumb`).

You can optionally namespace/organize your stories with dot-notation: `dashboard.widgets.balance`.

#### Story Hierarchy

Hierarchy is introduced from Storybook 3.2.x, for better components management.

To use it, simply add `/` when defining stories name, like this:

```javascript
// your default branch
export default storiesOf('MyComponent/default', module)
  .add('default version 1', () => <MyComponent />)

export default storiesOf('MyComponent/fancyLook', module)
  .add('fancy look version 1', () => <MyComponent />)
```

*_Note_*: _Please use different subcases' name for each story_

```javascript
// This will not work
export default storiesOf('MyComponent/default', module)
  .add('default', () => <MyComponent {...props1}/>)
  .add('default', () => <MyComponent {...props2}/>)
```


#### Storybook Styles

Please do not include storybook's styles in a component's main `*.styles.js` file, as any styles in that file will be bundled in production code when we build with webpack. Instead, please create a separate file for any styles required by the story, or even keep them inside the story file.

#### Storybook Options

Learn more about the many options you have for [writing stories](https://getstorybook.io/docs/react-storybook/basics/writing-stories) and decorating them with convenience methods, formatting, etc. You can build helper decorators for stories much the same way you would for your tests.

If you want to inspect the actions generated by your event-handlers, be sure to use the [Storybook Addon Actions](https://github.com/storybooks/storybook-addon-actions).


#### Running storybook for web

1. `yarn storybook:web`
2. Open your browser and access [localhost:7000](http://localhost:7000).
3. Use the component navigator on the left to explore the components and their various options/configurations.
4. When developing, please make sure to create multiple instances in the storybook file that represent all major variations of the props/configuration for your component

#### Running storybook on simulator or emulator

For React-Native, the principles are the same, but we have a split view: the component navigator will run in the browser window, but the _components will render in the emulator_.

Before you run storybook for native:
 - make sure the react-native packager is not running on your terminal
 - (you may also want to close the emulator, but it's optional)

Then:

1. `yarn storybook:mobile`
2. `react-native run-<ios/android>`
3. open your browser and access [localhost:7001](http://localhost:7001)
4. Use the browser to select/navigate components, and the emulator to view/interact with them


#### Building static storybook

`yarn build-storybook`




### Blueprints

You can generate a new dumb component / HOC Component (that has access to state)/ redux duck (actions/reducers) by using [redux-cli](https://github.com/SpencerCDixon/redux-cli)

```bash
npm install -g redux-cli # install redux-cli globally
```

Running one of the following commands from the root will spawn a new set of files in the appropriate folder structure using best practice boilerplate for you to get going.

Generate a dumb button component, style, story and test files:

```bash
redux generate dumb Button
```

Generate a smart container, style and test files:

```bash
redux generate container PersonalForm
```


Generate a redux duck, and test files

```bash
redux generate duck Authentication
```
**Note:** This reducer will need to be imported in `app/redux/Reducers/index.js`



## References


## App Architecture & This README

