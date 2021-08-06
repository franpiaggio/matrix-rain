import CTA from './constants'
class Charcter{
    constructor(sketch, posX, posY, speed, isFirst, opacity){
        this.sketch = sketch
        this.posX = posX;
        this.posY = posY;
        this.speed = speed;
        this.switchInterval = this.getRandomNumber(2, 10);
        this.char = "";
        this.isFirst = isFirst;
        this.opacity = opacity;
    }

    getRandomNumber(min, max){
        return this.sketch.round(this.sketch.random(min, max))
    }

    generateRandomChar(){
        this.char = String.fromCharCode(0x30A0 + Math.random() * (0x30FF-0x30A0+1))
    }

    fall(){

        if(this.sketch.frameCount % this.switchInterval === 0){
            this.generateRandomChar()
        }

        if(this.isFirst){
            this.sketch.fill(180, 255, 180, this.opacity);
        }else{
            this.sketch.fill(0, 255, 17, this.opacity);
        }
        this.sketch.text(this.char, this.posX, this.posY);
        
        if(this.posY >= CTA.HEIGHT){
          this.posY = 0;
        }else{
          this.posY += this.speed
        }

    }
}
export default Charcter;