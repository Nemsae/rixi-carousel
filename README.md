# Rixi - Project Carousel

## App setup:
1. `$ npm run setup`
2. `$ npm start`

<sub><i>Client setup (HMR, build tools, etc.) with React Boilerplate at https://github.com/react-boilerplate/react-boilerplate</i></sub>

## Code Example:
```javascript
<HomeSection>
  <SectionH1><FormattedMessage {...messages.recommendHeader} /></SectionH1>
  <RixiCarousel
    data={this.props.recommendations}   //  data => an array of objects that will map to each card
    totalPages={4}   //  totalPages => an integer setting the number of pages (breadcrumbs)
    startPage={1}   //  startPage => an integer setting the default page to load.
    amt={4}   //  amt => an integer setting the number of cards per page
    onPageChange={this.props.fetchRecommendationsPage}   //  onPageChange => a func that loads the next data set
    onItemChange={this.props.changeRateRecommendation}   //  onItemChange => a func that interacts with each card (ex. rating a card)
    mainComponent={CardTop}   //  mainComponent => pass in react component for main content
    subComponent={CardBottom}   //  subComponent => pass in react component for sub/secondary content
  />
</HomeSection>
```

## Libraries used:
1. Reselect - `features: makeSelectFeatures(),`
2. Redux Saga - ```export default function* sensorsData() {
  yield takeLatest(GET_RECOMMENDATIONS, loadRecommendations); }```
3. Styled Components - ```const H1 = styled.h1`
  font-size: 34px;
  font-weight: 400;
  margin-bottom: 0.25em;
  `;```

<sub><i>Keywords: React.js, Redux, redux-saga, `styled-components`, Webpack, Hot Reloading, Babel, react-router</i></sub>

## Folder Structure/Questions:
1. internals - webpack config and React-Boilerplate tools for development
2. Why use PureComponent vs Stateless Function vs Component?

## Project Intermediate Milestones:
~~1. RATE_RECOMMENDATION, remove and fetch a new item IN PLACE for data []~~
~~2. Abstract out Card Components (CardTop and CardBottom) to <CarouselPage />, feed as a prop to RixiCarousel.~~
1. Build a (default) error component, supply as prop to `<RixiCarousel />`
1. Cards with no image supplied, should display a default image
1. replace google search with youtube search
1. CSS Animations/Transitions
1. Wrap

## Project Milestones:
1. Deploy live sandbox environment
1. 100% Test Coverage
2. Build script to scrape `//  TODO:` comments and build list into README.md  `(app/container/CarouselPage) => "Build case to render error component" `

## TODOS:

> Update dependencies, config files, and maybe JavaScript files that require babel packages directly

- [x] Works on Node >= 4 (anything lower isn't supported in v7) ([#16](https://github.com/babel/babel-upgrade/pull/16))
- [x] Run npm/yarn after updating dependencies (use `--install`) ([#18](https://github.com/babel/babel-upgrade/pull/18))
- [x] Update `package.json`: `dependencies` and `devDependencies` to the "latest supported" version.
  - [x] all package renames
    - [x] `babel-loader` for webpack >=1 ([#34](https://github.com/babel/babel-upgrade/pull/34))
    - [x] `rollup-plugin-babel` ([#36](https://github.com/babel/babel-upgrade/pull/36))
  - [x] Upgrading the same package to the latest version
  - [x] add `@babel/core` peerDep ([7c34cd](https://github.com/babel/babel-upgrade/commit/7c34cdf318ecbb8a916e7a8ee5c2cfbad7d8d8d0))
