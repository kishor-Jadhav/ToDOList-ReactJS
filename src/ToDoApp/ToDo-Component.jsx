import CommonButton from "../Test/CommonButton";
import ToDoRowComponent from "./ToDo-Row-Component.jsx";
import Container from "./Container-Component.jsx";
import { useReducer, useState } from "react";
import AddToDoComponent from "./ToDo-Add-Component.jsx";
import ToDoPopupComponent from "./ToDo-Popup-Component.jsx";
import { ToDoContextComponent } from "./ToDoStore/ToDo-Context-Component.jsx";

const ToDoComponentReducer=(currentState,action)=>{
let newDataItem = currentState;
if(action.type=='add-New-Item'){
  const item = {
    id:action.payload.id,
    listName: action.payload.listName,
    listDate: action.payload.listDate,
  };
 
  newDataItem = [...newDataItem,item];
}else if(action.type=='delete-New-Item'){
  const index = newDataItem.findIndex((obj) => obj.id === action.payload.id);
  newDataItem.splice(index, 1);
}
return newDataItem;
}

function ToDoComponent(props) {
  const { DataItem, emptyDataItem } = props;
  const [strHandleEventtxt, setStrHandleEventtxt] = useState("logs - Parent-2");

  
  const [jsonData, setjsonData] = useState(JSON.stringify(DataItem, null, 2));
  const [popupMsgType, setPopupMsgType] = useState("");
 // const [dataList, setDatalist] = useState(DataItem);  //Here we use reduce
  //Reduce Use
  const [dataList, dispatchDatalist] = useReducer(ToDoComponentReducer,DataItem)

  let [showPopup, setShowPopup] = useState(false);

  const btnDelete = {
    btnStyle: "btn btn-outline-danger button-fix-width",
    btnName: "Delete",
    id: "delete",
    type:"button"
  };
  const btnShowHide = {
    btnStyle: "btn btn-outline-success button-fix-width col-1",
    btnName: "Show/Hide",
    id: "showHide",
    type:"button"
  };
  const AddListItem = (event, fieldValue) => {
   // setStrHandleEventtxt(`Event - ${event.btnName}`);
    console.log(fieldValue)
   // if (event.id === "add") {
       //This code call reducer  
       const newItemAction = {
        type: "add-New-Item",
        payload:{ id: dataList.length ? dataList.length + 1 : 1,
          listName: fieldValue.txtListName,
          listDate: fieldValue.dtpDate,}

       }
       dispatchDatalist(newItemAction);
       //////   
      //setDatalist(newDataList);  //use reducer
      setjsonData(JSON.stringify(DataItem, null, 2));
      setPopupMsgType("sucess");
      setShowPopup(true);
      setTimeout((time) => {
        setShowPopup(false);
      }, 2000);
   // }
  };
  const buttonDeletClick = (dataItem, event) => {
    setStrHandleEventtxt(`Event - ${event.btnName}`);
   // if (event.id === "delete") {
    const deleteItemAction = {
      type: "delete-New-Item",
      payload:{ id: dataItem.id }

     }
     dispatchDatalist(deleteItemAction);
      //setDatalist(dataList); //Use reducer
      setjsonData(JSON.stringify(dataList, null, 2));
      setPopupMsgType("delete");

      setShowPopup(true);

      setTimeout(() => {
        setShowPopup(false);
      }, 2000);
   // }
  };

  const showHideComponent = () => {
    if (showPopup) {
      setShowPopup(false);
    } else {
      setShowPopup(true);
    }
  };

  let dataItemRenderList = dataList.map((item) => (
    <ToDoRowComponent
      key={item.id}
      dataItem={item}
      btnProp={btnDelete}
    //  handleDeleteClick={buttonDeletClick} // handle by provider
    />
  ));
  return (
    <ToDoContextComponent.Provider value={{
      addItemList: AddListItem, 
      deleteItemList:buttonDeletClick     
    }     
    }>
    <Container>
      <h3 className="text-left">{strHandleEventtxt}</h3>
      <h1 className="text-center">ToDo List</h1>

      {showPopup && (
        <ToDoPopupComponent msgType={popupMsgType}></ToDoPopupComponent>
      )}
      <AddToDoComponent></AddToDoComponent>
      {emptyDataItem}
      {dataItemRenderList}
      {/*dataList.map((item) => (
        <ToDoRowComponent
          key={item.id}
          dataItem={item}
          btnProp={btnDelete}
          handleLevel2ButtonClick={buttonClick}
        />
      ))*/}
      {jsonData}
    </Container>
    </ToDoContextComponent.Provider>
  );
}
export default ToDoComponent;
