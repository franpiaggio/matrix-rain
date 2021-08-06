import Charcter from './Charcter';
import CONSTANTS from './constants';
class CharcterColumn{
    constructor(sketch){
        this.sketch = sketch;
        this.charcters = []
        this.maxColumnCharcter = this.getRandomNumber(10, 20)
        this.speed = this.getRandomNumber(5, 10)
    }

    generateCharcters(x, y){
        // Crea todos los caracteres segun maxColumnCharcter
        let isFirst = this.getRandomNumber(0, 3) === 1;
        let opacity = 255;
        for(let i = 0; i < this.maxColumnCharcter; i++){
            const newCharcter = new Charcter(
                this.sketch, 
                x, 
                y, 
                this.speed, 
                isFirst,
                opacity
            )
            this.charcters.push(newCharcter);
            y -= CONSTANTS.FONTSIZE
            isFirst = false;
            opacity -= opacity / this.maxColumnCharcter;
        }
    }

    fall(){
        // A todos los caracteres les ordena que caigan
        this.charcters.forEach( charcter => {
            charcter.fall();
        })
    }

    getRandomNumber(min, max){
        return this.sketch.round(this.sketch.random(min, max))
    }
}
export default CharcterColumn;