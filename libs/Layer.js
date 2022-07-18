import {Neuron} from "./Neuron.js";

/**
 * Слой нейронной сети, состоит из списка обучаемых нейронов.
 */
export class Layer {

    #neurons = [];
    #hidden = [];
    #outputWeights;

    constructor(weightsMatrix, outputWeights) {
        this.#outputWeights = outputWeights;
        weightsMatrix.forEach(weightsList => this.#neurons.push(new Neuron(weightsList)));
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

