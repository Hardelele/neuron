import {Neuron} from "./Neuron.js";

/**
 * Слой нейронной сети, состоит из списка обучаемых нейронов.
 */
export class Layer {

    #neurons = [];
    #hidden = [];
    #outputWeights;

    constructor(weightsList, outputWeights) {
        this.#outputWeights = outputWeights;
        weightsList.forEach(weights => this.#neurons.push(new Neuron(weights)));
    }

    /**
     * Прогоняет входные данные через список нейронов
     * @param inputs - список признаков, которые проанализирует каждый нейрон на слое.
     * @returns {number} - ответ слоя. Есть сигнал (>=0.5) или нет (<0.5).
     */
    predict = (inputs) => {
        this.#neurons.forEach(neuron => this.#hidden.push(neuron.predict(inputs)));

        const outputNeuron = new Neuron(this.#outputWeights);

        return outputNeuron.predict(this.#hidden);
    }
}

