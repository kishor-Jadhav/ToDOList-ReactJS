import style from './Css/ToDo-Popup-Component.module.css'
const ToDoPopupComponent = (props)=>{
    const {msgType} = props
    let msgStyle;
    let popupSuccessMsg;
    if(msgType=='sucess'){
        msgStyle = "alert alert-success";
        popupSuccessMsg = "New item added successfuly......"
    }else if(msgType=='delete'){
        msgStyle = "alert alert-danger";
        popupSuccessMsg = "Item deleted successfuly......"
    }
    
    return <div className={` ${msgStyle} text-center mb-3`}> <span>{popupSuccessMsg}</span></div>
}
export default ToDoPopupComponent