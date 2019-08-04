import {
  Scene,
} from 'phaser';

class PreloadScene extends Scene {
  constructor() {
    super({ key: 'preload' });
  }

  preload() {
    this.load.image('logo', 'assets/logo.png');
    this.load.atlas('flares', 'assets/particles/flares.png', 'assets/particles/flares.json');
  }

  create() {
    //   setDepth puts the logo in front of the particle effects
    this.add.image(400, 300, 'logo').setDepth(10);
    this.input.on('pointerdown', () => this.scene.start('game'));

    const particles = this.add.particles('flares');

    //  Create an emitter by passing in a config object directly to the Particle Manager

    particles.createEmitter({
      frame: ['red', 'blue', 'green', 'yellow'],
      x: 400,
      y: 300,
      speed: 200,
      lifespan: 3000,
      blendMode: 'ADD',
    });
  }
}

export default PreloadScene;
