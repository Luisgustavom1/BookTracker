import React, { useContext } from 'react'
import AppContext from '../appContext/context'

export default function Cards({datas, loading}){
    const {setKeyPress} = useContext(AppContext)
    if(loading){
        return <div className='loading'>Rastreando...</div>
    }
    const activeModal = (dataId) => {
        document.querySelector('.modal').classList.toggle('active')
        setKeyPress(dataId)
    }
    return(
        <>
        <div className='container'>
            {datas.map((data) =>{
            return  <div>
                        <h1>{data.volumeInfo.title}</h1>
                        <h3>{data.volumeInfo.subtitle}</h3>
                        <img src={data.volumeInfo.imageLinks == undefined ? '' : data.volumeInfo.imageLinks.thumbnail} alt='Thumbnail this book'></img>
                        <section>
                            <h6>Authors: {data.volumeInfo.authors}</h6>
                        </section>
                        <button value={data.id} onClick={(e) => activeModal(e.target.value)}>More</button>
                    </div>
            })}
        </div>
        </>
    )
}