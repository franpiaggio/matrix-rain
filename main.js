import './style.css'
import p5 from 'p5'
import CTA from './src/constants'
import CharcterColumn from './src/CharcterColumn';

/*
* Letras japo: String.fromCharCode(0x30A0 + Math.random() * (0x30FF-0x30A0+1));
*/
const matrix = new p5( sketch => {
  let columns = [];
  let maxColumns = CTA.WIDTH / CTA.FONTSIZE;
  sketch.setup = () => {
    sketch.createCanvas(CTA.WIDTH, CTA.HEIGHT);
    sketch.textSize(CTA.FONTSIZE)
    let xPos = 0;
    let yPos = 0;

    for(let i = 0; i < maxColumns; i++){
      yPos = sketch.random(-500, 0);
      const newColumn = new CharcterColumn(sketch);
      newColumn.generateCharcters(xPos, yPos);
      columns.push(newColumn);
      xPos += CTA.FONTSIZE;
    }
  };

  /*
  * Esto se ejecuta en loop cosntantemente
  */
  sketch.draw = () => {
    sketch.background(0, 80);
    columns.forEach( column => {
      column.fall();
    })
  };
  
}, "app")