import CommonButton from "../Test/CommonButton";
function ToDoRowComponent(props) {
    let {dataItem,btnProp ,handleDeleteClick} = props;
    const buttonDeleteClick = (event) => {
      if(dataItem){
          console.log(event)
          console.log(`Button Click  - ${dataItem.listName}`)
          handleDeleteClick(dataItem,btnProp);
      }
    };
  return (
    <div className="row mb-3">
      <div className="col-5">{dataItem.listName}</div>
      <div className="col-4">{dataItem.listDate}</div>
      <div className="col text-center">
        <CommonButton btnProp={btnProp}  handleButtonClick={buttonDeleteClick} />
      </div>
    </div>
  );
}
export default ToDoRowComponent;
