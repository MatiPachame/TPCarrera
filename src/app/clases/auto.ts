export class Auto {

    public nafta:number=50;
    public color:string="";
    public kmRecorrido:number=0;

    public automatico:boolean=false;

    constructor(nafta:number, color:string, kmRecorrido:number){

        this.nafta= nafta;
        this.color= color;
        this.kmRecorrido = kmRecorrido;

        

    }

    public recorrer(){  
        let km= Math.floor(Math.random()+1 * 9)
        this.kmRecorrido+= km;
        this.nafta = this.nafta - (km/7);
    }






}
