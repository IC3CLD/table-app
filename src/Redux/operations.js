import axios from "axios";
import { setUsers } from "./usersSlice";

export const getUsersOperation = () => async (dispatch) => {
  try {
    const result = await axios.get(
      "https://itrex-react-lab-files.s3.eu-central-1.amazonaws.com/react-test-api.json"
    );
    dispatch(setUsers(result.data))
  } catch (error) {
    console.log(error);
  }
};
