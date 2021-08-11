"use strict";
/*
можно упороться и еще постараться декодер написать с Морзе на человеческий, но это сложнее, потому что неудобный объект для такого преобразования и нужно которолировать, что пользователь не забудет ставить пробелы между символами. Иначе непонятно будет какая точка или тире за что отвечает :)
*/

const MORSE = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
  " ": " ",
};


class Encoder {
  constructor(str) {
    this.message = str.toUpperCase();
  }
  encodeMorse() {
    this.res = "";
    for (let i = 0; i < this.message.length; i++) {
      for (let key in MORSE) {
        if (this.message.charAt(i) === key) {
          this.res += `${MORSE[key]} `;
        }
      }
    }
    return this.message = this.res.trim();
  }
}


let encoder = new Encoder('Hello Denis'); // HELLO DENIS
console.log(encoder);
console.log(encoder.encodeMorse()); // .... . .-.. .-.. ---   -.. . -. .. ...

