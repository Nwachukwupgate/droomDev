import {useState, useEffect} from 'react'

const useFetch = (url) => {
    const [countries, setCountries] = useState(null);

    useEffect(() => {
      fetch(url, {signal: abortCont.Signal})
        .then(res => {
            if(!res.ok) {
                throw Error("Could not fetch")
            }
            return res.json();
        })
        .then(data => {
            setCountries(data)
        })
        .catch(err => {
            if(err.name ==="AbortError") {
                console.log("error");
            }else {
                console.log("error");
            }
        })
      return () => {
        abortCont.abort()
      }
    }, [url]);
    
  return {countries}
}

export default useFetch