var Player = /** @class */ (function () {
    function Player(Canvas) {
        this.position = [100, 200];
        this.canvas = Canvas;
    }
    Player.prototype.drawPlayer = function () {
        var ctx = this.canvas.getContext("2d");
        ctx.fillStyle = "#FF0000";
        ctx.fillRect(this.position[0], this.position[1], 25, 75);
    };
    Player.prototype.setPosition = function (x, y) {
        this.position = [x, y];
    };
    Player.prototype.moveLeft = function () {
        this.setPosition(this.position[0], this.position[1] + 10);
    };
    Player.prototype.moveRight = function () {
        this.setPosition(this.position[0], this.position[1] - 10);
    };
    return Player;
}());
var Control = /** @class */ (function () {
    function Control(Player) {
        this.Canvas = document.getElementById("canvas");
        this.Char = new Player(this.Canvas);
    }
    Control.prototype.main = function () {
        var _this = this;
        document.addEventListener("keydown", function (e) {
            if (e.keyCode == 65) {
                _this.Char.moveLeft();
                console.log(_this.Char.position[0]);
            }
            else if (e.keyCode == 68) {
                _this.Char.moveRight();
            }
        }, false);
        setInterval(this.Char.drawPlayer(), 100);
    };
    return Control;
}());
var c = new Control(Player);
c.main();
