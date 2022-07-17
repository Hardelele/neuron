// 3 параметра. 2 нейрона. Без обучения.

import {Neuron} from "../libs/Neuron.js";

const predict = (alcohol, rain, dudes) => {
    const inputs = [alcohol, rain, dudes];
    const weights = getWeights();

    const neuron1 = new Neuron(weights[0]);
    const neuron2 = new Neuron(weights[1]);

    const hidden1 = neuron1.predict(inputs);
    const hidden2 = neuron2.predict(inputs);

    const hiddenOutput = [-1, 1];
    const neuron3 = new Neuron(hiddenOutput);

    return neuron3.predict([hidden1, hidden2]) >= 0.5;
}

const getWeights = () => {
    return [
        [0.25, 0.25, 0],
        [0.5, -0.4, 0.9]
    ];
}

console.log("result:" + predict(0, 1, 0));