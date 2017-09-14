function snake(){
	this.x = 0;
	this.y = 0;

	this.dx = 1;
	this.dy = 0;

	this.eat = function(pos){
		var d = dist(this.x, this.y, pos.x, pos.y);
		if (d < 1){
			return true;
		} else{
			return false;
		}
	}

	this.update = function(){
		this.x = this.x + this.dx * scl;
		this.y = this.y + this.dy * scl;

		this.x = constrain(this.x, 0, width-scl);
		this.y = constrain(this.y, 0, height-scl);
	}

	this.show = function(){
		fill(255);
		rect(this.x, this.y, scl, scl);
	}

	this.dir = function(x, y){
		this.dx = x;
		this.dy = y;
	}
	
}