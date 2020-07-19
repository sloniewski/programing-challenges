var Options = /** @class */ (function () {
    function Options() {
    }
    return Options;
}());
var Fib = /** @class */ (function () {
    function Fib(options) {
        this.options = options;
        this.first_num = 0;
        this.second_num = 1;
        this.counter = 0;
        this.max_val_set = false;
        this.max_num_set = false;
        if (options.hasOwnProperty('max_value')) {
            this.max_value = options.max_value;
            this.max_val_set = true;
        }
        if (options.hasOwnProperty('max_number')) {
            this.max_number = options.max_number;
            this.max_num_set = true;
        }
    }
    Fib.prototype.next = function () {
        var temp = this.first_num;
        var status = false;
        if (this.max_num_set == false) {
            this.max_number = this.counter;
        }
        if (this.max_val_set == false) {
            this.max_value = temp;
        }
        if (this.max_number >= this.counter && temp <= this.max_value) {
            this.first_num = this.second_num;
            this.second_num = temp + this.second_num;
            this.counter += 1;
        }
        else {
            status = true;
        }
        return {
            done: status,
            value: temp
        };
    };
    Fib.prototype[Symbol.iterator] = function () {
        return this;
    };
    return Fib;
}());
var test_fib = new Fib({ max_number: 5 });
for (var _i = 0, test_fib_1 = test_fib; _i < test_fib_1.length; _i++) {
    var x = test_fib_1[_i];
    console.log(x);
}
var test_fib_2 = new Fib({ max_value: 60 });
for (var _a = 0, test_fib_2_1 = test_fib_2; _a < test_fib_2_1.length; _a++) {
    var x = test_fib_2_1[_a];
    console.log(x);
}
