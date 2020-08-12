---
path: pagination-in-vanilla-javascript
date: 2020-08-03T15:18:44.764Z
title: Pagination in Vanilla JavaScript
description: Let's paginate using only vanilla JavaScript!
---
Welcome back to Here Codes Nothing! Today we're going to work through pagination using only vanilla JavaScript. What fun!

This exercise assumes a few things:

1. Your data set is in an array of which you know the length (e.g., you pinged an API and got back a results array containing 100 objects)
2. You know how many results you want to show per page.
3. You have pagination HTML elements already coded that include the following:

   1. Previous Button
   2. Current Page Number
   3. Total Page Number
   4. Next Button

For this example we'll work with an array of a hundred items and show 10 items per page.

The first thing we want to do is identify the different components that will work together to allow us to paginate our array. They are:

1. A pagination component that contains a function to update the pagination UI when buttons are clicked.
2. A list component that renders the updated pagination UI when the pagination component function is called.
3. Finally, a page array component that splits the results into the appropriate slices based on the current page value.

<hr style="margin: 50px 25%;" />

The first step is to start filling out our paging component. Create a paging-component.js file and begin setting up the variables we'll need.

```javascript
const previousButton = document.getElementById('previous');
const nextButton = document.getElementById('next');
const currentPage = document.getElementById('current-page');
const totalPages = document.getElementById('total-pages');
const PER_PAGE = 10;

let currentPageNumber = 1;
previousButton.disabled = currentPageNumber === 1;
currentPage.textContent = currentPageNumber;
```

Here we're accessing the DOM nodes for the UI elements we already have coded (Previous Button, Next Button, Current Page, and Total Pages), setting a PER_PAGE const of 10 to restrict the number of items we'll show at a time, initializing a *currentPageNumber* let of 1, disabling the *previousButton* if the *currentPageNumber* is 1, and setting the text of the *currentPage* node to the *currentPageNumber*.

Next, we want to export our component's main function, *loadPaging()*. *loadPaging* will take an argument we can call *totalItems*.

```javascript
export default function loadPaging(totalItems) {
   const totalPageCount = Math.ceil(totalItems / PER_PAGE);
   totalPages.textContent = totalPageCount;
}
```

Here we're taking the total number of items in the array and creating a *totalPageCount* variable by dividing the *totalItems* by our set *PER_PAGE* number. We can then set this number to be the text content of our *totalPages* DOM node.

Next we want to add some event listeners to our little button friends so the function knows to do something when they are clicked.

```javascript
nextButton.addEventListener('click', () => {
   currentPageNumber++;
}

previousButton.addEventListener('click', () => {
   currentPageNumber--;
}
```

This is a pretty straightforward increment/decrement functionality. If the *nextButton* is clicked the *currentPageNumber* goes up one. If the *previousButton* is clicked, the *currentPageNumber* goes down one.

But this doesn't do much to our UI yet since we don't yet have a function that updates our pagination UI when the currentPageNumber variables change. Let's make that now.

```javascript
function updatePaging() {
   currentPage.textContent = currentPageNumber;
   const pagingOptions = {
        currentPageNumber: currentPageNumber,
        perPage: PER_PAGE
   };
   callback(pagingOptions);
   nextButton.disabled = currentPageNumber === totalPageCount;
   previousButton.disabled = currentPageNumber === 1;
} 
```

So, what's going on here? Well, the first thing we're doing is updating the text content of our *currentPage* node with the *currentPageNumber*. Next, we're creating an object with the *currentPageNumber* and *perPage* properties that we'll use in the future as a callback argument. Finally, we need some logic to disable the *previousButton* and *nextButton* if the *currentPageNumber* is 1 or the *totalPageCount*. This ensures that the page UI won't go on to infinity when the *nextButton* is pressed nor start getting into negative numbers when the *previousButton* is pressed.

The final thing to do with this *loadPaging* function is to pass it the callback that we will use in the future and call the newly-created *updatePaging* function where we want the page UI to update.

The final code will look like this:

```javascript
const previousButton = document.getElementById('previous');
const nextButton = document.getElementById('next');
const currentPage = document.getElementById('current-page');
const totalPages = document.getElementById('total-pages');
const PER_PAGE = 10;

let currentPageNumber = 1;
previousButton.disabled = currentPageNumber === 1;
currentPage.textContent = currentPageNumber;

export default function loadPaging(totalItems, callback) {
   const totalPageCount = Math.ceil(totalItems / PER_PAGE);
   totalPages.textContent = totalPageCount;

   function updatePaging() {
      currentPage.textContent = currentPageNumber;
      const pagingOptions = {
           currentPageNumber: currentPageNumber,
           perPage: PER_PAGE
      };
      callback(pagingOptions);
      nextButton.disabled = currentPageNumber === totalPageCount;
      previousButton.disabled = currentPageNumber === 1;
   } 

   updatePaging();

   nextButton.addEventListener('click', () => {
      currentPageNumber++;
      updatePaging();
   });

   previousButton.addEventListener('click', () => {
      currentPageNumber--;
      updatePaging();
   });
}
```

