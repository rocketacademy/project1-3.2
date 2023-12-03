# Rocket Academy Coding Bootcamp: Project 1 - Frontend App

https://bc.rocketacademy.co/1-frontend/1.p-frontend-app

## Available Scripts

This project was created using with Vitejs. In the project directory, please run the following commands:

`bun install` or `npm install`

`bunx vite`/`bun run dev` or `npx vite`/`npm run dev`

The second command will run the app
To see the rendered output please open http://localhost:5173/project1-3.2/ in the browser of your choice.

The page will reload when you make changes.
You may also see any lint errors in the console.

## User Story

User wants to keep up to date with their business assets and keep an eye out for foreign currency prices to hedge against. The app provides a quick way to look up prices of assets in the equity, foreign exchange and cryptocurrency markets.

By default, users will be presented with 3 cards of information. Users are given the option to add and remove these cards, with a maximum of 6 and a minimum of 2. There will be an input for users to enter the ticker of their desired information, and the query button will map the ticker to its corresponding card (i.e. the 1st button goes to 1st card, 2nd button goes to 2nd card etc.). Information displayed is static and do not update dynamically in real-time, though users are given an option to refresh their cards if needed.

Information is pulled from https://polygon.io/ API. There is a rate limit imposed as I am on the free plan.

## Errors

`Status Code 429`: Rate limited. Wait a while and try again

`Status code 404`: Invalid input, type in a valid ticker symbol
