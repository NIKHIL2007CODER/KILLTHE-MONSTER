class Hero {
  constructor(x,y,width,height)
	{
		var options = { 
			restitution:1,
			density: 10, 
			
		};
		this.x=x;
		this.y=y;
		this.height = height;
		this.width = width;
		this.image=loadImage("superhero1.png");
		this.body=Bodies.rectangle(this.x, this.y, width , height , options);
		World.add(world, this.body);

	}
	
	display()
	{
			
			var heroPos=this.body.position;		
			push()
			translate(heroPos.x, heroPos.y-100);
			rectMode(RIGHT);
			fill(255,0,255)
			imageMode(CENTER);
			image(this.image, 0,0,this.width,this.height)
			pop()
			
	}
}
