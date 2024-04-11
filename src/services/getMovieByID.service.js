export const getMoviesByIDService = async(id)=>{
    const res = await fetch(`https://movie-api-get-only-bmc3.vercel.app/api/${id}`,{catch:'no-store'});
    const data = await res.json();
    return data
}