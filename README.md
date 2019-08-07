# ![](design/header.svg)
Inspired by the [Pomodoro Technique](https://en.wikipedia.org/wiki/Pomodoro_Technique), this nice little app is a countdown timer that follows my traditional work model: 50 minutes of focused work and 10 minute break.

## Built with
* [Progressive Web Apps](https://developers.google.com/web/progressive-web-apps/) - A type of mobile app delivered through the web.
* [Jest](https://jestjs.io/) - A JavaScript Testing Framework with a focus on simplicity.
* [Webpack](https://webpack.js.org/) - A JavaScript module bundler.
* [Babel](https://babeljs.io/) - A JavaScript compiler that is mainly used to convert ES6+ code into a backwards compatible version of JavaScript.

## Architecture
Based on the principles of Clean Architecture, the app has been divided into 3 layers: Main, UI, and Domain.

![](design/architecture.svg)

* Main is responsible for starting the app. It only depends on the UI layer.
* UI contains all the presentation rules. It only depends on the Domain layer.
* Domain contains all the business rules. It doesn't depend on any layer.

## Principles
* [Clean Code](https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882)
* [Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)
* [Minimalism](https://visme.co/blog/minimalist-graphic-design/)
* [Getting Real](https://basecamp.com/books/getting-real)

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