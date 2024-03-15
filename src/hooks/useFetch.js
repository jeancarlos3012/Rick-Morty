import axios from "axios"
import { useState } from "react"

const useFetch = (url) => {
  const [respons, setResponse] = useState()
  const [hasError, sethasError] = useState(false)

    const getApi=()=>{
        axios.get(url)
        .then(res=>{
          setResponse(res.data)
          sethasError(false)

    })
        .catch(err=>{
          console.log(err)
          sethasError(true)
    })
    }
    return[respons,getApi,hasError]

}

export default useFetch