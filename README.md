# FFXIV Collect Imitation

![ffxivcollect](https://user-images.githubusercontent.com/60881246/235289715-0844d0b7-f4ce-440c-9716-0765134e7002.png)

### How to use in a local environment
In the project directory (in a terminal), run:
- npm install  (to install all the dependencies used in this project)
- npm start 
- wait for your browser to open the app in [http://localhost:3000/](http://localhost:3000/)

### Description
This project is an imitation of the official web [FFXIV Collect](https://ffxivcollect.com/). This project purpose is to apply the knowledge acquired of React and its environment in an area of one of my favourites hobbies: FFXIV. The owner of FFXIV Collect has an API, open to developers, to obtain almost all same data, related to collections, that is used at FFXIV Collect.

### What you can do

In this project you can do the following things:
- Navigate from "Achievements" to "Survey Records" (Side Menu)
- Filter every list using the filter button or just searching collectables by name
- Navigate to a specific collectable clicking the name from the list / icon on the case of Survey Records
- Mark a collectable as owned using the checkbox available on every list

### Technologies

 - [React JS](https://react.dev/)
 - [Redux Toolkit](https://redux-toolkit.js.org/)
 - [React Router](https://reactrouter.com/en/main/)
 - [StyledComponents](https://styled-components.com/)

### To do / wish list
- Improve the way of store the data in order to avoid unnecessary calls to the api
- Implement Local Storage(or a similar method) to persist data
- Improve the css and make the app responsive
- Simulate "users" with a login to give a purpose to the fact that you can check things as owned

### Credits

Credits to the owner of FFXIV Collect known as [Raelys Skyborn](https://github.com/mattantonelli), the person responsible of some of the popular tools about FFXIV
