import Arquero from '../arquero';
import Infanteria from '../infanteria';
import Madera from '../madera';
import Metal from '../metal';
import Fuego from '../fuego';
var expect = require('chai').expect;

describe('Guerreros',function(){
    it('Devolver el nombre de un arquero',function(){
        let guerrero=new Arquero("Juan");
        expect(guerrero.nombre).equal("Juan");
    });
    it('Devolver el nombre de un infanteria',function(){
        let guerrero=new Infanteria("Erick");
        expect(guerrero.nombre).equal("Erick");
    });
    it('Calcular el daño de arma para un arquero que solo tiene arco',function(){
        let guerrero=new Arquero("Homero");
        expect(guerrero.calcularDañoDeArma()).equal(5);
    });
    it('Calcular el daño de arma para un infanteria que solo tiene espada',function(){
        let guerrero=new Infanteria("Waka");
        expect(guerrero.calcularDañoDeArma()).equal(10); 
    });
    it('Calcular el daño de arma para un arquero que tiene arco de madera',function(){
        let guerrero=new Madera(new Arquero());
        expect(guerrero.calcularDañoDeArma()).equal(10);
    });
    it('Calcular el daño de arma para un arquero que tiene arco de madera y metal',function(){
        let guerrero=new Madera(new Metal(new Arquero));
        expect(guerrero.calcularDañoDeArma()).equal(20);
    });
    it('Calcular el daño de arma para un arquero que tiene arco de madera, metal y fuego',function(){
        let guerrero=new Madera(new Metal(new Fuego(new Arquero)));
        expect(guerrero.calcularDañoDeArma()).equal(50);
    });

    it('Calcular el daño de arma para un infanteria que tiene espada de madera',function(){
        let guerrero=new Madera(new Infanteria());
        expect(guerrero.calcularDañoDeArma()).equal(15);
    });
});