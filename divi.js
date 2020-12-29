class Plo{
constructor(x,y,w,h){
   var options={
isStatic:true,



   }
this.body=Bodies.rectangle(x,y,w,h,options)
 this.w = w;
        this.h = h;


World.add(world,this.body)

}
display(){
    fill("red")
var pos=this.body.position
rect(pos.x,pos.y, this.w , this.h )




}




}