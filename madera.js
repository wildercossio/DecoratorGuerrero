class Madera{
    constructor(guerrero){
        this.guerrero=guerrero;
        this.material=5;
    }
    calcularDañoDeArma(){
        return this.guerrero.calcularDañoDeArma()+this.agregarMaterial();
    }
    agregarMaterial(){
        return this.material;
    }
}
module.exports=Madera;