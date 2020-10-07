class Line{
    constructor(x,y,w,h){
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
        this.body=bodies.rectangle(x,y,w,h);
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;

        push();
        translator(this.body.position.x,this.body.position.y);
        fill("yellow");
        rectMode(CENTER);
        pop();
    }
}