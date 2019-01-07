let fibonacci = () => {
    let sum;
    let init = [0,1]
    for (i = 2; i < 29; i++){
        init[i] = (init[i -2] + init[i - 1]);
        if(init[i] % 2 == 0){
            sum += init[i];
        }
    }
    console.log(sum);
    return init;
};

console.log(fibonacci());