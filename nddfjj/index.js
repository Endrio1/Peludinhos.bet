import {
  Project,
  Sprite
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Gato1spr from "./Gato1spr/Gato1spr.js";
import Gato2spr from "./Gato2spr/Gato2spr.js";
import Gato3spr from "./Gato3spr/Gato3spr.js";
import Gato4spr from "./Gato4spr/Gato4spr.js";
import Sprite1 from "./Sprite1/Sprite1.js";

const stage = new Stage({ costumeNumber: 2 });

const sprites = {
  Gato1spr: new Gato1spr({
    x: 21,
    y: -73,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 5,
    visible: true,
    layerOrder: 1
  }),
  Gato2spr: new Gato2spr({
    x: 54,
    y: 11,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 5,
    visible: true,
    layerOrder: 2
  }),
  Gato3spr: new Gato3spr({
    x: 10.02,
    y: -82.786,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 5,
    visible: true,
    layerOrder: 4
  }),
  Gato4spr: new Gato4spr({
    x: -83.17777765625,
    y: 49.688720625,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 5,
    visible: true,
    layerOrder: 3
  }),
  Sprite1: new Sprite1({
    x: 6,
    y: -40,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 20,
    visible: true,
    layerOrder: 5
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
