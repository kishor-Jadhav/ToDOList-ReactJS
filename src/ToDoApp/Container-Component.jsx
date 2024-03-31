 
import style from './Css/Container-Component.module.css'
let Container =(props)=>{
    return  <div className={`container p-3 ${style['container-page']}`}>{props.children}</div>
}
 export default Container;