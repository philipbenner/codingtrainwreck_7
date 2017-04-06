var planets = [];

function setup() {
	createCanvas(512, 512);
	angleMode(DEGREES)
	noStroke();
	var sun = new Planet(createVector(0,0),100);
	planets.push(sun)
	for (var i = 5 - 1; i >= 0; i--) {
		var f = new Planet(createVector(random(100,300),0), 50);
		f.init();
		planets.push(f);
	};
	
}

function draw() {
  background(0,0,0);
  translate(width/2, height/2);
  for (var i = planets.length- 1; i >= 0; i--) {
  	planets[i].show();
  	planets[i].update();
  };
}


