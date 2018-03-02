class Player {
  canvas: any;
  life: number;
  coins: number;
  position:[number, number] = [100,200];
  weaponCooldown: number;

  constructor(Canvas: any) {
    this.canvas = Canvas;
  }

  drawPlayer() {
    let ctx:any = this.canvas.getContext("2d");
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(this.position[0],this.position[1],25,75);
  }
  setPosition(x:number,y:number){
    this.position = [x,y];
  }

  moveLeft(){
    this.setPosition(this.position[0], this.position[1] + 10)
  }
  moveRight(){
    this.setPosition(this.position[0], this.position[1] - 10)
  }


}

class Control {
  Canvas:any;
  Char: any;

  constructor(Player:any) {
    this.Canvas = document.getElementById("canvas");
    this.Char = new Player(this.Canvas);
  }

  main() {
    document.addEventListener("keydown", (e) => {
      if (e.keyCode == 65){
        this.Char.moveLeft();
        console.log(this.Char.position[0])
      } else if (e.keyCode == 68){
        this.Char.moveRight();
      }
    }, false);
    setInterval(this.Char.drawPlayer(), 100);
  }
}

let c:any = new Control(Player);
c.main()
