import { useContext } from 'react'
import '../styles/barraNav.css'
import { contextoGood } from '../App'
import hombre from  '../assets/hombre.png'






const BarraNav = ({text}) => {

    const {getI,cerrar,setI,setC} = useContext(contextoGood)


    const IC = () => {
        if (window.localStorage.getItem('usuario') && !cerrar) {
            JSON.parse(window.localStorage.getItem('usuario'))
            setC(true)
        } else if(window.localStorage.getItem('usuario') && cerrar) {
            setC(false)
            window.localStorage.removeItem('usuario')
            window.location.reload()
        }else{
            setI(!getI)
            // console.log(getI)
        }
    }

    return (
        <div className="barraNav">
            <img  src={hombre} alt="" className='imgLogo' onClick={()=>{
                window.location.reload()
            }} />

            <button className="btnN" onClick={IC}>{text}</button>
        </div>
    );
}

export default BarraNav;
