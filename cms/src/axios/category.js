import axios from "axios";
import Swal from "sweetalert2";
import getToken, { apiUrl } from "../config/config";

const url = `${apiUrl}/categories`;

const readCategory = async (cb) => {
  try {
    const result = await axios.get(url);

    console.log(result);
    cb(result.data);
  } catch (error) {
    console.log(error);
  }
};

const readCategoryDetail = async (id, cb) => {
  try {
    const result = await axios.get(`${url}/${id}`);

    console.log(result);
    cb(result.data);
  } catch (error) {
    console.log(error);
  }
};

const createCategory = async (data, cb) => {
  try {
    await axios.post(url, data, {
      headers: { Authorization: getToken.toString() },
    });

    Swal.fire("Success", "Category has been added", "success").then(() => {
      cb(true);
    });
  } catch (error) {
    // console.log(error);
    Swal.fire("Failed", "Failed to create category", "error");
  }
};

const deleteCategory = async (id) => {
  try {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axios.delete(`${url}/${id}`, {
          headers: { Authorization: getToken.toString() },
        });

        Swal.fire("Deleted!", "Category has been deleted.", "success").then(
          () => {
            window.location.reload();
          }
        );
      }
    });
  } catch (error) {
    console.log(error);
    Swal.fire("Failed", "Failed to delete category", "error");
  }
};

const updateCategory = async (id, data, cb) => {
  try {
    const result = await axios.putForm(`${url}/${id}`, data, {
      headers: { Authorization: getToken.toString() },
    });

    console.log(result);
    cb(result);
    Swal.fire("Success", "Succesfully updated the category", "success");
  } catch (error) {
    console.log(error);
    Swal.fire("Failed", "Failed to update category", "error");
  }
};

export {
  readCategory,
  readCategoryDetail,
  createCategory,
  updateCategory,
  deleteCategory,
};
