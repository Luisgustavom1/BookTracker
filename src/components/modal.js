import {React, useContext} from 'react'
import '../styles/modal.css'
import Sair from '../assets/imgs/sair.png'
import AppContext from '../appContext/context'


export default function Modal(props){
    const {keyPress} = useContext(AppContext)

    const closeModal = () => {
        document.querySelector('.modal').classList.toggle('active')
    }

    return(
        <div className='modal'> 
            {props.datas.map((data) => {
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
    )
}