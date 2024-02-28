var thingy = document.getElementById("thingy");

class Player {
  constructor(x, y, sprite) {
    this.x = x;
    this.y = y;
    this.sprite = sprite;
  }

  pressed(e) {
    var dir = e.key;

    alert(dir);
  
  }
}
