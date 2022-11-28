function outer () {
    var a = 5;
    var b = 10;

    function inner () {
        console.log(a);
    }

    return inner;
}

var res = outer();

res();