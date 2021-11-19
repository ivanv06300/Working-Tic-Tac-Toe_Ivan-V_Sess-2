function checkwin() {

	var b0, b1, b2, b3, b4, b5, b6, b8, b8;
	b0 = document.getElementById("b0").value;
	b1 = document.getElementById("b1").value;
	b2 = document.getElementById("b2").value;
	b3 = document.getElementById("b3").value;
	b4 = document.getElementById("b4").value;
	b5 = document.getElementById("b5").value;
	b6 = document.getElementById("b6").value;
    b7 = document.getElementById("b7").value;
    b8 = document.getElementById("b8").value;

	if ((b0 == 'x' || b0 == 'X') && (b1 == 'x' ||
		b1 == 'X') && (b2 == 'x' || b2 == 'X')) {
	
		window.alert('Player X won');
	}
	else if ((b0 == 'x' || b0 == 'X') && (b3 == 'x' ||
		b3 == 'X') && (b6 == 'x' || b6 == 'X')) {

		window.alert('Player X won');
	}
	else if ((b6 == 'x' || b6 == 'X') && (b7 == 'x' ||
		b7 == 'X') && (b8 == 'x' || b8 == 'X')) {
		
		window.alert('Player X won');
	}
	else if ((b2 == 'x' || b2 == 'X') && (b5 == 'x' ||
		b5 == 'X') && (b8 == 'x' || b8 == 'X')) {
		
		window.alert('Player X won');
	}
	else if ((b0 == 'x' || b0 == 'X') && (b4 == 'x' ||
		b4 == 'X') && (b8 == 'x' || b8 == 'X')) {
		
		window.alert('Player X won');
	}
	else if ((b2 == 'x' || b2 == 'X') && (b4 == 'x' ||
		b4 == 'X') && (b6 == 'x' || b6 == 'X')) {

		window.alert('Player X won');
	}
	else if ((b1 == 'x' || b1 == 'X') && (b4 == 'x' ||
		b4 == 'X') && (b7 == 'x' || b7 == 'X')) {
		
		window.alert('Player X won');
	}
	else if ((b3 == 'x' || b3 == 'X') && (b4 == 'x' ||
		b4 == 'X') && (b5 == 'x' || b5 == 'X')) {

		window.alert('Player X won');
	}


	else if ((b0 == '0' || b0 == '0') && (b1 == '0' ||
		b1 == '0') && (b2 == '0' || b2 == '0')) {
		
		window.alert('Player 0 won');
	}
	else if ((b0 == '0' || b0 == '0') && (b3 == '0' ||
		b3 == '0') && (b6 == '0' || b6 == '0')) {

		window.alert('Player 0 won');
	}
	else if ((b6 == '0' || b6 == '0') && (b7 == '0' ||
		b7 == '0') && (b8 == '0' || b8 == '0')) {

		window.alert('Player 0 won');
	}
	else if ((b2 == '0' || b2 == '0') && (b5 == '0' ||
		b5 == '0') && (b8 == '0' || b8 == '0')) {

		window.alert('Player 0 won');
	}
	else if ((b0 == '0' || b0 == '0') && (b4 == '0' ||
		b4 == '0') && (b8 == '0' || b8 == '0')) {

		window.alert('Player 0 won');
	}
	else if ((b2 == '0' || b2 == '0') && (b4 == '0' ||
		b4 == '0') && (b6 == '0' || b6 == '0')) {

		window.alert('Player 0 won');
	}
	else if ((b1 == '0' || b1 == '0') && (b4 == '0' ||
		b4 == '0') && (b7 == '0' || b7 == '0')) {
		
		window.alert('Player 0 won');
	}
	else if ((b3 == '0' || b3 == '0') && (b4 == '0' ||
		b4 == '0') && (b5 == '0' || b5 == '0')) {
		window.alert('Player 0 won');
	}}

	 
turn = 1;
function bx0() {
	if (turn == 1) {
		document.getElementById("b0").value = "X";
		document.getElementById("b0").disabled = true;
		turn = 0;
		document.getElementById("player").innerText = "0";
	}
	else {
		document.getElementById("b0").value = "0";
		document.getElementById("b0").disabled = true;
		turn = 1;
		document.getElementById("player").innerText = "X";
	}
}

function bx1() {
	if (turn == 1) {
		document.getElementById("b1").value = "X";
		document.getElementById("b1").disabled = true;
		turn = 0;
		document.getElementById("player").innerText = "0";
	}
	else {
		document.getElementById("b1").value = "0";
		document.getElementById("b1").disabled = true;
		turn = 1;
		document.getElementById("player").innerText = "X";
	}
}

function bx2() {
	if (turn == 1) {
		document.getElementById("b2").value = "X";
		document.getElementById("b2").disabled = true;
		turn = 0;
		document.getElementById("player").innerText = "0";
	}
	else {
		document.getElementById("b2").value = "0";
		document.getElementById("b2").disabled = true;
		turn = 1;
		document.getElementById("player").innerText = "X";
	}
}

function bx3() {
	if (turn == 1) {
		document.getElementById("b3").value = "X";
		document.getElementById("b3").disabled = true;
		turn = 0;
		document.getElementById("player").innerText = "0";
	}
	else {
		document.getElementById("b3").value = "0";
		document.getElementById("b3").disabled = true;
		turn = 1;
		document.getElementById("player").innerText = "X";
	}
}

function bx4() {
	if (turn == 1) {
		document.getElementById("b4").value = "X";
		document.getElementById("b4").disabled = true;
		turn = 0;
		document.getElementById("player").innerText = "0";
	}
	else {
		document.getElementById("b4").value = "0";
		document.getElementById("b4").disabled = true;
		turn = 1;
		document.getElementById("player").innerText = "X";
	}
}

function bx5() {
	if (turn == 1) {
		document.getElementById("b5").value = "X";
		document.getElementById("b5").disabled = true;
		turn = 0;
		document.getElementById("player").innerText = "0";
	}
	else {
		document.getElementById("b5").value = "0";
		document.getElementById("b5").disabled = true;
		turn = 1;
		document.getElementById("player").innerText = "X";
	}
}

function bx6() {
	if (turn == 1) {
		document.getElementById("b6").value = "X";
		document.getElementById("b6").disabled = true;
		turn = 0;
		document.getElementById("player").innerText = "0";
	}
	else {
		document.getElementById("b6").value = "0";
		document.getElementById("b6").disabled = true;
		turn = 1;
		document.getElementById("player").innerText = "X";
	}
}

function bx7() {
	if (turn == 1) {
		document.getElementById("b7").value = "X";
		document.getElementById("b7").disabled = true;
		turn = 0;
		document.getElementById("player").innerText = "0";
	}
	else {
		document.getElementById("b7").value = "0";
		document.getElementById("b7").disabled = true;
		turn = 1;
		document.getElementById("player").innerText = "X";
	}
}

function bx8() {
	if (turn == 1) {
		document.getElementById("b8").value = "X";
		document.getElementById("b8").disabled = true;
		turn = 0;
		document.getElementById("player").innerText = "0";
	}
	else {
		document.getElementById("b8").value = "0";
		document.getElementById("b8").disabled = true;
		turn = 1;
		document.getElementById("player").innerText = "X";
	}
}