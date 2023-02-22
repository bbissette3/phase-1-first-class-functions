function receivesAFunction(callback) {
    callback("this is a callback")
};

function returnsANamedFunction() {
    return function named() {
        console.log("Is this right?")
    }
};

function returnsAnAnonymousFunction() {
    return function() {
        console.log("I think i am getting it")
    }
}