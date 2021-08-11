"use strict";

class Figure {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
  }
}

class Line extends Figure {
  constructor(x, y, x2, y2, color) {
    super(x, y, color);
    this.x2 = x2;
    this.y2 = y2;
  }
  draw(context) {
    context.strokeStyle = this.color;
    context.beginPath();
    context.moveTo(this.x, this.y);
    context.lineTo(this.x2, this.y2);
    context.stroke();
  }
}

class Circle extends Figure {
  constructor(x, y, r, color) {
    super(x, y, color);
    this.r = r;
  }
  draw(context) {
    context.beginPath();
    context.fillStyle = this.color;
    context.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    context.fill();
  }
}

class Rect extends Figure {
  constructor(x, y, w, h, color) {
    super(x, y, color);
    this.w = w;
    this.h = h;
  }
  draw(context) {
    context.beginPath();
    context.rect(this.x, this.y, this.w, this.h);
    context.fillStyle = this.color;
    context.fill();
  }
}

/*писать все через классы и через наследование
класс Canvas должен создавать только объект контекста канваса в конструкторе, а метод add рисовать фигуры, которые создаются благодаря другим классам */

class Canvas {
  constructor(id) {
    this.body = document.querySelector("body");
    this.createCanvas = document.createElement("canvas");
    this.body.append(this.createCanvas);
    this.createCanvas.id = id;
    this.canvas = document.querySelector("canvas");
    this.ctx = this.canvas.getContext('2d');
  }
  add(...args) {
    args.forEach(item => item.draw(this.ctx));
  }
}

let line = new Line(10, 40, 200, 200, 'black'); // x1, y1, x2, y2, color
let circle = new Circle(80, 80, 50, 'green'); // x, y, r, color
let rect = new Rect(50, 50, 50, 50, 'yellow'); // x, y, w, h, color

let drawArea = new Canvas('canvasID');
drawArea.add(line, circle, rect);