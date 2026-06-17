[ProjectProposal] @John Alexis Guerra Gomez

Project 2 Name: Refrigerator Saver
Team Members: Hung, Logan

Description:
Refrigerator Saver is a full stack recipe management web app that helps students find meals based on ingredients they already have in their fridge. Users can search and filter recipes by keyword or ingredient, while admins can create, edit, and delete recipes through an inline card menu and a structured form — all backed by a Node/Express/MongoDB stack.

User Personas:
Kevin, the busy student — Kevin is a Northeastern student juggling classes and part-time work. His fridge is full of random leftover ingredients, and he needs to find a quick, practical meal he can cook in under 20 minutes before heading to his next class — without having to Google through endless recipe blogs.

Chef Elena, the site admin — Elena is a web administrator responsible for maintaining the quality of the shared recipe database. When she spots a recipe with incorrect ingredients, wrong cooking time, or missing steps, she needs to be able to jump in and fix it immediately — or remove it entirely — without any technical friction.

User Stories:
- As Kevin, I want to search recipes by keyword so I can quickly find something relevant.
- As Kevin, I want to filter recipes by ingredients I already have so I don't need to buy anything extra.
- As Elena, I want to click a recipe card's menu to edit or delete it so I can fix errors right away.
- As Elena, I want to fill out the "+ New Recipe" form to add a new recipe with ingredients and steps so the database stays up to date.

Work Distribution
Logan — Search & filter feature: keyword search bar and ingredient chip filtering that fetches and renders matching recipe cards from MongoDB in real-time without a page refresh. Includes all associated frontend and backend routes.

Hung — Recipe management feature: three-dot menu on each recipe card exposing Edit and Delete actions, plus the create/edit recipe form that writes to MongoDB. Includes all associated frontend and backend routes.

Each partner owns their feature end-to-end. Either member can finish and demo their slice independently regardless of the other partner's progress.

Tech Stack: Vanilla JS (ES6 Modules), HTML5, CSS, Node.js + Express, MongoDB (Native Driver), Fetch API