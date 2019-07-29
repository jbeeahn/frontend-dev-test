# Issues Faced and what I've done

1. CRA was too outdated -> used npm-check-updates to update all the updated packages

# Things that I wanted to do but I didn't

1. Using one of the experimental syntax 'exportNamespaceFrom' with @babel/plugin-proposal-export-namespace-from. In order to do this, I had to eject but that'll bring too much hassels so I decided not to. (I always use this syntax in pretty much all of my react projects in current company)

2. Using navigation_items.js to populate consistent action buttons. The detailed explanation about why I didn't do this is written as a comment in the actual file. This is very useful when there are multiple NavLink with same structure, minute difference in style.

3. Implementing timer. Originally I wanted to create a timer, 15 seconds per turn, in order to speed up the game play. However, it wasn't really necessary since TicTacToe itself is very simple and short game.

4. Making the users to choose X or O. I believe in this simple game, keeping the player 1 to go first doesn't really hurt the users.

# Things that I want to do differently, if I had tons of time

1. Grid system. My current implementation is using single div as a grid and assigning different background image for hovering effect and grid selection. This is simple and straightforward but if I want to add a layer of linear gradient or a layer with opacity on top of the X or O marked grid, it is impossible to achieve it with the single div grid. I tried to create a inner div as a hovering effect and grid selection, but that caused overly complicated situation with inconsistent behavior. Therefore, by considering the cost vs value relation, I decided not to pursue this since spending extra hours won't bring much value at the end.

2. Animation for each transition. If the grid system was implemented as double div grid system, I could have use transition effect to render different color layer as well as the line. Also there are tons of places where I could apply animations (ex. credit entry rendering, modal rendering, grid selection rendering etc). However, I believed that this was not valuable enough to spend extra day to achieve.

# Frontend Development Test

Hi !

First of all. we want to take the time to thank you for doing our small in house react test and maybe work in our team eventually :)! One of the goal of this test is to have an overview of your technical and creative skills.

This test is a Tic Tac Toe game. You’ll have to integrate the different application screens and follow the requirements to implement the logic.

You will find in this repository everything you need to complete the game; Assets, psd files, boilerplate react code.

## The screens

**home page**
![](https://github.com/seedboxtech/frontend-dev-test/blob/master/test/visual-screens/Interface_Home.jpg?raw=true)

**New Game page**
![](https://github.com/seedboxtech/frontend-dev-test/blob/master/test/visual-screens/Interface_NewGame.jpg?raw=true)

**Credits page**
![](https://github.com/seedboxtech/frontend-dev-test/blob/master/test/visual-screens/Interface_Credit.jpg?raw=true)

**Game page**
![](https://github.com/seedboxtech/frontend-dev-test/blob/master/test/visual-screens/Interface_Game.jpg?raw=true)

**GameWinner page**
![](https://github.com/seedboxtech/frontend-dev-test/blob/master/test/visual-screens/Interface_GameWin.jpg?raw=true)

## The assets

[Assets files](https://github.com/seedboxtech/frontend-dev-test/tree/master/test/assets)

## The Psd File

[Psd file](https://github.com/seedboxtech/frontend-dev-test/raw/master/test/TicTacToe_PSD.zip)

## Requirements

We are about to list screen by screen the required application requirements. This section will be followed by the optional requirements.

- Usage of React Router

**Home page**

- If the user click "New Game", the new game modal appear.
- If the user click "Credit", the user will land on the credit page.
- If the user click "Quit", redirect him to any site of your choice.

**The New Game Page Modal**

- Player 1 and Player 2 name have to be fill to be able to click on "Start"
- If the user click "Start" before having fill both player 1 and 2, show an error message of your choice.
- Once both player 1 and 2 is filled, when you click "start", user land on the game screen.

**Credit Page**

- Fill credit text block with anything you want.
- If user click on "back", the user will land on the home page.

**The Game Page**

- User can only pick a none used block.
- Current player name must be highlighted.
- Roll over an available block must show "x" or "o" .
- When a user win, the users must see the the winning line for 2 secondes before the winner modal appear.

**The Winner Modal**

- The title should be "Victory to {the_name_of_the_winner}".
- If the user click "restart", the modal disappear and the board came back in its initial state.
- if the user click "quit", the user will land on the home page.

## Optional Requirements

- Usage of redux
- Usage of Sass
- On the new game page, add the possibility to let player choose witch one will have the "0" and the "x" .
- On the credit page, instead of having an hardcoded credit text bloc, fetch all of the characters name using this api call http://api.tvmaze.com/people/1/castcredits and use the result to fetch all characters name

## Evaluation Criteria

- All Requirements are respected and functional.
- The Html semantic
- The layout respect the given design
- The css
- The way the project is structured (ex: components, files structures...)
- You can also add any extra to the application, make sure that they respect the initial requirement and when you will send us your project please mention them.
