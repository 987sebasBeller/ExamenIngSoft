class Contador{
    constructor(cadena){
        cadena=cadena.toLowerCase();
        this.repeticionesPalabras={};
        this.lista=[];
        cadena+=" ";
        let aux="";
        for (let i=0;i<cadena.length;i++){
            if(!["-"," ",",",";","."].includes(cadena[i])){
                aux+=cadena[i];
            }else{
                this.lista.push(aux);
                 aux="";
            
            }
        }
        for (let i=0;i<this.lista.length;i++){
            if(this.lista[i] in this.repeticionesPalabras){
                this.repeticionesPalabras[this.lista[i]]+=1;
            }
            else {
                this.repeticionesPalabras[this.lista[i]]=1;
            }
        }
    }
    
    obtenerLista(){
        return this.lista;
    }
    obtenerRepeticiones(){
        return this.repeticionesPalabras;
    }
};
export default Contador;