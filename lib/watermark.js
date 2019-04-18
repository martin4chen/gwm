import dateConvert from './helpers/dateConvert';

export default class Watermark {
  constructor({ txt = `${dateConvert()} 内部资料 请勿外传`, x = 0, y = 50, font = 'microsoft yahe', color = '#000', fontSize = 12, alpha = 0.1, width = 158, height = 100, angle = -15 }) {
    this.txt = txt;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.font = font;
    this.fontSize = fontSize;
    this.color = color;
    this.alpha = alpha;
    this.angle = angle;
  }
}
