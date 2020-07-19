class AbstractTemperature {
    constructor(temperature) {
        this.temperature = temperature;
    }
}
class Celsius extends AbstractTemperature {
    toCelsius() {
        return this.temperature;
    }
    toKelvin() {
        return this.temperature + 273.15;
    }
    toFarenheit() {
        return (this.temperature * 1.8) + 32;
    }
}
class Kelvin extends AbstractTemperature {
    toCelsius() {
        return this.temperature - 273.15;
    }
    toKelvin() {
        return this.temperature;
    }
    toFarenheit() {
        return ((this.temperature + 273.15) * 1.8) + 32;
    }
}
class Farenheit extends AbstractTemperature {
    toCelsius() {
        return this.temperature;
    }
    toKelvin() {
        return this.temperature;
    }
    toFarenheit() {
        return this.temperature;
    }
}
class Converter {
    constructor(type, temperature) {
        switch (type) {
            case 'celsius':
                this.temperature = new Celsius(temperature);
                break;
            case 'kelvin':
                this.temperature = new Kelvin(temperature);
                break;
            case 'farenheit':
                this.temperature = new Farenheit(temperature);
                break;
            default:
                throw new Error('unknown temperature type');
        }
    }
    toCelsius() {
        return this.temperature.toCelsius();
    }
    toKelvin() {
        return this.temperature.toKelvin();
    }
    toFarenheit() {
        return this.temperature.toFarenheit();
    }
}
const converter = new Converter('celsius', 14);
console.log(converter.toFarenheit());
