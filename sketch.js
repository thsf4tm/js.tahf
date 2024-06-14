function setup() {
    createCanvas(400, 400);
    background("pink");
    
  }
  
  function draw() {
    
  
    stroke("blue");
    fill("purple");
  
    //console.log(mouseIsPressed);
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 25, 30);
    }
  }
  