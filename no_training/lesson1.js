// 3 параметра. 2 нейрона. Без обучения.

const activation = (x) => {
    return x >= 0.5 ? 1 : 0;
}

const predict = (alcohol, rain, dudes) => {
    const inputs = [alcohol, rain, dudes];
    const weights = getWeights();
    const hiddenOutput = [-1, 1];
    const hiddenInput = combine(inputs, weights);

    const output = combine(activationEach(hiddenInput), [hiddenOutput]);

    return output[0] === 1;
}

const getWeights = () => {
    return [
        [0.25, 0.25, 0],
        [0.5, -0.4, 0.9]
    ];
}

const activationEach = (list) => {
    const activatedList = [];
    list.forEach(item => activatedList.push(activation(item)));
    console.log("Activated: " + activatedList);
    return activatedList;
}

const combine = (array, weightsList) => {

    console.log("To combine: " + array, weightsList);

    const output = [];
    weightsList.forEach((weights) => {
        let combined = 0;
        array.forEach((item, index) => {
            const outputItem = weights[index] * item;
            combined += outputItem;
        });
        output.push(combined);
    });

    console.log("Combined: " + output);

    return output;
}

console.log("result:" + predict(1, 0, 0));