Nice job! We now have a pretty cool little pagination component that loads pages and updates them when buttons are pressed. But how do we display the pages? Why, that's a job for our list component!

To start, create a list-component.js file and write a function that creates a template string of a list item.

```javascript
function createLi(item) {
   const template = document.createElement('template');
   const html = `
   <li>
      <h2>${item.title}</h2>
      <img src="${item.img_url}" >
      <p>${item.description}</p>
   </li>`; 

   template.innerHTML = html;

   return template.content;
}
```

NOTE: *The above code uses interpolation to populate the html template string with content from the list item object. The properties in your array objects will probably be different or differently named, so make sure to change up the property keys you're referencing accordingly.*

Next, we need to create and export our main function that will create the list and append it to the correct DOM element.

```javascript
const list = document.getElementById('list');

export default function loadList(items) {
   while(items.children.length > 0) {
      items.lastElementChild.remove();
   }
   items.forEach(item => {
      const itemLi = createLi(item);
      list.appendChild(itemLi);
   });
}
```

Here we're grabbing the list node from the DOM, mapping through our array of items, creating a new list item for each item in the array by calling our *createLi* function, and appending that list item to the list node. The *while* loop removes the items on the page before adding the new list items to the node, which stops our paging from just having list items added on top of each other over and over again.

The final script should look something like this:

```javascript
function createLi(item) {
   const template = document.createElement('template');
   const html = `
   <li>
      <h2>${item.title}</h2>
      <img src="${item.img_url} >
      <p>${item.description}</p>
   </li>`; 

   template.innerHTML = html;

   return template.content;
}

const list = document.getElementById('list');

export default function loadList(items) {
   while(items.children.length > 0) {
      items.lastElementChild.remove();
   }
   items.forEach(item => {
      const itemLi = createLi(item);
      list.appendChild(itemLi);
   });
}
```

Only a couple more things to do before we can see our little pagination friend in action!

The next step is creating a function that splits our items array based on the currentPage variable. Remember when we made that mysterious callback and pagingOptions object in loadPaging? Well now is its time to shine!

Start by writing and exporting a default function that takes our array of items and the pagingOptions we want to use in the callback.



```javascript
export default function pageArraySplit(array, pagingOptions) {
   //splitting code to go here
}
```

Next, we want to set our currentPageNumber and perPage variables to the values in the pagingOptions object we passed into the function.



```javascript
const currentPageNumber = pagingOptions.currentPageNumber;
const perPage = pagingOptions.perPage;
```

Next, we will define a starting index and an ending index so the function knows where to slice the array.



```javascript
const startingIndex = (currentPageNumber - 1) * perPage;
const endingIndex = startingIndex + perPage;
```

Finally, we want to return a sliced array using the startingIndex and endingIndex variables as the slice index arguments.

```javascript
return array.slice(startingIndex, endingIndex);
```

The final function should look like this:



```javascript
export default function pageArraySplit(array, pagingOptions) {
   const currentPageNumber = pagingOptions.currentPageNumber;
   const perPage = pagingOptions.perPage;
   const startingIndex = (currentPageNumber - 1) * perPage;
   const endingIndex = startingIndex + perPage;

   return array.slice(startingIndex, endingIndex);
}
```

Ooooh, we're so close I can taste it! The last thing we need to do is update our index.js script to load the page and slice though the items array when the buttons are pushed.

First, let's import the right components.



```javascript
import itemsArray from '../data/items.js' //your data source will vary
import loadList from './list-component.js';
import loadPaging from './paging-component.js';
import pageArraySplit from './page-array.js';
```

*NOTE: Your itemsArray will be whatever data source you are trying to page through. If you're getting results from an API fetch, that variable should be the results body you've accessed from the returned JSON object.*

Finally, all we need to do is call the *loadPaging* function, pass it the length of the array we're paging through and our *pagingOptions*, create a new items array from the *pageArraySplit* function, and load the list using that new array.



```javascript
loadPaging(itemsArray.length, pagingOptions => {
   const newArray = pageArraySplit(itemsArray, pagingOptions);
   loadList(newArray);
}
```

Call this script on your index.html, feed it a data source, throw on some styles, and you've got some pretty sweet pagination going on! Here's an example of this code on a quick and dirty Pokemon Pokedex I created:

//gif goes here

Thanks for reading, friends! Until next time friends, *here codes nothing!*