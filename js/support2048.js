documentWith = window.screen.availWidth < window.screen.availHeight ? window.screen.availWidth:window.screen.availHeight;
gridContainerWidth = 0.79 * documentWith;
cellSideLength = 0.16 * documentWith;
cellSpace = 0.03 * documentWith;

function getPosTop(i, j){
	return cellSpace+i*(cellSpace + cellSideLength);
}

function getPosLeft(i, j){
	return cellSpace+j*(cellSpace + cellSideLength);
}

function getNumberBackgroundColor(number){

	switch(number){
		case 2: return "#eee4da"; break;
		case 4: return "#ede0c8"; break;
		case 8: return "#f2b179"; break;
		case 16: return "#f59563"; break;
		case 32: return "#f07c5f"; break;
		case 64: return "#ff5e3b"; break;
		case 128: return "#edcf72"; break;
		case 256: return "#fd0361"; break;
		case 512: return "#9c0"; break;
		case 1024: return "#33b5e5"; break;
		case 2048: return "#09c"; break;
		case 4096: return "#a6c"; break;
		case 8192: return "#93c"; break;
		case 16384: return "#888"; break;
		default: return "#111";break;
	}

	return "black";
}


function getTextValue(number){
	switch(number){
		case 2: return "懵懂少女"; break;
		case 4: return "情窦初开"; break;
		case 8: return "意外邂逅"; break;
		case 16: return "暧昧不清"; break;
		case 32: return "如胶似漆"; break;
		case 64: return "佳人才子"; break;
		case 128: return "执子之手"; break;
		case 256: return "红豆相思"; break;
		case 512: return "比翼双飞"; break;
		case 1024: return "你侬我侬"; break;
		case 2048: return "儿女情长"; break;
		case 4096: return "谈婚论嫁"; break;
		case 8192: return "步入殿堂"; break;
		case 16384: return "环游世界"; break;
		case 16384: return "白头偕老"; break;
		default: return "END";break;
	}
	return "black";
}

function getNumberColor(number){
	if(number <= 4){
		return "#776e65";
	}
	return "white";
}

function nospace(board){
	for(var i=0; i<4; i++){
		for(var j=0; j<4; j++){
			if(board[i][j] == 0){
				return false;
			}
		}
	}
	return true;
}

function canMoveLeft(board){
	for(var i=0; i<4; i++){
		for(var j=1; j<4; j++){
			if(board[i][j] != 0){
				if(board[i][j-1] == 0
					|| board[i][j-1] == board[i][j]){
					return true;
			}
		}
	}
}
return false;
}
function canMoveRight(board){
	for(var i=0; i<4; i++){
		for(var j=2; j>=0; j--){
			if(board[i][j] != 0){
				if(board[i][j+1] == 0
					|| board[i][j+1] == board[i][j]){
					return true;
			}
		}
	}
}
return false;
}

function canMoveUp(board){
	for(var j=0; j<4; j++){
		for(var i=1; i<4; i++){
			if(board[i][j] != 0){
				if(board[i-1][j] == 0
					|| board[i-1][j] == board[i][j]){
					return true;
			}
		}
	}
}
return false;
}

function canMoveDown(board){
	for(var j=0; j<4; j++){
		for(var i=2; i>=0; i--){
			if(board[i][j] != 0){
				if(board[i+1][j] == 0
					|| board[i+1][j] == board[i][j]){
					return true;
			}
		}
	}
}
return false;
}

function noBlockHorizontal(row, col1, col2, board){
	for(var i=col1+1; i<col2; i++){
		if(board[row][i] != 0){
			return false;
		}
	}
	return true;
}
function noBlockVertical(row1, row2, col, board){
	for(var i=row1+1; i<row2; i++){
		if(board[i][col] != 0){
			return false;
		}
	}
	return true;
}

function noMove(board){
	if(canMoveDown(board)
		||canMoveUp(board)
		||canMoveRight(board)
		||canMoveLeft(board)){
		return false;
}
return true;
}

function uploadGrade(){
	
	
}

