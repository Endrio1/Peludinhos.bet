/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop1", "./Stage/costumes/backdrop1.svg", {
        x: 240,
        y: 180
      }),
      new Costume(
        "imagem_2023-10-22_202801883",
        "./Stage/costumes/imagem_2023-10-22_202801883.png",
        { x: 249, y: 360 }
      )
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [];

    this.vars.sprite1Speed = 17;
    this.vars.winner = 0;

    this.watchers.winner = new Watcher({
      label: "winner",
      style: "normal",
      visible: true,
      value: () => this.vars.winner,
      x: 245,
      y: 175
    });
  }
}
