import Arquero from '../arquero';
import Infanteria from '../infanteria';
var expect = require('chai').expect;

describe('Guerreros',function(){
    it('Devolver el nombre de un guerrero de tipo arquero',function(){
        let guerrero=new Arquero("Juan");
        expect("Juan").equal(guerrero.nombre);
    });
    it('Devolver el nombre de un guerrero de tipo infanteria',function(){
        let guerrero=new Infanteria("Erick");
        expect("Erick").equal(guerrero.nombre);
    });
    it('Calcular el daño de arma para para un guerrero de tipo arquero que tiene solo arco',function(){
        let guerrero=new Arquero("Homero");
        expect(5).equal(guerrero.calcularDañoDeArma());
    });
});