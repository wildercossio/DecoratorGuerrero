import Guerrero from '../guerrero';
var expect = require('chai').expect;
define('Guerreros',function(){
    it('Devolver guerrero',function(){
        let guerrero=new Guerrero("Juan");
        expect("Juan").equal(guerrero.nombre);
    });
});