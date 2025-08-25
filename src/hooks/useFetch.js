import { useEffect, useState } from "react";

const localCache = {};


export const useFetch = (url) => {
    const [stado, setStado] = useState({
        data: null,
        isLoading: true,
        hasError: false,
        errr: null,
    })

    useEffect(() => {
      getFetch()
      
    }, [url])
    
    const getFetch = async()=>{
        if (localCache[`https://pokeapi.co/api/v2/pokemon/${url}`]){
          console.log('Usando Cache');
          setStado({
            data: localCache[`https://pokeapi.co/api/v2/pokemon/${url}`],
            isLoading: false,
            hasError: false,
            error: null,
          });
          return;
        }
        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${url}`);
        if(!resp.ok){
            setStado({
                data: null,
                isLoading: false,
                hasError: true,
                error: {
                    code: resp.status,
                    message: resp.statusText
                }});
                return;
        }
        
        const data = await resp.json();
        setStado({
            data: data,
            isLoading: false,
            hasError: false,
            error: null
        })

        localCache[`https://pokeapi.co/api/v2/pokemon/${url}`] = data; 
        
    }

  return {
    data: stado.data,
    isLoading: stado.isLoading,
    hasError:  stado.hasError
  }
}
