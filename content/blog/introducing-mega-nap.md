---
path: mega-nap
date: 2019-08-08T02:44:36.527Z
title: Introducing Mega Nap
description: Yes this is a post about an amazing web application I helped create
  but first...
---
## I finished coding school!

<div style="display: flex; justify-content: center;"><img src="https://media.giphy.com/media/RDbZGZ3O0UmL6/source.gif" alt=""/></div>

I graduated on June 26 with a Certificate of Training in FullStack JavaScript from Alchemy Code Lab in beautiful downtown Portland, Oregon. The program kicked my ass and there were a few moments when I wasn't sure I was going to make it, but I worked really hard and came out of the program confident, capable, and full of great ideas and the programming chops to make them a reality. A huge thank you to Ryan for being a great instructor, Paige, Ryan, Easton, and Mack for being great TAs, Shannon for teaching us how to prepare for our job searches, and Marty and Megan for running such a great program.

//photo here

## Okay, on to the tech stuff.

I'm thrilled to present Mega Nap, the easiest way to make a full stack application without having to write a lick of backend code.

Mega Nap was my final project at Alchemy and was created by myself and four other students: Emily Baier (@[hellotaco](https://twitter.com/hellotaco)), Chris Piccaro ([@picassospaint](https://twitter.com/PiccasosPaint)), Marty Martinez ([@TDDandDragons](https://twitter.com/TDDandDragons)), and Tommy Tran ([@TranTTommy](https://twitter.com/TranTTommy)). We built it in just six days using an agile development process involving user stories, story point estimation, mini-sprints, and daily retrospectives. It was an incredibly balanced team and we worked really well together.

## What is Mega Nap?

//photo here

Mega Nap is a web application that allows frontend developers to create a database, design database models, populate their new database, and receive RESTful API endpoints they can ping to access their data. All of this is done via a few simple web forms, so they can quickly and easily create and use API endpoints without having to write any backend code.

The inspiration for this project came from working almost exclusively with the Pokemon API while learning to fetch from third party data sources in React/Redux applications. Now don't get me wrong, that API is legit. However, using the same data over in over our apps was getting boring, so we decided to create a tool frontend developers or those new to programming could use to make their own APIs. We brainstormed features, divvied up the work, and Mega Nap was born!

<hr style="margin: 50px 25%;" />

## The Client

The Mega Nap client is build with React/Redux and deployed to Netlify. We used Auth0 for user account creation and authentication and styled components in lieu of plain CSS for most of the styling. We ran unit and snapshot tests in Jest and used Redux promise middleware for handling promises in our API fetch services.

One particularly tricky part of the front end was the data entry form the user fills out after creating their database models. We needed a form with fields that were dynamically generated based on the name and type the user had just set as the key/value pairs in their database model. To accomplish this we had to create an array of fields by running Object.entries on the parsed model schema JSON object we got from our server after the model was created. We then passed this to our form component, which mapped through that array and created a list of fields by running each array item value through a switch and returning the correct JSX form label and input based on the field type. We then rendered the list of returned labels/inputs, allowing the user to immediately enter their data!

//photo here

<hr style="margin: 50px 25%;" />

## The Server

The Mega Nap server is built with Node.js and Express, is deployed to Heroku, and uses MongoDB for data storage. We used the jwks-rsa auth0 npm package to create middleware that ensures authentication and only needed to create two database models: the Database, which is used to create a new database for each of the user's models, and the Model, which has a schema value that holds all the user's inputted model values. We used Cloudinary for uploading and storing images, so our users can upload images and receive image URIs back in their API calls and we don't have to waste precious database space on storing their images.

We create each new model schema by using the reviver function, which takes the key/value pairs entered by our user as field names and input types, and then runs them through a switch and is passed as the second argument in creating a new Schema using Mongoose. We intentionally restricted the data types the user could use in their models to strings, numbers, and booleans, in order to keep our database super flat and not have to worry about models referencing or being dependent on other models. This allowed us to maintain a very flat, two-level database structure, with each user model being it's own collection and all data being added as single documents in their appropriate model collections.

//photo plus caption

//photo plus caption

<hr style="margin: 50px 25%;" />

## The Look and Feel

We knew from the beginning that we wanted the user experience to be as painless and fun as possible. To achieve this we chose a modern, earthy-yet-energetic color scheme, using the Color Marketing Group's prediction for 2020 Color of the Year, Neo Mint, as our primary color and combining it with cooler neutrals and one pop of vibrant pink for contrast.

//photo here - color palette

I designed the homepage based on wirefames we worked on together and using modified iconography found on FlatIcon.com, trying to create an aesthetic that spoke to the fun, simple experience we wanted the user to have on our site. Emily and I styled the site together, with me handling most of the static or global components and her working on form styling and transitions. This was the first time either of us had really used styled components, so we not only had to figure out our styling in just a few days, we also had to learn a new styling language to do it.

//phoot - old logo

<hr style="margin: 50px 25%;" />

## Next Steps

We're all really proud of this project and are planning on making improvements to it as our individual schedules allow. My contribution to the future of the site is to make a mobile version of it using React Native. I've played around a bit with React Native and am excited to dive deeper into the documentation and begin building our mobile version soon.

Thanks so much for reading about our humble little web app! I'm really proud of what we were able to accomplish in under a single work week and hope you have fun creating API endpoints using it.

Until next time friends, *here codes nothing!*