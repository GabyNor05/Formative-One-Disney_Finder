
# Disney+ Finder

Disney Plus Top Movies and TV Shows API provides instant access to a curated list of metadata from a selection of popular titles from Disney+. Making it easier to find the best possible TV Shows and Movies.

Using the “tmbd_popularity”, “imbd_score”and "tmbd_score" properties, two  entries will be compared. This will help users keep up with popular watching trends.

#### API Link
https://www.allthingsdev.co/apimarketplace/endpoints/disney-plus-top-movies-and-tv-shows-api-by-apirobots/6763fb9e33e2ef7a2c21d7b4 


## API Reference

#### Get items

```http
  GET /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. 6FAC-eaaR5WSfcTMu00bphCr3-OE2MYui5KKzzjxEcZmoytg9Q |

#### Get title

```http
  GET /api/items/${title}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `title`   | `string` | **Required**. title at index |


