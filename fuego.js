class Fuego{
    constructor(guerrero){
        this.guerrero=guerrero;
        this.material=30;
    }
    calcularDañoDeArma(){
        return this.guerrero.calcularDañoDeArma()+this.agregarMaterial();
    }
    agregarMaterial(){
        return this.material;
    }
}

module.exports=Fuego;