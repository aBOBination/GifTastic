# GifTastic

This page uses Javascript and JQuery for accessing the Giphy API to display 10 random gifs for the topic selected.  The Javascript is organized as an Object with 2 methods under it.

The two methods are:

`addButton`
> This method add the buttons to the page on load and when a user submits a new topic for the page.

`displayGifs`
> This method displays all 10 gifs when a user clicks on the button.  This is where it reaches out to the Giphy API and does a serach for 10 giphys related to the topic the button displays.

---

`Files Structure`

```
gifTastic
│
├──── assets
│    │
│    ├──── css
│    │      └──── style.css
│    │
│    └──── javascript
│           └──── app.js
│
|
├──── index.html
│
└──── README.md
```
