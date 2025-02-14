

// export interface Product {
//     gender: string;
//     _id: string;
//     productName: string;
//     _type : "Product";
//     image? : {
//         assest :{
//             _ref : string;
//             _type : "image";

//         }
//     };
//     price : number;
//     description? : string;
//     // category? : string;
//     slug : {
//         _type : "slug"
//         current : "string";

//     }
//     inventory : number;

// }

export interface Product {
    gender: string;
    _id: string;
    productName: string;
    _type: "Product";
    image?: {
        assest: {
            _ref: string;
            _type: "image";
        };
    };
    price: number;
    description?: string;
    category?: string; // Added category field (optional)
    slug: {
        _type: "slug";
        current: string;
    };
    inventory: number;
    age?: number; // Added age field (optional)
}
