# carousel-project

## App setup:
1. `$ npm run setup`
2. `$ npm start`

<sub><i>Client setup (HMR, build tools, etc.) with React Boilerplate at https://github.com/react-boilerplate/react-boilerplate</i></sub>

## Code Example:
```
<HomeSection>
  <SectionH1><FormattedMessage {...messages.recommendHeader} /></SectionH1>
  <RixiCarousel
    data={this.props.recommendations}   //  data => an array of objects that will map to each card
    totalPages={4}   //  totalPages => an integer setting the number of pages (breadcrumbs)
    startPage={1}   //  startPage => an integer setting the default page to load.
    amt={4}   //  amt => an integer setting the number of cards per page
    onPageChange={this.props.fetchRecommendationsPage}   //  onPageChange => a func that loads the next data set
    onItemChange={this.props.changeRateRecommendation}   //  onItemChange => a func that interacts with each card (ex. rating a card)
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
1. RATE_RECOMMENDATION, remove and fetch a new item IN PLACE for data []
2. Abstract out Card Components (CardTop and CardBottom) to <HomePage />, feed as a prop to RixiCarousel.
3. Cards with no image supplied, should display a default image

## Project Milestones:
1. 100% Test Coverage
2. Build script to scrape `//  TODO:` comments and build list into README.md  `(app/container/HomePage) => "Build case to render error component" `

## Requirements:

Fetch items from the API And display them as a carousel. Follow the
design as closely as possible (wireframes are included in the project).

The carousel should show 4 items at a time, and display a total of 16
items. The user should be able to navigate the items using an arrow on
either side of the carousel.

If the item has a video link, please include a button that links to the
video and opens in a new window.

Each item should have a heart icon. If the user clicks on the heart, the user
rates the item.

Once an item is rated, that item should disappear. Make sure there are always 16
items on the page.

Please refrain from using a carousel library. Other than that, you can
use any libraries or frameworks you like for this assignment.

Icons can be found at http://google.github.io/material-design-icons/

A similar font can be found at https://fonts.google.com/specimen/Roboto

## To run the API server:

`npm install && npm run start`

to get items:

`GET localhost:3000/items/?p=${page}&amt=${amt}`

where `page` is an integer representing page number, and `amt` is an integer
representing the number of items per page.

to rate an item:

`POST localhost:3000/items/${id}/`

```
body: {
  rating: 'like' || null
}
```

** The server is reading and writing from disc memory, so there are a limited
number of items available, and it won't save your ratings once it restarts!


## Submitting the completed assignment

You can fork this github repository and complete it through your github
account. When you're finished with the assignment, send a link to your
forked repo to amelia@crossingminds.com. If you have any troubles or
questions at all along the way, you can reach out at the same email.

Be prepared to talk about the decisions you made later in the interview process.
