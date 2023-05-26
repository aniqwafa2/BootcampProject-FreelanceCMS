import axios from "axios";
import Swal from "sweetalert2";
import { apiUrl } from "../config/config";
import { getToken } from "../helpers";

const url = `${apiUrl}/users`;

const readUser = async (cb) => {
  try {
    const result = await axios.get(url);

    console.log(result);
    cb(result.data);
  } catch (error) {
    console.log(error);
  }
};

const readUserDetail = async (id, cb) => {
  try {
    const result = await axios.get(`${url}/${id}`, {
      headers: { Authorization: getToken() },
    });

    console.log(result);
    cb(result.data);
  } catch (error) {
    console.log(error);
  }
};

const createUser = async (data, cb) => {
  try {
    await axios.post(`${url}/register`, data);

    Swal.fire("Success", "User has been added", "success").then(() => {
      cb(true);
    });
  } catch (error) {
    // console.log(error);
    Swal.fire("Failed", "Failed to create user", "error");
  }
};

const loginUser = async (data, cb) => {
  try {
    const result = await axios.post(`${url}/login`, data);

    let check = result.data.access_token.split(".")[1];
    check = JSON.parse(atob(check));
    if (check.role !== 1) {
      return Swal.fire("Not Authorized", "Bapak admin bukan?", "error").then(
        () => {
          cb(2);
        }
      );
    }

    const authData = `${result.data.type} ${result.data.access_token}`;

    localStorage.setItem("access_token", authData);
    cb(1);
  } catch (error) {
    // console.log(error);
    if (error.response.status === 500) {
      return Swal.fire("Failed", error.response.data.error.name, "error");
    }

    let timerInterval;
    Swal.fire({
      title: "Failed",
      text: "failed to login, email or password is incorrect",
      timer: 2000,
      timerProgressBar: true,
      willClose: () => {
        clearInterval(timerInterval);
      },
    });
  }
};

export { readUser, readUserDetail, createUser, loginUser };
