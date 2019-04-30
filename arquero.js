class Arquero{
    constructor(nombre){
        this.nombre=nombre;
        this.arma="arco";
        this.totalDaño=5;
    }
    calcularDañoDeArma(){
        return this.totalDaño;
    }
}

module.exports=Arquero;