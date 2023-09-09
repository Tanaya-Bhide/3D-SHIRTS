import { proxy } from 'valtio';

const state = proxy({
    intro: true,
    color: '#FFC300', // Set to Sunflower Yellow
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './threejs.png',
    fullDecal: './threejs.png',
});

export default state;
