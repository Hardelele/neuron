export class Neuron {

    #weighs;

    constructor(weights) {
        this.#weighs = weights;
    }

    train = () => {
        //TODO:: Correct weighs
    }

    /**
     * Предсказывает ответ (да / нет), по выделенному списку признаков.
     * В предсказании участвуют веса, которые и влияют на ответ нейрона.
     * @param inputs - список признаков, которые будет анализировать нейрон.
     * @returns {number} - ответ нейрона. Есть сигнал (>=0.5) или нет (<0.5).
     */
    predict = (inputs) => {
        const hidden = inputs.map((input, index) => this.#weighs[index] * input);
        const output = hidden.reduce((acc, rec) => acc + rec);
        return this.#sigmoid(output);
    }

    /**
     * Активационная функция
     * @param x - Сумма элементов массива полученного путём перемножения весов и входных данных
     * @returns {number} - Не финальные выходные данные.
     * Либо образуют массив. Либо преобразуются в результат путём сравнения с 0.5
     */
    #sigmoid = (x) => {
        return 1 / (1 + Math.exp(-x));
    }
}