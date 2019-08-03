import GameScene from './GameScene';
import { AUTO } from 'phaser';


const config = {
    type: AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: new GameScene(),
};

export { config };