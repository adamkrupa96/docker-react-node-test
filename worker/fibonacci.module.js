class FibonacciModule {

    calculate(index) {
        if (index < 2) {
            return 1;
        }
        else { 
            return calculate(index - 1) + calculate(index - 2);
        }
    }
}

module.exports = new FibonacciModule();