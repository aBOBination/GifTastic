# GifTastic

This page uses Javascript and JQuery for accessing the Giphy API to display 10 random gifs for the topic selected.  The Javascript is organized as an Object with 2 methods under it.

---

## `Global Variables`

`topics`

> This varibale is a list and holds the initial topics that show up when the page is loaded.  Any new topics added via the form also get pushed to this variable.  This is so when a user adds more topics the logic can `check for duplicate topics` and prevents it from being added to the page if the button already exists.

---

## `Methods`

`addButton`

> This method adds a buttons to the page on load and when a user submits a new topic for the page.

`displayGifs`

> This method displays all 10 gifs when a user clicks on the button.  This is where it reaches out to the Giphy API and does a serach for 10 giphys related to the topic the button displays.

---

## `onClick Events`

`buttons`

> There are 2 on click events, submitting a new button and clicking a button topic.  Submitting a new button calls the `addButton` method and adds it the page.  Clicking a button topic will call the `displayGifs` method and display gifs to the page for that topic.  Antoher onClick event happens when you click the images themselves.  They will animate the gif.  When they load they are static.  When you click they will play the gif.

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
