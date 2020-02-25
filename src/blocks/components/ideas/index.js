import jquery from 'jquery';
import Parallax from 'parallax-js';

console.log("index");

let petals = $('#petals').get(0);
let parallaxInstance = new Parallax(petals);

parallaxInstance.friction(0.2, 0.2);