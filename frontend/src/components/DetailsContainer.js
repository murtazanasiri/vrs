import React from "react";

import { FaCheckCircle, FaRegTimesCircle } from "react-icons/fa";

import advancedFormat from "dayjs/plugin/advancedFormat";
import day from "dayjs";

const DetailsContainer = ({ data }) => {
  const date = day(data.created_at).format("MMM Do, YYYY");
  const travelDate = day(data.travelDate).format("MMM Do, YYYY, HH:MM");
  const updatedDate = day(data.HODUpdatedAt).format("MMM Do, YYYY, HH:MM");

  return (
    <div>
      <table>
        <tr>
          <td className="title">Request ID</td>
          <td className="content">{data._id}</td>
        </tr>
        <tr>
          <td className="title">Created Date Time</td>
          <td className="content">{date}</td>
        </tr>
        <tr>
          <td className="title">Requestor</td>
          <td className="content">
            {data.userData.name} / <b>{data.userData.contactNo}</b> /{" "}
            {data.userData.email}
          </td>
        </tr>
        <tr>
          <td className="title">Status</td>
          <td className="content">
            <b>{data.status}</b>
          </td>
        </tr>
        <tr>
          <td className="title">Start Location</td>
          <td className="content">{data.startLocation}</td>
        </tr>
        <tr>
          <td className="title">Travel Date</td>
          <td className="content">{travelDate}</td>
        </tr>
        <tr>
          <td className="title">Destination Location</td>
          <td className="content">{data.destination}</td>
        </tr>
        <tr>
          <td className="title">Purpose</td>
          <td className="content">{data.purpose}</td>
        </tr>
        <tr>
          <td className="title">Passenger Name</td>
          <td className="content">{data.passengerName}</td>
        </tr>
        <tr>
          <td className="title">Passenger Contact</td>
          <td className="content">{data.passengerContact}</td>
        </tr>
        <tr>
          <td className="title">Head of department</td>
          <td className="content">
            {data.hodApproval.approved !== 1 ? (
              <span>
                <FaCheckCircle /> approved by <b>HOD Team</b> at {updatedDate}
              </span>
            ) : (
              "Pending for HOD"
            )}
          </td>
        </tr>
        <tr>
          <td className="title">Transport</td>
          <td className="content">
            {data.transportAssignment?.driver ? (
              <span>
                <FaCheckCircle /> approved by <b>Transport Team</b> at{" "}
                {updatedDate}
              </span>
            ) : (
              "Pending for Transport"
            )}
          </td>
        </tr>

        <tr>
          <td className="title">Security</td>
          <td className="content">
            {data.securityApproval.approved !== 1 ? (
              <span>
                <FaRegTimesCircle /> approved by <b>Transport Team</b> at
                2021-10-04 09:50 am
              </span>
            ) : (
              "Pending for Security"
            )}
          </td>
        </tr>
      </table>
      <hr />
    </div>
  );
};

export default DetailsContainer;
