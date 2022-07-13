/**
 * Активационная функция
 * @param x - сумма матрицы. внутренний input.
 * @returns {number} - активированный внутренний output.
 */
const sigmoid = (x) => {
    return 1 / (1 + Math.exp(-x));
}

const predict = (size) => {
    const correctAnswers = getCorrectAnswers(size);
    console.log("Correct answers: ");
    console.log(correctAnswers);

    const weights = getRandomWeights(size);
    console.log("weights: " + weights);

    let output = 0;

    correctAnswers[0].params.forEach((param, index) => {
        output += (param * weights[index]);
    });

    const predictedAnswer = sigmoid(output);
    console.log("Sigmoid: " + predictedAnswer);
    console.log("Predicted: " + (predictedAnswer >= 0.5));
    console.log("Correct: " + (correctAnswers[0].answer >= 0.5));
}

const getRandomWeights = (size) => {
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
const getCorrectAnswers = (size) => {
    const correctAnswers = [];
    generateParamsAndAnswerPair(correctAnswers, size);
    fillParams(size, correctAnswers);
    return correctAnswers;
}

/**
 *  Переводит число к 1 или 0, в зависимости от цифр после запятой.
 * @param x - число типа float, где значение имеет только всё что после запятой
 * @returns {number} - 1 или 0
 */
const binary = (x) => {
    x = x - Math.floor(x);
    return x >= 0.5 ? 1 : 0;
}

/**
 * Заполняет матрицу двоичных чисел.
 * @param size - длина последовательности из 0 и 1.
 * @param answers - массив пар param и answer, заполняем params двоичным кодом.
 */
const fillParams = (size, answers) => {
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

const generateParamsAndAnswerPair = (correctAnswers, size) => {
    if (correctAnswers.length < Math.pow(2, size)) {
        const params = [];
        correctAnswers.push({params, answer: getRandomAnswer()});
        generateParamsAndAnswerPair(correctAnswers, size);
    }
}

const getRandomAnswer = () => {
    const random = Math.random();
    return Math.floor(random * 2);
}

predict(5);