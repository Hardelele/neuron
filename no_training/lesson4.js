// То же самое что и lesson 3, но вся логика перенесена в Network

import {Layer} from "../libs/Layer.js";

const predict = (alcohol, rain, dudes) => {
    const inputs = [alcohol, rain, dudes];
    const weights = getWeights();
    const hiddenOutput = [-1, 1];

    const network = new Layer(weights, hiddenOutput);

    return network.predict(inputs) >= 0.5;
}

const getWeights = () => {
    return [
        [0.25, 0.25, 0],
        [0.5, -0.4, 0.9]
    ];
}

console.log("result:" + predict(1, 1, 1));