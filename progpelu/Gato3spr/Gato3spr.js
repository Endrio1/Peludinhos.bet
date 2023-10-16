/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Gato3spr extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("gato3spr", "./Gato3spr/costumes/gato3spr.png", {
        x: 360,
        y: 360
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "space" },
        this.whenKeySpacePressed
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "space" },
        this.whenKeySpacePressed2
      )
    ];
  }

  *whenKeySpacePressed() {
    while (true) {
      this.stage.vars.sprite1Speed = this.random(16, 18);
      yield* this.glide(
        this.toNumber(this.stage.vars.sprite1Speed),
        this.random(-202, -17),
        this.random(-137, 137)
      );
      yield;
    }
  }

  *whenGreenFlagClicked() {
    this.goto(-8, 136);
  }

  *whenKeySpacePressed2() {
    this.stage.vars.winner = 0;
    while (true) {
      if (this.touching(this.sprites["Sprite1"].andClones())) {
        this.stage.vars.winner = 3;
        /* TODO: Implement stop all */ null;
      }
      yield;
    }
  }
}
