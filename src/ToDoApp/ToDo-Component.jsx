import CommonButton from "../Test/CommonButton";
import ToDoRowComponent from "./ToDo-Row-Component.jsx";
import Container from "./Container-Component.jsx";
import { useState } from "react";
import AddToDoComponent from "./ToDo-Add-Component.jsx";
import ToDoPopupComponent from "./ToDo-Popup-Component.jsx";
import { ToDoContextComponent } from "./ToDoStore/ToDo-Context-Component.jsx";

function ToDoComponent(props) {
  const { DataItem, emptyDataItem } = props;
  const [strHandleEventtxt, setStrHandleEventtxt] = useState("logs - Parent-2");

  const [dataList, setDatalist] = useState(DataItem);
  const [jsonData, setjsonData] = useState(JSON.stringify(DataItem, null, 2));
  const [popupMsgType, setPopupMsgType] = useState("");

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
    setStrHandleEventtxt(`Event - ${event.btnName}`);
    if (event.id === "add") {
      const item = {
        id: dataList.length ? dataList.length + 1 : 1,
        listName: fieldValue.txtListName,
        listDate: fieldValue.dtpDate,
      };
      const newDataList = [...dataList,item];     
      setDatalist(newDataList);
      setjsonData(JSON.stringify(DataItem, null, 2));
      setPopupMsgType("sucess");
      setShowPopup(true);
      setTimeout((time) => {
        setShowPopup(false);
      }, 2000);
    }
  };
  const buttonDeletClick = (dataItem, event) => {
    setStrHandleEventtxt(`Event - ${event.btnName}`);
    if (event.id === "delete") {
      const index = dataList.findIndex((obj) => obj.id === dataItem.id);
      dataList.splice(index, 1);
      setDatalist(dataList);
      setjsonData(JSON.stringify(DataItem, null, 2));
      setPopupMsgType("delete");
      setShowPopup(true);
      setTimeout((time) => {
        setShowPopup(false);
      }, 2000);
    }
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
      <AddToDoComponent AddToDoListItem={AddListItem}></AddToDoComponent>
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
