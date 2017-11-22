document.addEventListener("DOMContentLoaded", ready);
function ready() {

var howManyPlayers1 = 0;
var howManyPlayers2 = 0;

//расстановка кораблей
	// первый игрок
	function analytic1(e) {
		var fieldX = e.target.value;
		var arrX = fieldX.split(',');
		for(var i = 0; i < arrX.length; i++){
			var fieldPlayer = document.querySelectorAll('#player1 .field-my span');
			for (var j = 0; j < fieldPlayer.length; j++){
				if(fieldPlayer[j].getAttribute('data-coordinates') == arrX[i]){
					fieldPlayer[j].className = 'on';
				}
			}
		}
	}
	function analyticPlayer1() {
		var xPlayer = document.querySelectorAll('#player1 input');
		for(var v = 0; v < xPlayer.length; v++){
			xPlayer[v].addEventListener('blur', analytic1, false)
		}
	}
	// второй игрок
	function analytic2(e) {
		var fieldY = e.target.value;
		var arrY = fieldY.split(',');
		for(var i = 0; i < arrY.length; i++){
			var fieldPlayer = document.querySelectorAll('#player2 .field-my span');
			for (var j = 0; j < fieldPlayer.length; j++){
				if(fieldPlayer[j].getAttribute('data-coordinates') == arrY[i]){
					fieldPlayer[j].className = 'on';
				}
			}
		}
	}
	function analyticPlayer2(){
		var yPlayer = document.querySelectorAll('#player2 input');
		for(var v = 0; v < yPlayer.length; v++){
			yPlayer[v].addEventListener('blur', analytic2, false)
		}
	}
//ход игроков
	//ход первого игрока
	function runPlayer1(e){
		var item = e.target;
		var strokePlayer = e.target.getAttribute('data-coordinates');
		var fieldPlayer = document.querySelectorAll('#player2 .field-my span');
		for(i=0;i<fieldPlayer.length;i++){
			if(strokePlayer == fieldPlayer[i].getAttribute('data-coordinates')){
				if(fieldPlayer[i].className != 'on'){
					fieldPlayer[i].style.background = 'green';
					item.innerHTML = 'o';
					fieldHisPlayer1.removeEventListener('click', runPlayer1, false);
					break;
				}else{
					fieldPlayer[i].style.background = 'red';
					item.innerHTML = 'x';
					item.style.color = 'red';
					howManyPlayers1++;
					console.log(howManyPlayers1);
					if(howManyPlayers1 == 20){
						document.getElementById('container').style.display = 'none';
						document.getElementById('win1').style.display = 'block';
					}
					break;
				}
			}
		}
	}
	var fieldHisPlayer1 = document.querySelector('#player1 div.field-his');
	function doesFirstPlayer() {
		fieldHisPlayer1.addEventListener('click', runPlayer1, false);
	}
	//ход второго игрока
	function runPlayer2(e){
		var item = e.target;
		var strokePlayer = e.target.getAttribute('data-coordinates');
		var fieldPlayer = document.querySelectorAll('#player1 .field-my span');
		for(i=0;i<fieldPlayer.length;i++){
			if(strokePlayer == fieldPlayer[i].getAttribute('data-coordinates')){
				if(fieldPlayer[i].className != 'on'){
					fieldPlayer[i].style.background = 'green';
					item.innerHTML = 'o';
					fieldHisPlayer2.removeEventListener('click', runPlayer2, false);
					break;
				}else{
					fieldPlayer[i].style.background = 'red';
					item.innerHTML = 'x';
					item.style.color = 'red';
					howManyPlayers2++;
					console.log(howManyPlayers2);
					if(howManyPlayers2 == 20){
						document.getElementById('container').style.display = 'none';
						document.getElementById('win2').style.display = 'block';
					}
					break;
				}
			}
		}
	}
	var fieldHisPlayer2 = document.querySelector('#player2 div.field-his');
	function doesSecondPlayer() {
		fieldHisPlayer2.addEventListener('click', runPlayer2, false);
	}
//кнопка поехали
	var play = document.getElementById('play');
	play.addEventListener('click', function() {
		document.getElementById('player1').style.display = 'inline-block';
		play.style.display = 'none';
		analyticPlayer1();
	},false)
//кнопка следующий
	var next1 = document.getElementById('next1');
	next1.addEventListener('click', function() {
		document.getElementById('player2').style.display = 'inline-block';
		document.getElementById('player1').style.display = 'none';
		next1.style.display = 'none';
		document.querySelector('#player1 div.player1').style.display = 'none';
		analyticPlayer2();
	},false)
//кнопка начнем
	var next2 = document.getElementById('next2');
	next2.addEventListener('click', function() {
		document.getElementById('player1').style.display = 'inline-block';
		document.getElementById('player2').style.display = 'none';
		next2.style.display = 'none';
		document.querySelector('#player2 div.player2').style.display = 'none';
		document.querySelector('button.endRun1').style.display = 'inline-block';
		document.querySelector('button.endRun2').style.display = 'inline-block';
		document.querySelector('button.reset1').style.display = 'none';
		document.querySelector('button.reset2').style.display = 'none';
		doesFirstPlayer();
	},false)
// кнопка конец хода 1
	var endRun1 = document.querySelector('button.endRun1');
	endRun1.addEventListener('click', function() {
		document.getElementById('player1').style.display = 'none';
		document.getElementById('player2').style.display = 'inline-block';
		doesSecondPlayer()
	},false);
// кнопка конец хода 2
	var endRun2 = document.querySelector('button.endRun2');
	endRun2.addEventListener('click', function() {
		document.getElementById('player2').style.display = 'none';
		document.getElementById('player1').style.display = 'inline-block';
		doesFirstPlayer();
	},false);
// очистить координаты полей первого игрока
	var reset1 = document.querySelector('button.reset1');
	reset1.addEventListener('click', function() {
		var fieldPlayer = document.querySelectorAll('#player1 .field-my span');
		for(var i = 0; i < fieldPlayer.length; i++){
			fieldPlayer[i].className = '';
		}
		var xPlayer = document.querySelectorAll('#player1 input');
		for(var j = 0; j < xPlayer.length; j++){
			xPlayer[j].value = '';
		}
	}, false);
// очистить координаты полей второго игрока
	var reset2 = document.querySelector('button.reset2');
	reset2.addEventListener('click', function() {
		var fieldPlayer = document.querySelectorAll('#player2 .field-my span');
		for(var i = 0; i < fieldPlayer.length; i++){
			fieldPlayer[i].className = '';
		}
		var xPlayer = document.querySelectorAll('#player2 input');
		for(var j = 0; j < xPlayer.length; j++){
			xPlayer[j].value = '';
		}
	}, false);



























}