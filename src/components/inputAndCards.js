import { React, useEffect, useState } from "react"
import axios from 'axios'
import '../styles/body.css'
import '../styles/cards.css'

export default function Input(){
    const [search, setSearch] = useState('')
    const [datas, setDatas] = useState('')

    useEffect(()=>{
        let params = {}
        if(search){
            params = search
        }
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${params}`)
            .then((res) => {
                setDatas(res.data)
                console.log(res.data)
            })
    }, [search])
    return(
        <main>
            <div className='input'>
                <form>
                    <label for='search'>Escreva a palavra chave, a ser buscada:</label>
                    <input placeholder='Autor, titulo, gênero...' name='search' id='search' type='text' value={search} onChange={(e) => setSearch(e.target.value)}></input>
                </form>
            </div>
            <div className='container'>
                <div>
                    <h1> Do mil ao milhão</h1>
                    <h3>Sem cortar o cafezinho</h3>
                    <img src='https://books.google.com/books/content?id=9P4vAQAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api' alt='Thumbnail this book'></img>
                    <section>
                        <h6>Authors: Thiago Nigro</h6>
                        <p><strong>Description:</strong> Em seu primeiro livro, Thiago Nigro, criador da plataforma O Primo Rico, ensina aos leitores os três pilares para atingir a independência financeira: gastar bem, investir melhor e ganhar mais.</p>
                    </section>
                </div>
                <div>
                    <h1> Do mil ao milhão</h1>
                    <h3>Sem cortar o cafezinho</h3>
                    <img src='https://books.google.com/books/content?id=9P4vAQAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api' alt='Thumbnail this book'></img>
                    <section>
                        <h6>Authors: Thiago Nigro</h6>
                        <p><strong>Description:</strong> Em seu primeiro livro, Thiago Nigro, criador da plataforma O Primo Rico, ensina aos leitores os três pilares para atingir a independência financeira: gastar bem, investir melhor e ganhar mais.</p>
                    </section>
                </div>
                <div>
                    <h1>Do mil ao milhão</h1>
                    <h3>Sem cortar o cafezinho</h3>
                    <img src='https://books.google.com/books/content?id=9P4vAQAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api' alt='Thumbnail this book'></img>
                    <section>
                        <h6>Authors: Thiago Nigro</h6>
                        <p><strong>Description:</strong> Em seu primeiro livro, Thiago Nigro, criador da plataforma O Primo Rico, ensina aos leitores os três pilares para atingir a independência financeira: gastar bem, investir melhor e ganhar mais.</p>
                    </section>
                </div>
            </div>
        </main>
    )
}