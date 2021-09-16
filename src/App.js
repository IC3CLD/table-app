import { useEffect } from "react";
import "./App.css";
import Table from "./components/Table/Table";
import Form from "./components/Form/Form";
import Select from "./components/Select/Select";
import { useDispatch } from "react-redux";
import { getUsersOperation } from "./Redux/operations";
import UserInfo from "./components/UserInfo/UserInfo";
import { getUser } from "./Redux/selectors";
import { useSelector } from "react-redux";
import Pagination from "./components/Pagination/Pagination";

function App() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => getUser(state));


  useEffect(() => {
    dispatch(getUsersOperation());
  }, [dispatch]);

  return (
    <div className="App">
      <Form />
      <Select />
      <Table />
      <Pagination/>
      <div>
        <p>Profile info:</p>
        {currentUser && <UserInfo user={currentUser} />}
      </div>
    </div>
  );
}

export default App;
