import axios from "axios";
import Swal from "sweetalert2";
import getToken, { apiUrl } from "../config/config";

const url = `${apiUrl}/applicants`;

const readApplicant = async (cb) => {
  try {
    const result = await axios.get(url);

    console.log(result);
    cb(result.data);
  } catch (error) {
    console.log(error);
  }
};

const readApplicantByJob = async (jobId, cb) => {
  try {
    const result = await axios.get(`${url}/find/job/${jobId}`);

    // console.log(result.data);
    cb(result.data);
  } catch (error) {
    console.log(error);
  }
};

const readApplicantDetail = async (jobId, cb) => {
  try {
    const result = await axios.get(`${url}/find?jobId=${jobId}`);

    console.log(result);
    cb(result.data);
  } catch (error) {
    console.log(error);
  }
};

const deleteApplicantbyUserId = async (id) => {
  try {
    Swal.fire({
      title: "Are you sure?",
      text: "This action will delete all request by this applicant \nYou won't be able to revert this!",
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

        Swal.fire(
          "Deleted!",
          "All request by this applicant has been deleted.",
          "success"
        ).then(() => {
          window.location.reload();
        });
      }
    });
  } catch (error) {
    console.log(error);
    Swal.fire("Failed", "Failed to delete request for this applicant", "error");
  }
};

const acceptApplicant = async (jobId, userId, cb) => {
  try {
    Swal.fire({
      title: "Are you sure?",
      text: "This action will accept this user application for this job.",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Accept this applicant!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const result = await axios.put(
          `${url}/accept?jobId=${jobId}&userId=${userId}`,
          {},
          {
            headers: { Authorization: getToken() },
          }
        );

        console.log(result);
        cb(result);
        Swal.fire("Success", "Succesfully accepted the applicant", "success");
      }
    });
  } catch (error) {
    console.log(error);
    Swal.fire("Failed", "Failed to accept applicant", "error");
  }
};

export {
  readApplicant,
  readApplicantByJob,
  readApplicantDetail,
  acceptApplicant,
  deleteApplicantbyUserId,
};
