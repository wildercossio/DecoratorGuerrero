class Arquero{
    constructor(nombre){
        this.nombre=nombre;
        this.arma="arco";
        this.dañoTotal=5;
    }
    calcularDañoDeArma(){
        return this.dañoTotal;
    }
}

module.exports=Arquero;