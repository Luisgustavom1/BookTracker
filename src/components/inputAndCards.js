import { React, useEffect, useState } from "react"
import axios from 'axios'

export default function Input(){
    const [search, setSearch] = useState('')
    const [datas, setDatas] = useState('')

    useEffect(()=>{
        let params = {}
        if(search){
            params = search
        }
        axios.get(`https://www.googleapis.com/books/v1/volumes?q==${params}`)
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
        </main>
    )
}