class Contador{
    constructor(cadena){
   
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
    }
    obtenerLista(){
        return this.lista;
    }
};
export default Contador;