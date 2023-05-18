import React from "react";
import { dateFormat, priceFormat } from "../../../helpers";

const JobDetail = (props) => {
  return (
    <div>
      <h5 className="card-subtitle mb-2 text-body-secondary fw-bold">
        {props.data.name}
      </h5>
      <small className="card-text text-secondary fs-6">
        Posted in {dateFormat(props.data.createdAt)}
      </small>

      <div className="text-center mt-2 lh-sm">
        <div className="row row-cols-lg-3 g-lg-3">
          <div className="col me-2">
            <div className="py-2 border border-2 rounded-4 fw-bold">
              Rp. {priceFormat(props.data.price)} <br />
              <span className="text-secondary fs-6 mono">Fixed-price</span>
            </div>
          </div>
          <div className="col me-2">
            <div className="py-2 border border-2 rounded-4 fw-bold">
              14 Days <br />
              <span className="text-secondary fs-6 mono">Duration</span>
            </div>
          </div>
        </div>
      </div>

      <p className="card-text text-container text-secondary lh-sm mt-2 display-endline">
        {props.data.description}
      </p>

      <div className="row row-cols-auto small fw-bold text-secondary">
        <div className="card-text text-secondary fs-6">Category:</div>
        <div className="col lh-sm m-1 ms-2 rounded-4 bg-light">
          {props.data.category.name}
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
