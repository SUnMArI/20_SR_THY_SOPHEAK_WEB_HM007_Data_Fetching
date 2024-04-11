import { getMoviesByIDService } from '@/services/getMovieByID.service';
import React from 'react'
import dayjs from 'dayjs';

async function cardDetail({ params }) {
    let e = await getMoviesByIDService(params.id);
    const date = dayjs(e.payload.posted_at);
    let rating = e.payload.rating
    let star = Math.ceil(rating)
    let starCount = [];
    for (let a = 0; a < star; a++) {
        starCount.push(
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
            </svg>
        )
    }

    return (
        <section key={e.movie_id} className='pt-36 bg-red-950 w-full h-screen text-white' >

            <div className=" dark:bg-gray-800 py-8">
                <div className="w-full  sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row gap-7 px-9">
                        <div className="md:flex-1 px-4">
                            <div className="h-[690px] w-[1000px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                                <img className="object-cover w-full h-full" src={e.payload.image|| 'data:image/png;base64,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'} alt="Product Image" />
                            </div>
                        </div>
                        <div className=" flex flex-col gap-20 ">
                            <div>
                                <h2 className="text-2xl font-bold ">{e.payload.director}</h2>
                                <p className=" text-lg  ">
                                    {e.payload.runtime} minutes
                                </p>
                                <p className=" text-lg italic ">
                                    {e.payload.genre}
                                </p>
                                <p className=' text-yellow-300 flex  '>
                                    {starCount}
                                </p>
                            </div>
                            <div>
                                <span className="font-bold text-3xl">{e.payload.movie_title}</span>
                                <p className=" text-xl mt-2">
                                    {e.payload.description}
                                </p>
                            </div>
                            <div className='text-lg'>
                                {date.format("MMM D, YYYY h:mm:ss  A")}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default cardDetail