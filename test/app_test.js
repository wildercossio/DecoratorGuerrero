import Guerrero from '../guerrero';
var expect = require('chai').expect;
describe('Guerreros',function(){
    it('Devolver el nombre del guerrero',function(){
        let guerrero=new Guerrero("Juan");
        expect("Juan").equal(guerrero.nombre);
    });
    it('Devolver el nombre del guerrero de infanteria',function(){
        let guerrero=new Infanteria("Erick");
        expect("Erick").equal(guerrero.nombre);
    });

});