class Infanteria{
    constructor(nombre){
        this.nombre=nombre;
        this.arma="espada";
        this.totalDaño=10;
    }
    calcularDañoDeArma(){
        return this.totalDaño;
    }
}

module.exports=Infanteria;