import GameScene from './GameScene';
import { AUTO } from 'phaser';
import PreloadScene from './PreloadScene'


const config = {
    type: AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: true,
        }
    },
    scene: [PreloadScene, GameScene],
};

export { config };