import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})

// import { createClient } from "next-sanity";
// import { allProduct, four } from "./queries";

// const client = createClient({
//   projectId: "v25bc5iv", // Replace with your actual project ID
//   dataset: "production", // Replace with your dataset
//   apiVersion: "2025-01-22", // Ensure this matches your Sanity setup
//   useCdn: true, // Use CDN for faster response in production
// });

// // Fetch all products
// export async function getAllProducts() {
//   return await client.fetch(allProduct);
// }

// // Fetch first four products
// export async function getFirstFourProducts() {
//   return await client.fetch(four);
// }