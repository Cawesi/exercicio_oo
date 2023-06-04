function EbacMotors(fabricante, veiculo) {
    this.fabricante = fabricante;
    this.veiculo = veiculo;
};

function VeiculoPequeno(fabricante, veiculo, marca, modelo, motor, ano, cilindrada) {
    EbacMotors.call(this, fabricante, veiculo);
    let _marca = marca;
    let _modelo = modelo;
    this.motor = motor;
    this.ano = ano;
    this.cilindrada = cilindrada;

    this.getMarca = function() {
        return _marca;
    };

    this.setMarca = function(valorMarca) {
        _marca = valorMarca;
    }

    this.getModelo = function() {
        return _modelo;
    };

    this.setModelo = function(valorModelo) {
        _modelo = valorModelo;
    }
};

function VeiculoMedio(fabricante, veiculo, marca, modelo, motor, ano, carroceria) {
    EbacMotors.call(this, fabricante, veiculo);
    let _marca = marca;
    let _modelo = modelo;
    this.motor = motor;
    this.ano = ano;
    this.carroceria = carroceria;

    this.getMarca = function() {
        return _marca;
    };

    this.setModelo = function(modelo) {
        _modelo = modelo;
    }
}

function VeiculoGrande(fabricante, veiculo, marca, modelo, motor, ano, eixo) {
    EbacMotors.call(this, fabricante, veiculo);
    let _marca = marca;
    let _modelo = modelo;
    this.motor = motor;
    this.ano = ano;
    this.eixo = eixo;

    this.getMarca = function() {
        return _marca;
    };

    this.setMarca = function(valorMarca) {
        _marca = valorMarca;
    }

    this.getModelo = function() {
        return _modelo;
    };

    this.setModelo = function(valorModelo) {
        _modelo = valorModelo;
    }
}



const moto = new VeiculoPequeno("BMW", "Moto", "BMW", "R 1250 GS", "Elétrico", 2023, 1250)
console.log(moto)

const carro = new VeiculoPequeno("Stellantis", "Carro", "Fiat", "Argo", "Gasolina", 2021, "Hatch")
console.log(carro)


const caminhao = new VeiculoGrande("Tesla", "Caminhão", "Tesla", "Semi", "Elétrico", 2023, 6)
console.log(caminhao)