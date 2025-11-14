![Banner](./documentation/disney+Header.png)

# About Disney+ Finder

Disney+ Finder is a react app built using [Disney Plus Top Movies and TV Shows API](https://www.allthingsdev.co/apimarketplace/endpoints/disney-plus-top-movies-and-tv-shows-api-by-apirobots/6763fb9e33e2ef7a2c21d7b4), which is an API that provides instant access to a curated list of metadata from a selection of popular titles from Disney+. Making it easier to find the best possible TV Shows and Movies.

### Built With
[![Javascript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)](https://www.javascript.com/)
[![NodeJS](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/en)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![ChartJS](https://img.shields.io/badge/Chart.js-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white)](https://www.chartjs.org/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)


## How To Install

To get started, clone the repo:
```
git clone https://github.com/GabyNor05/Formative-One-Disney_Finder.git
```

Install all the dependencies using npm:
```
npm install
```

Run the app:
```
npm start
```

## Features

| Home Page | Compare Page | Timeline Page |
| :--- | :--- | :--- |
| API overview details overview | Compare Title Details | N/A |
| Character Images | Compare Title IMBD Score|  |
| Thumbnails | Compare Title TMBD Score | |
|  | Compare Title TMBD Popularity |  |

## The Idea

The idea was to create a website that you could use to determine which movie or TV show you would like to watch based on their popularity, TMBD and IMBD scores that is available on Disney+.


## Development Process

### Highlights
Highlights of my page are the router navigation bar, doughnut chart created with Chart.js, character images and my dropdown for chosing a title.

### Challenges
A challenge I came across was figuring out [Disney Plus Top Movies and TV Shows API](https://www.allthingsdev.co/apimarketplace/endpoints/disney-plus-top-movies-and-tv-shows-api-by-apirobots/6763fb9e33e2ef7a2c21d7b4) because the endpoint provided by the creator is get random and the get list endpoint did not have discriptive element names for me to call from. So I just removed the get random in the fetch URL link however the issue that still persists is that there are only 10 items in the array.

I was really challenged with the limited usage on the API I had to use 3 different emails, it means I called the API at least 202 times, this led to a delay in developement as i reached out to the creator but did not get an answer.

I struggled with the visiblity of the text in the dropdown, as when a title was selected the font colour would change to black and against the background of the page it is not legible.

Another thing I battled the alert box that pops up on the compare page and how to create it.

A minor challenge I experienced was what data to use that can be visibly distictive in the doughnut chart.

## Future Implementations

* Login 
* A larger database
* Thumbnails that take you to the IMBD page
* A Timeline page
* A Discover page
* A Single View page

