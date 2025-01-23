

export interface Product {
    _id: string;
    productName: string;
    _type : "Product";
    image? : {
        assest :{
            _ref : string;
            _type : "image";

        }
    };
    price : number;
    description? : string;
    // category? : string;
    slug : {
        _type : "slug"
        current : "string";

    }

}