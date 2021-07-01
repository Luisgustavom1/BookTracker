import React, { useState } from 'react'
import '../styles/modal.css'
import Sair from '../assets/imgs/sair.png'

export default function Cards({datas, loading}){
    const [keyPress, setKeyPress] = useState('')
    if(loading){
        <div>Rastreando...</div>
    }

    const closeModal = () => {
        document.querySelector('.modal').classList.toggle('active')
    }

    const activeModal = (dataId) => {
        closeModal()
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

        <div className='modal'> 
            {datas.map((data) => {
                if(data.id == keyPress){
                    return  <div className='modal-wrapper'>
                                    <section className='header'>
                                        <img src={Sair} alt='Icone sair' onClick={() => closeModal()}></img>
                                    </section>
                                            <img src={data.volumeInfo.imageLinks == undefined ? '' : data.volumeInfo.imageLinks.thumbnail} alt='Book of thumbnail'></img>
                                    <section className='information'>
                                        <h1><strong>Title: {data.volumeInfo.title}</strong></h1>
                                        <h4><strong>Subtitle: {data.volumeInfo.subtitle}</strong></h4>
                                        <h6><strong>Authors: {data.volumeInfo.authors}</strong></h6>
                                        <p><strong>PublisherDate: {data.volumeInfo.publishedDate == undefined ? '' : data.volumeInfo.publishedDate}</strong></p>
                                        <p><strong>Publisher: {data.volumeInfo.publisher == undefined ? '' : data.volumeInfo.publiser}</strong></p>
                                        <p id='description'><strong>Description: {data.volumeInfo.description == undefined ? '' : (data.volumeInfo.description ? data.volumeInfo.description : data.searchInfo.textSnippet)}</strong></p>
                                    </section>
                            </div>
                }
            })}    
        </div>
        </>
    )
}