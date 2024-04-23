import '../styles/itemUser.css'
import { contextoGood } from '../App';
import { useContext } from 'react';



function ItemUser4({ data,url }) {

    const {ruta}= useContext(contextoGood)

    let nombreArch;
import '../styles/itemUser.css'
import { contextoGood } from '../App';
import { useContext } from 'react';



function ItemUser4({ data, url }) {

    const { ruta } = useContext(contextoGood)

    let nombreArch;

    if (url) {
        nombreArch = `${ruta}${url}`

    }

    console.log(data, url, nombreArch)
    return (
        <tr>
            <td> {data.dia} </td>
            <td> {data.hs} </td>
            <td> {data.entrenamientos} </td>
            <td style={{ position: 'relative' }}>
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'rgba(0, 0, 0, 0)',
                        zIndex: 1,
                    }}
                    onClick={() => {
                        window.location.href = nombreArch

                    }}
                ></div>
                <iframe src={nombreArch} className='fra' style={{ background: "#fff" }}></iframe>
            </td>

        </tr>
    );
}

export default ItemUser4;
    if(url){
    nombreArch = `https://docs.google.com/gview?url=${ruta}/documentos/:${url}&embedded=true`

    }

    console.log(data,url,nombreArch)
    return (
        <tr>
            <td> {data.dia} </td>
            <td> {data.hs} </td>
            <td> {data.entrenamientos} </td>
            <td> <iframe src={nombreArch} style={{background:"#fff"}} frameBorder="0"></iframe></td>


        </tr>
    );
}

export default ItemUser4;
