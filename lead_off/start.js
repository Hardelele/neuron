import {Neuron} from "../libs/Neuron.js";
import {Generator} from "./Generator.js";

const generator = new Generator();

const weights = generator.getRandomWeights(2);
console.log(weights);
const neuron = new Neuron(weights);

console.log(neuron.predict([0, 1]));

