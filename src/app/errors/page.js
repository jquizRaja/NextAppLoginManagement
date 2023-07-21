'use client'
import {useRouter, useSearchParams} from 'next/navigation'


const Errors = () => {
    const router= useRouter();
    const SearchParams=useSearchParams();
    const errMsg= SearchParams.get('error')

  return (
    <div>
        <h1 style={{color:'red'}}>Errors:{errMsg}</h1>
        <button onClick={()=>router.back()}>Try Again</button>
    </div>

  )
}

export default Errors
