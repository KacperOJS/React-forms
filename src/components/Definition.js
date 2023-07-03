import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import useFetch from "../hooks/UseFetch";
import NotFound from "../pages/NotFound";

export default function Definition() {
//   const [error, setError] = useState(false);
//   const [word2, setWord] = useState(null);
const { search } = useParams();
 const [word,errorStatus] = useFetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`)
 useEffect(()=>{
	console.log('word' ,word,'status',errorStatus);
 })
if (errorStatus===404) {
    return (
      <>
        <NotFound/>
        <Link to="/dictionary">Try Again</Link>
	</>
    );
  }
  if (errorStatus) {
    return (
      <>
        <div>We can't find information about {search}</div>
        <Link to="/dictionary">Try Again</Link>
      </>
    );
  }

  return (
    <>
      {word?.[0]?.meannigs ? (
        <>
          <h1>Here is a definition:</h1>
          {word.map((meaning, idx) => (
            <p key={idx}>
              {meaning.partOfSpeech + ": "}
              {meaning.definitions[0].definition}
            </p>
          ))}
          <p>Search again:</p>
          <Dictionary />
        </>
      ) : null}
    </>
  );
}

function Dictionary() {
  return (
    <div>
      {/* Define your dictionary component here */}
    </div>
  );
}
