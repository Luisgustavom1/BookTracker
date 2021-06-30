import React from 'react'

export default function Cards({datas, loading}){
    if(loading){
        <div>Rastreando...</div>
    }

    return(
        <>
            {datas.map((data) =>{
            return  <div>
                        <h1>{data.volumeInfo.title}</h1>
                        <h3>{data.volumeInfo.subtitle}</h3>
                        <img src={data.volumeInfo.imageLinks == undefined ? '' : data.volumeInfo.imageLinks.thumbnail} alt='Thumbnail this book'></img>
                        <section>
                            <h6>Authors: {data.volumeInfo.authors}</h6>
                        </section>
                    </div>
            })}
        </>
    )
}