export class Product {

    id!: number;
    title: string;
    description: string;
    price: number;

    thumbnail: string;

    disponibilite?:boolean;


    constructor( id: number,title:string,price:number,thumbnail:string,description:string){
        this.id=id;
        this.title=title;
        this.description=description;
        this.price=price;
        this.thumbnail=thumbnail;

    }
}
