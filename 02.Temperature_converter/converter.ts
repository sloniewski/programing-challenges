abstract class AbstractTemperature {
    protected temperature: number;

    constructor(temperature: number) {
        this.temperature = temperature
    }
    public abstract toCelsius();
    public abstract toKelvin();
    public abstract toFarenheit();
}

class Celsius extends AbstractTemperature 
{
    public toCelsius(): number {
        return this.temperature;
    }
    public toKelvin(): number {
        return this.temperature + 273.15;
    }
    public toFarenheit(): number {
        return (this.temperature * 1.8) + 32;
    }
}

class Kelvin extends AbstractTemperature 
{
    public toCelsius(): number {
        return this.temperature - 273.15;
    }
    public toKelvin(): number {
        return this.temperature;
    }
    public toFarenheit(): number {
        return ((this.temperature + 273.15) * 1.8) + 32;
    }
}

class Farenheit extends AbstractTemperature 
{
    public toCelsius(): number {
        return this.temperature;
    }
    public toKelvin(): number {
        return this.temperature;
    }
    public toFarenheit(): number {
        return this.temperature;
    }
}

class Converter {
    private type: string;
    private temperature: AbstractTemperature;

    constructor(type: string, temperature: number) {
        switch (type) {
            case 'celsius':
                this.temperature = new Celsius(temperature);
                break;
            case 'kelvin':
                this.temperature = new Kelvin(temperature);
                break;
            case 'farenheit':
                this.temperature = new Farenheit(temperature);
                break
            default:
                throw new Error('unknown temperature type')
        }
    }

    public toCelsius(): number {
        return this.temperature.toCelsius();
    }
    public toKelvin(): number {
        return this.temperature.toKelvin();
    }
    public toFarenheit(): number {
        return this.temperature.toFarenheit();
    }
}

const converter = new Converter('celsius', 14);
console.log(converter.toFarenheit());