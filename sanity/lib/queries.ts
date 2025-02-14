import { groq } from "next-sanity";


export const allProduct = groq `*[_type == "product"]`;
export const four = groq `*[_type == "product"][0..3]`;

export const fourFive = groq`
  *[_type == "product"][2..5]`;
export const mensProducts = `
  *[_type == "product" && category == "Men"] {
    _id,
    productName,
    price,
    inventory,
    colors,
    status,
    description,
    slug,
    image
  }
`;



// `*[_type == "product"]`