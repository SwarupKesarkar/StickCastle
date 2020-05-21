class Stone
{
    constructor(x, y, w, h)
    {
      var options = {
        isStatic : true
      }
      this.body = Bodies.rectangle(x, y, w, h, options);
      this.width =  w;
      this.hieght = h;
      this.x = x;
      this.y = y;
      World.add(world, this.body);
    }
  

    display()
    {
        var pos = this.body.position;
        rectMode(CENTER);
        fill("grey");
        rect(pos.x, pos.y, this.width, this.hieght);
    }
}