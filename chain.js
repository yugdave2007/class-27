class Chain{
    constructor(bodyA,bodyB){
        var options={
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness:0.04,
            length:10
        }
    
    
        chain=Constraint.create(options)
        World.add(world,chain)
    }
    display(){
        line(bird.body.position.x,bird.body.position.y,newlog.body.position.x,newlog.body.position.y)
    
    }
}