interface IteratorResult<T> {
    done: boolean;
    value: T;
}

interface Iterator<T> {
    next(): IteratorResult<T>;
    return?(): IteratorResult<T>;
    throw?(): IteratorResult<T>;
}


class Options
{
    public max_val_set?: boolean = false;
    public max_num_set?: boolean = false;

    constructor (
        public max_value?: number,
        public max_num?: number
    ){
        if (this.max_value != undefined) {
            this.max_val_set = true;
        }

        if (this.max_num != undefined) {
            this.max_num_set = true;
        }
    }
}



class Fib implements Iterator<number>
{
    private first_num: number = 0
    private second_num: number = 1
    private counter: number = 0;

    constructor(
        public options: Options
    ){
        this.options = options;
    }

    public next(): IteratorResult<number>{
        var temp = this.first_num;
        var status = false;

        if (this.options.max_num_set == false){
            this.options.max_num = this.counter
        }

        if (this.options.max_val_set == false) {
            this.options.max_value = temp
        }

        if (this.options.max_num >= this.counter && temp <= this.options.max_value) {
            this.first_num = this.second_num;
            this.second_num = temp + this.second_num;
            this.counter += 1;
        } else {
            status = true;
        }

        return {
            done: status,
            value: temp
        }
    }

   public [Symbol.iterator](): Iterator<number> {
        return this;
    }
}

var o = new Options(22, 3)
var test_fib = new Fib(o)
for (let x of test_fib ){
    console.log(x)
}

