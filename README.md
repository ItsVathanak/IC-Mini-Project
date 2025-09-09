# Quoted: A quote generating application
By Ouk Chan Vathanak

# Description:
This website uses React and Vite. Appwrite was used to handle the backend and database.
On the website, users can press a button to randomly generate a quote, and they can also input their own quotes to be generated.

# Setup Instructions:
1. Clone the repo
   Run the following in the terminal:
     git clone https://github.com/ItsVathanak/quote-gen-app.git
     cd quote-gen-app
2. Install dependencies
   Run the following in the terminal:
     npm install
3. Set up environment variables
   Create a '.env.local' file in the root folder, then add the following variables:
     VITE_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
     VITE_APPWRITE_PROJECT_ID=xxxxxx
     VITE_APPWRITE_DATABASE_ID=xxxxxx
     VITE_APPWRITE_COLLECTION_ID=xxxxxx
   (the values marked with 'xxxxxx' are to be filled with your own ids. I hope you know how to use appwrite.)
4. Run the dev server
   Run the following in the terminal:
     npm run dev

# Architecture Explanation: 
The frontend, backend, and database are able to communicate with each other via the appwrite.js file. This file exports functions that take in variables from the frontend, which it will use to request data from the database handled by Appwrite. 
