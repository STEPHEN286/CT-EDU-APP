
import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import { ArrowLeftIcon } from "lucide-react";

const Search = () => {

 const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

 
  

  return (
    <div className="p-4">
 
      <div className="flex gap-4">
      <button
        onClick={() => navigate(-1)}
        className=" ba text-gray-800 px-4 py-2 rounded-md mb-4"
      >
        <ArrowLeftIcon />
      </button>

   
      <input
        type="text"
        value={searchQuery}
        
        placeholder="Search..."
        className="w-full p-2 border border-gray-300 rounded-md mb-4"
      />

      </div>
  
   

      {loading ? (
        <p>Loading results...</p>
      ) : results.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((result) => (
            <div key={result.id} className="bg-white shadow-md rounded-lg p-4">
              <h3 className="text-lg font-semibold">{result.name}</h3>
              <p>{result.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>this Feature is not working for Now </p>
      )}
    </div>
  );
};

export default Search;
