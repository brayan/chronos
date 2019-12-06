# ![](design/header.svg)
Inspired by the [Pomodoro Technique](https://en.wikipedia.org/wiki/Pomodoro_Technique), this nice little app is a countdown timer that follows my traditional work model ∙ 50 minutes of focused work and 10 minute break.

## Built with
* [Progressive Web Apps](https://developers.google.com/web/progressive-web-apps/) ∙ A mobile app delivered through the web.
* [Jest](https://jestjs.io/) ∙ A JavaScript Testing Framework with a focus on simplicity.
* [Webpack](https://webpack.js.org/) ∙ A JavaScript module bundler.
* [Babel](https://babeljs.io/) ∙ A JavaScript compiler that is mainly used to convert ES6+ code into a backwards compatible version of JavaScript.

## Architecture
Based on the principles of [Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html), the app has been divided into 3 layers: Main, UI, and Domain.

![](design/architecture.svg)

* Main is responsible for starting the app. It only depends on the UI layer.
* UI contains all the presentation rules. It only depends on the Domain layer.
* Domain contains all the business rules. It doesn't depend on any layer.

## Principles
* [Clean Code](https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882) ∙ A book on best practices for writing clean, testable, and maintainable code.
* [Clean Architecture](https://www.amazon.com/Clean-Architecture-Craftsmans-Software-Structure/dp/0134494164) ∙ Similar to Clean Code, Clean Architecture is a book on best practices for building clean, testable, and maintainable architectures.
* [Getting Real](https://basecamp.com/books/getting-real) ∙ A book packed with keep-it-simple insights, contrarian points of view, and unconventional approaches to software design.
* [Minimalism](https://visme.co/blog/minimalist-graphic-design/) ∙ The main idea in minimalist design is to say more by showing less. Minimalist design is clean and timeless. Only the absolutely necessary is included to get the message across.

## Screenshots
![](design/screenshots/01.png)
![](design/screenshots/02.png)
![](design/screenshots/03.png)
![](design/screenshots/04.png)

## Color palette
![](design/color-palette.svg)

## Icon design experiments
Designed with [Inkscape](https://inkscape.org/).


![](design/icon-design-experiments.svg)