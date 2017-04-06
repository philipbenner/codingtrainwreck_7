function Planet (_p, _r){
	this.pos = createVector(_p.x, _p.y)
	this.r = _r || 100;

	this.rotation = random(360);
	this.rotationSpeed = random()+0.01;
	this.moons = [];
	
	this.init = function (){
		if (this.r == 50){
			this.m = random(3);
			for (var i = this.m - 1; i >= 0; i--) {
				var f = new Planet(createVector(random(40,75),0), 20);
				this.moons.push(f);
			};
		}
	}

	this.show = function (){
		push();
		fill(255);
		if(this.r < 100){
			rotate(this.rotation);
		}
		translate(this.pos.x,this.pos.y);
		ellipse(0,0, this.r, this.r);
		
		if (this.r == 50){
		for (var i = this.moons.length- 1; i >= 0; i--) {
		  	this.moons[i].show();
		  	this.moons[i].update();
		  };
		}
		pop();

	}
	this.update = function (){
		if(this.r < 100){
			this.rotation += this.rotationSpeed;
		}
	}
}