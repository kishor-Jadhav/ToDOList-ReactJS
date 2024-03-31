import "./Css/Common-Button-Css.css";
import { BsPlusCircle ,BsFillTrashFill  } from "react-icons/bs";
function CommonButton({ btnProp ,handleButtonClick}) {
 const buttonClick=()=>{  
  handleButtonClick(btnProp);
 }
  return (
    <>
      {btnProp.type=="button"  && <button type="button" id={btnProp.id} className={btnProp.btnStyle} onClick={buttonClick}>
        {btnProp.id=="add" && <BsPlusCircle  />}
        {btnProp.id=="delete" && <BsFillTrashFill  />}
      </button>}
      {btnProp.type=="submit"  && <button type="submit" id={btnProp.id} className={btnProp.btnStyle} >
        {btnProp.id=="add" && <BsPlusCircle  />}       
      </button>}
    </>
  );
}
export default CommonButton;
