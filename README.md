# **frontend-nanodegree-arcade-game**

## 1.How to get started
To start this arcade game crone, you have to open the folder called 'frontend-nanodegree-arcade-game-master'. Inside of the folder, there are folders and files below,

**css**...this folder contains style sheet file to adjust styles of the website.

**images** ... Inside of this folder, you can see the image files to be shown on the arcade game screen.

**js** ... Inside of this folder, there are 3 javascript files to control the movement and behavior on the arcade game. The detailed explanation will be done later section.

**index** ... this is the html file and you need to choose this file to be shown on the browser.

**README.md**...this file, it explains basic function for each files and how they work.

Now you have to choose the file called '**index**' and drag and drop on the new browser tab, so that you will be able to see the screen like arcade game.

## 2. Basic rules for playing classic arcade game
In the game screen, You are able to control the movement of the player (a litle boy) by pressing any of the keys from ↑↓→←

The goal of this mini game will be crossing the street and reaching the riverside (top of the screen) by controlling the player.
You can see some enemies (bugs) to avoid. If your player colleds with the bugs, then your player are picked back to the start position (bottom of the screen) and you have to try again.

## 3. Javascripts files and each functions in it.
As mentioned, there are 3 javascript files inside of the js folder. I will briefly explain what each file does on the arcade game.

i) app.js
This file contains the basic information of the player/ enemies function. For example, initial position of the player/ enemies, how the player can be controlled by the certain key, when the collision will be occured etc...

ii) engine.js
This file provides the game loop functionality (update entities and render), draws the initial game board on the screen, and then calls the update and render methods on your player and enemy objects (defined in your app.js).
     
iii) resorces.js
This is simply an image loading utility. It eases the process of loading image files so that they can be used within your game. It also includes a simple "caching" layer so it will reuse cached images if you attempt to load the same image multiple times.
