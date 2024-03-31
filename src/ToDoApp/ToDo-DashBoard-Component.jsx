
import ToDoComponent from './ToDo-Component'
function ToDo_DashBoard() {
  let strHandleEventtxt = 'Handle evets show - Parent-1'
  const DataItem = [
    { id:1, listName: "Buy Milk", listDate: "4/4/2024" },
    { id:2, listName: "Go To School", listDate: "5/4/2024" },
    { id:3, listName: "Buy Milk", listDate: "4/4/2024" },
    { id:4, listName: "Go To School", listDate: "5/4/2024" }
  ];  
  
  
  let emptyDataItem = DataItem.length===0?<h3>Empty ToDo List</h3>: null; // If Condition
  return (
   <>   
    <h3 className="text-left">{strHandleEventtxt}</h3>
   <ToDoComponent DataItem={DataItem} emptyDataItem={emptyDataItem} />
   </>
  );
}
export default ToDo_DashBoard;
