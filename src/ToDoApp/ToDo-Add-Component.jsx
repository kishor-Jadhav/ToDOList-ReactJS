import { useContext, useRef, useState } from "react";
import CommonButton from "../Test/CommonButton";
import { ToDoContextComponent } from "./ToDoStore/ToDo-Context-Component";

const AddToDoComponent = () => {
 // const { AddToDoListItem } = props; hadle with context
  const {addItemList} = useContext(ToDoContextComponent);
  

  const [txtListName, setTxtListName] = useState("Test");
  const [dtpDate, setdtpDate] = useState(""); // Instead of use useRef
  const reftxtListName = useRef('Test');
  const refdtpDate = useRef('')

  const btnAdd = {
    btnStyle: "btn btn-outline-success button-fix-width",
    btnName: "Add",
    id: "add",
    type: "submit",
  };

  const AddListItem = (event) => {
    event.preventDefault();
   // const fieldValue = { txtListName: txtListName, dtpDate: dtpDate }; 
    const fieldValue = { txtListName: reftxtListName.current.value, dtpDate: refdtpDate.current.value }; //using ref
    const evItem = {
      btnStyle: "btn btn-outline-success button-fix-width",
      btnName: "Add",
      id: "add",
      type: "submit",
    };
    addItemList(evItem, fieldValue);
    reftxtListName.current.value="";
    refdtpDate.current.value="";
  };
  const onChangeText = (event) => {
    setTxtListName(event.target.value);
  };
  const onDateChange = (event) => {
    setdtpDate(event.target.value);
  };
  return (
    <form onSubmit={AddListItem}>
      <div className="row text-center mb-3">
        <div className="col-5">
          <input
            type="text"
            className="form-control"
            placeholder="Enter ToDO List"
          //  value={txtListName}
           // onChange={onChangeText}
           ref={reftxtListName}
          ></input>
        </div>
        <div className="col-4">
          <input
            type="Date"
            className="form-control"
           // value={dtpDate}
           // onChange={onDateChange}
           ref={refdtpDate}
          ></input>
        </div>
        <div className="col">
          <CommonButton btnProp={btnAdd} />
        </div>
      </div>
    </form>
  );
};
export default AddToDoComponent;
