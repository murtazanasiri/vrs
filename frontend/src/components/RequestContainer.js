import React from "react";
import Wrapper from "../assets/wrappers/AllRequest";
import { useAllRequestContext } from "../pages/AllRequests";
import day from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import { Link } from "react-router-dom";
day.extend(advancedFormat);

const RequestContainer = () => {
  const { data } = useAllRequestContext();

  if (data.length === 0) {
    return (
      <Wrapper>
        <h1>No request to display...</h1>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h1>All Requests </h1>
      <div className="tbl-header">
        <table>
          <thead>
            <tr>
              <th>Start Location</th>
              <th>Destination</th>
              <th>Travel Date</th>
              <th>Purpose</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
        </table>
      </div>
      <div className="tbl-content">
        <table>
          <tbody>
            {data.map((data) => {
              const date = day(data.travelDate).format("MMM Do, YYYY");
              return (
                <tr key={data._id}>
                  <td>{data.startLocation}</td>
                  <td>{data.destination}</td>
                  <td>{date}</td>
                  <td>{data.purpose}</td>
                  <td>{data.status}</td>
                  <td>
                    <Link
                      to={`/dashboard/request-details/${data._id}`}
                      className="btn"
                    >
                      Details
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Wrapper>
  );
};

export default RequestContainer;
