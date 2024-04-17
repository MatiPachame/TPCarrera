export class Auto {

    public nafta:number=50;
    public color:string="";
    public kmRecorrido:number=0;
    public autonomia:number = 7;
    public automatico:boolean=false;


    public recorrer(){  
        let km= Math.floor(Math.random()+1 * 9)
        this.kmRecorrido+= km;
        this.nafta -= this.autonomia / km;
        
    }

    public cargar(){
        this.nafta=50;
    }






}
