/// <reference path="../../typings/phaser.d.ts" />

import Phaser from 'phaser';

class Game extends Phaser.Scene {
  constructor() {
    super({ key: 'GameScene' });
  }

 // init(data) {}

  preload() {
    this.load.spritesheet('hero-run-sheet', 'assets/hero/run.png', {
      frameWidth: 32,
      frameHeight: 64
    });
    //this.load.image('logo', 'assets/phaser3-logo.png');
  }

  create(data) {
    this.add.sprite(400, 300, 'hero-run-sheet',5);
    //this.add.image(400, 300, 'logo');
  }

  update(time, delta) {}
}

export default Game;