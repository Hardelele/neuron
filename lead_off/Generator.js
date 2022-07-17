export class Generator {

    getRandomWeights = (size) => {
        const weights = [];
        while (weights.length < size) {
            const random = Math.random();
            const weight = parseFloat(random.toFixed(2));
            weights.push(weight);
        }
        return weights;
    }

    /**
     * Возвращает список правильных ответов.
     * @param size - количество параметров
     */
    getCorrectAnswers = (size) => {
        const correctAnswers = [];
        this.#generateParamsAndAnswerPair(correctAnswers, size);
        this.#fillParams(size, correctAnswers);
        return correctAnswers;
    }

    /**
     * Заполняет матрицу двоичных чисел.
     * @param size - длина последовательности из 0 и 1.
     * @param answers - массив пар param и answer, заполняем params двоичным кодом.
     */
    #fillParams = (size, answers) => {
        let frequency = 1;
        while (frequency <= size) {
            answers.forEach((pair, index) => {
                pair.params.push(binary(index / Math.pow(2, frequency)));
                if (index === Math.pow(2, size) - 1) {
                    frequency++;
                }
            });
        }
    }

    #generateParamsAndAnswerPair = (correctAnswers, size) => {
        if (correctAnswers.length < Math.pow(2, size)) {
            const params = [];
            correctAnswers.push({params, answer: getRandomAnswer()});
            this.#generateParamsAndAnswerPair(correctAnswers, size);
        }
    }

    #getRandomAnswer = () => {
        const random = Math.random();
        return Math.floor(random * 2);
    }
}