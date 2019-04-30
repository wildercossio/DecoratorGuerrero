class Metal{
    constructor(guerrero){
        this.guerrero=guerrero;
        this.material=10;
    }
    calcularDañoDeArma(){
        return this.guerrero.calcularDañoDeArma()+this.agregarMaterial();
    }
    agregarMaterial(){
        return this.material;
    }
}
module.exports=Metal;