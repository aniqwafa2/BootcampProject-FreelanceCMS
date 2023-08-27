import axios from "axios";
import Swal from "sweetalert2";
import { apiUrl } from "../config/config";

const url = `${apiUrl}/messages`;

const readMessage = async (id, cb) => {
  try {
    const result = await axios.get(`${url}/${id}`);

    // console.log(result);
    cb(result.data);
  } catch (error) {
    console.log(error);
  }
};

const readMessageDetail = async (contactId, cb) => {
  try {
    const result = await axios.get(
      `${url}/detail/${contactId}?order=descending`
    );

    // console.log(result.data);
    cb(result.data);
  } catch (error) {
    console.log(error);
  }
};

const postMessage = async (data, cb) => {
  try {
    const result = await axios.post(url, data);

    // console.log(result);
    cb(result.data);
  } catch (error) {
    console.log(error);
    Swal.fire("Failed", "Failed to sent message", "error");
  }
};

export { readMessage, readMessageDetail, postMessage };
