import { Client, Databases } from "appwrite";


const client = new Client()
  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);


const databases = new Databases(client);

const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const COLLECTION_ID = import.meta.env.VITE_APPWRITE_COLLECTION_ID;

//database functions

//generate randmo quote
export async function getRandomQuote() {
  const res = await databases.listDocuments(DATABASE_ID, COLLECTION_ID);
  if (res.documents.length === 0) return null;

  const randomIndex = Math.floor(Math.random() * res.documents.length);
  return res.documents[randomIndex];
}

//add new quote
export async function addQuote(quote, quoteAuthor) {
  return databases.createDocument(
    DATABASE_ID,
    COLLECTION_ID,
    "unique()",
    {
      quoteText: quote,
      quoteAuthor: quoteAuthor,
    }
  );
}

export { client, databases };
