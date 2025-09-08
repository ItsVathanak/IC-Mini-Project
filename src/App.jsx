import React, { useState, useEffect } from 'react';
import { addQuote, getRandomQuote } from './appwrite';


const App = () => {
  const [quoteInput, setQuoteInput] = useState('');
  const [quoteAuthorInput, setQuoteAuthorInput] = useState('');

  const [quoteRandom, setQuoteRandom] = useState('');

  const handleRandomQuote = async () => {
    try {
      const randomQuote = await getRandomQuote();
      setQuoteRandom(randomQuote);

    } catch (err) {
      console.error("Failed to generate quote: ", err);
    }
  }

  const handleAddQuote = async () => {
    if(!quoteInput || !quoteAuthorInput) {
      alert("Please fill in both fields");
      return;
    }

    try {
      await addQuote(quoteInput, quoteAuthorInput);
      console.log("Quote added successfully");
      setQuoteInput('');
      setQuoteAuthorInput('');

    } catch(err) {
      console.error("Failed to add quote:", err);
    }
  }

  return(
    <main>
      {/* navbar here */}
      <nav className='bg-[#555879] rounded-b-4xl text-white p-4 flex justify-between items-center'>
        <h1 className='text-3xl font-semibold'>
          <span className='text-[#98A1BC]'>Q</span>uoted
        </h1>

        <div className="space-x-6">
          <a href="#genquote" className='hover:underline'>Generate a quote</a>
          <a href="#writequote" className='hover:underline'>Add my quote</a>
        </div>
      </nav>

      {/* quote area */}
      <section id='genquote' className='text-center py-20'>
        <p className="text-2xl font-medium mb-6">
          Press the button below to generate a quote!
        </p>

        <div className="bg-[#F4EBD3] inline-block p-6 rounded-lg w-[35rem]">

          <button
          onClick={handleRandomQuote} 
          className="bg-gray-400 text-white px-6 py-2 mb-5 rounded-lg hover:bg-gray-500">
            Generate
          </button>
          

          {quoteRandom && (
            <div className='border bg-white rounded-lg px-8 py-6 text-xl font-medium mb-6'>
              "{quoteRandom.quoteText}"<br />- {quoteRandom.quoteAuthor}
            </div>
          )}

        </div>
      </section>

      <hr />

      {/* wriet a quote */}
      <section id='writequote' className="text-center py-20">
        <p className="text-2xl font-medium mb-6">Add your own quotes!</p>

        <div className="bg-[#F4EBD3] inline-block p-6 rounded-lg w-[35rem]">

          <input
            type="text"
            placeholder="Add your quote here"
            className="border bg-white rounded-lg px-4 py-2 w-100 mb-4 block mx-auto"
            value={quoteInput}
            onChange={(e) => setQuoteInput(e.target.value)}
          />
          <input
            type="text"
            placeholder="Author&apos;s name"
            className="border bg-white rounded-lg px-4 py-2 w-100 mb-6 block mx-auto"
            value={quoteAuthorInput}
            onChange={(e) => setQuoteAuthorInput(e.target.value)}
          />
          <button 
          onClick={handleAddQuote}
          className="bg-gray-400 text-white px-6 py-2 rounded-lg hover:bg-gray-500">
            Add Quote
          </button>
        </div>
      </section>
    </main>
  )
}

export default App