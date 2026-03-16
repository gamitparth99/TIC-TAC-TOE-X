<!DOCTYPE html>
<html>
<head>
<title>Tic Tac Toe</title>
<link rel="stylesheet" href="style.css">
</head>

<body>

<h1>Tic Tac Toe</h1>

<div class="players">
<input id="playerX" placeholder="Player X Name">
<input id="playerO" placeholder="Player O Name">
<button onclick="startGame()">Start</button>
</div>

<div class="scoreboard">
<span id="nameX">X</span> :
<span id="scoreX">0</span>

|

<span id="nameO">O</span> :
<span id="scoreO">0</span>
</div>

<div id="board"></div>

<p id="status"></p>

<canvas id="particles"></canvas>

<script src="particles.js"></script>
<script src="game.js"></script>

</body>
</html>