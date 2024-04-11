export const getAllMoviesService = async()=>{
    const res = await fetch('https://movie-api-get-only-bmc3.vercel.app/api', {catch:'no-store'});
    const data = await res.json();
    return data
}