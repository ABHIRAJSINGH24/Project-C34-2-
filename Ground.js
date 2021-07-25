class Ground{
    constructor(x,y,width,height){
        var options={
            'friction':0.4,
            'density':5,
            'isStatic':true
        }
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        fill("blue");
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
    }
}