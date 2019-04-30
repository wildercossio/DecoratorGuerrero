class Infanteria{
    constructor(nombre){
        this.nombre=nombre;
        this.arma="espada";
        this.dañoTotal=10;
    }
    calcularDañoDeArma(){
        return this.dañoTotal;
    }
}

module.exports=Infanteria;