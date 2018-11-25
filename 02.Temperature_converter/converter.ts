abstract class AbstractConverter{
    public abstract getCelsius();
    public abstract getKelvin();
    public abstract getFarenheit();
    public temperature: Temperature;

    public constructor(temperature) {
        this.temperature = temperature;
    }

}

class BaseCeliusConverter extends AbstractConverter{
    public getCelsius(): number {
        return this.temperature.getCelsius();
    }
    public getKelvin(): number {
        return this.temperature.celsius + 273.15;
    }
    public getFarenheit(): number {
        return (this.temperature.celsius * 1.8) + 32;
    }
}

class BaseKelvinConverter extends AbstractConverter {
    public getCelsius(): number {
        return this.temperature.kelvin - 273.15;
    }
    public getKelvin(): number {
        return this.temperature.kelvin;
    }
    public getFarenheit(): number {
        return (this.getCelsius() * 1.8) + 32;
    }
}

class BaseFarenheitConverter extends AbstractConverter {
    public getCelsius(): number {
        return this.temperature.getCelsius();
    }
    public getKelvin(): number {
        return this.temperature.getKelvin();
    }
    public getFarenheit(): number {
        return this.temperature.getFarenheit();
    }
}


class Temperature {

    public celsius!: number;
    public farenheit!: number;
    public kelvin!: number;
    public converter!: AbstractConverter;

    constructor(
        celsius?: number,
        farenheit?: number,
        kelvin?: number,
        ) {
        this.kelvin = kelvin;
        this.celsius = celsius;
        this.farenheit = farenheit
        if (this.kelvin !== undefined) {
            this.converter = new BaseKelvinConverter(this) } 
        else if (this.farenheit !== undefined) {
            this.converter = new BaseFarenheitConverter(this)}
        else if (this.celsius !== undefined) {
            this.converter = new BaseCeliusConverter(this)
        } else {
            throw new Error('temperature of any type not provided')
        }
    }

    public getCelsius(): number{
        return this.converter.getCelsius();
    }
    public getKelvin(): number {
        return this.converter.getKelvin();
    }
    public getFarenheit(): number {
        return this.converter.getFarenheit();
    }

}

var temp = new Temperature(0)
console.log(temp.getFarenheit())