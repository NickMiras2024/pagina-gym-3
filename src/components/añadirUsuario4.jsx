import '../styles/itemUser.css'
import { contextoGood } from '../App';
import { useContext } from 'react';



function ItemUser4({ data,url }) {

    const {ruta}= useContext(contextoGood)

    let nombreArch;

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
