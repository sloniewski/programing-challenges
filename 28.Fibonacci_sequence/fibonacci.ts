interface IteratorResult<T> {
    done: boolean;
    value: T;
}

interface Iterator<T> {
    next(): IteratorResult<T>;
    return?(): IteratorResult<T>;
    throw?(): IteratorResult<T>;
}

class Options{
    public max_number?: number;
    public max_value?: number;
}


class Fib implements Iterator<number>
{
    private first_num: number = 0
    private second_num: number = 1
    private counter: number = 0;

    private max_val_set: boolean = false;
    private max_num_set: boolean = false;
    private max_number: number;
    private max_value: number;

    constructor(
        public options: Options
    ){
        if (options.hasOwnProperty('max_value')) {
            this.max_value = options.max_value;
            this.max_val_set = true;
        }

        if(options.hasOwnProperty('max_number')){
            this.max_number = options.max_number;
            this.max_num_set = true;
        }
    }

    public next(): IteratorResult<number>{
        var temp = this.first_num;
        var status = false;

        if (this.max_num_set == false){
            this.max_number = this.counter
        }

        if (this.max_val_set == false) {
            this.max_value = temp
        }

        if (this.max_number >= this.counter && temp <= this.max_value) {
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

var test_fib = new Fib({max_number: 23})

for (let x of test_fib ){
    console.log(x)
}

