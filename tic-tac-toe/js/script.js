var boardSize = 3,// The classic game size is 3 x 3, but we can use any board size we want by adjusting this value!
	turn;// Global variable that determins who's turn to play

$(document).ready(function(){
	init();// Initialize board and variables

	$(this).on('click', '.table_cellview.empty', function(){// Here we deal with clicks on cells
		$(this).text(turn ? 'X' : '0').data('value', turn).removeClass('empty');// Write proper value inside the cell and mark the cell by removing class "empty"
		turn = !turn;// Toggle turn

		setDashboard();// Set correct state in the dashboard

		var res = checkWin();// Check if we have a winner or draw.
		if(res) winDisplay(res);// Show the result window if the game is over
	});

	$(this).on('click', '#reset', function(){// Here we deal with click on "Reset" button at the end of the game
		$('.table_view').html('');// Remove all the html from the board and run the init function.
		init();
	});
});

function init(){
	$('svg, .winner').remove();//Remove the "Winning display" and the animated line
	var style;

	//Create the cells on the board
	for(var i = 0; i < boardSize; ++i){
		$('.table_view').append('<div class="table_row_view row_' + i + '"></div>');
		for(var j = 0; j < boardSize; ++j){
			style = ['font-size:' + (5000 / boardSize) + '%'];
			if(i === 0)					style[style.length] = 'border-top-color:transparent';
			if(i === (boardSize - 1))	style[style.length] = 'border-bottom-color:transparent';
			if(j === 0)					style[style.length] = 'border-left-color:transparent';
			if(j === (boardSize - 1))	style[style.length] = 'border-right-color:transparent';

			style = ' style="' + style.join(';') + '"';
			$('.table_view .row_' + i).append('<div class="table_cellview empty" id="cell_' + i + '_' + j + '"' + style + '></div>');
		}
	}

	turn = true;// We use true/false to determine who's turn to play. Using binary value we can toggle turns easy.
	setDashboard();// Set Dashboard marks
}

function setDashboard(){
	$('.dashboard .active').removeClass('active');

	if(turn){
		$('.dashboard .player_1').addClass('active');
		$('.dashboard .current_move').text('X');
	}else{
		$('.dashboard .player_2').addClass('active');
		$('.dashboard .current_move').text('0');
	}
}

function checkWin(){
	var cells = $('.table_cellview:not(.empty)');// Load all cells that are NOT EMPTY
	if(cells.length < (boardSize * 2 - 1)) return;// The fastest win takes (boardSize * 2 - 1) turns so we are not checking if less than that ammount of cells are filled

	var i, positions = {// Create objects that will count players marks in each row, column and diagonals.
			true:	{horiz: {}, vert: {}, diag1: 0, diag2: 0},
			false:	{horiz: {}, vert: {}, diag1: 0, diag2: 0}
		};

	for(i = 0; i < cells.length; ++i){
		var position = $(cells[i]).attr('id').split('_'),
			val = $(cells[i]).data('value');

		// Counting the horizontal values
		if(positions[val].horiz[position[1]] === undefined) positions[val].horiz[position[1]] = 0;
		positions[val].horiz[position[1]]++;

		// Counting the vertical values
		if(positions[val].vert[position[2]] === undefined) positions[val].vert[position[2]] = 0;
		positions[val].vert[position[2]]++;

		// Counting Diagonals
		if(position[1] === position[2])							positions[val].diag1++;// First Diagonal
		if((~~position[1] + ~~position[2]) === (boardSize - 1))	positions[val].diag2++;// Second Diagonal
	}

	// Checking the results - if one of the rows, columns or diagonals has the same ammount of values as the board-size - we have a winner
		// Check diagonals
	if(positions[true].diag1	=== boardSize) return {type: 'diag1', winner: true};
	if(positions[false].diag1	=== boardSize) return {type: 'diag1', winner: false};

	if(positions[true].diag2	=== boardSize) return {type: 'diag2', winner: true};
	if(positions[false].diag2	=== boardSize) return {type: 'diag2', winner: false};
		// Check rows and columns
	for(i = 0; i < boardSize; ++i){
		// Check Horizontal
		if(positions[true].horiz[i]		=== boardSize) return {type: 'horiz', index: i, winner: true};
		if(positions[false].horiz[i]	=== boardSize) return {type: 'horiz', index: i, winner: false};

		// Check Vertical
		if(positions[true].vert[i]		=== boardSize) return {type: 'vert', index: i, winner: true};
		if(positions[false].vert[i]		=== boardSize) return {type: 'vert', index: i, winner: false};
	}

	// If we got this far and haven't found the winner, and there are no empty cells left, then we have as draw!
	if(cells.length === boardSize * boardSize) return {type: 'draw'}
}

function winDisplay(res){
	if(!res || !res.type) return alert('Error!');

	if(res.type === 'draw'){// If a draw - just display the correct message and return
		$('.inner_wrapper').append(`
<div class="winner">
	<div class="title">It's a Draw!</div>
	<input type="button" id="reset" value="Reset">
</div>
		`);
		return;
	}

	// Finding coordinates for our animated line
	var cell1, cell2;

	switch(res.type){
		case 'horiz':
			cell1 = $('#cell_' + res.index + '_0'),
			cell2 = $('#cell_' + res.index + '_' + (boardSize - 1));
		break;
		case 'vert':
			cell1 = $('#cell_0_' + res.index),
			cell2 = $('#cell_' + (boardSize - 1) + '_' + res.index);
		break;
		case 'diag1':
			cell1 = $('#cell_0_0'),
			cell2 = $('#cell_' + (boardSize - 1) + '_' + (boardSize - 1));
		break;
		case 'diag2':
			cell1 = $('#cell_0_' + (boardSize - 1)),
			cell2 = $('#cell_' + (boardSize - 1) + '_0');
		break;
	}

	// Creating the end points for our line and the SVG for easier drawing, the Winner Announcement as well
	var p1 = {top: ~~(cell1.position().top)	+ ~~(cell1.height()	/ 2), left: ~~(cell1.position().left)	+ ~~(cell1.width()	/ 2)},
		p2 = {top: ~~(cell2.position().top)	+ ~~(cell2.height()	/ 2), left: ~~(cell2.position().left)	+ ~~(cell2.width()	/ 2)},
		svg = '<svg><line class="path" x1="' + p1.left + '" y1="' + p1.top + '" x2="' + p2.left + '" y2="' + p2.top + '" /></svg>',
		winner = `
<div class="winner">
	<div class="title">The Winner is: "${res.winner ? 'X' : '0'}"</div>
	<input type="button" id="reset" value="Reset">
</div>
		`;

	// Pushing our animated line and the message to our display
	$('.inner_wrapper').append(svg).append(winner);
}