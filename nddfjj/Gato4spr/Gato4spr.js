/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Gato4spr extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("gato4spr", "./Gato4spr/costumes/gato4spr.png", {
        x: 360,
        y: 360
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "space" },
        this.whenKeySpacePressed
      ),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "space" },
        this.whenKeySpacePressed2
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(93, -160);
  }

  *whenKeySpacePressed() {
    while (!(this.compare(this.stage.vars.winner, 0) > 0)) {
      this.stage.vars.sprite1Speed = this.random(16, 18);
      yield* this.glide(
        this.toNumber(this.stage.vars.sprite1Speed),
        this.random(-115, 70),
        this.random(-160, 160)
      );
      yield;
    }
  }

  *whenKeySpacePressed2() {
    this.stage.vars.winner = 0;
    while (true) {
      if (this.touching(this.sprites["Sprite1"].andClones())) {
        this.stage.vars.winner = 4;
      }
      yield;
    }
  }
}
