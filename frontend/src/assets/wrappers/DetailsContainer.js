import React from "react";

import { FaCheckCircle, FaRegTimesCircle } from "react-icons/fa";

const DetailsContainer = () => {
  return (
    <div>
      <table>
        <tr>
          <td className="title">ID</td>
          <td className="content">65991c6c50112991d86f67a1</td>
        </tr>
        <tr>
          <td className="title">Created At</td>
          <td className="content">2021-10-04 09:50 am</td>
        </tr>
        <tr>
          <td className="title">Requestor</td>
          <td className="content">
            Murtaza Nasiri / <b>0442375285</b> / murtazanasiri1991@gmail.com
          </td>
        </tr>
        <tr>
          <td className="title">Status</td>
          <td className="content">
            <b>security approved</b>
          </td>
        </tr>
        <tr>
          <td className="title">Start Location</td>
          <td className="content">Helsinki</td>
        </tr>
        <tr>
          <td className="title">Travel Date</td>
          <td className="content">2021-10-04 09:50 am</td>
        </tr>
        <tr>
          <td className="title">Destination Location</td>
          <td className="content">Vantaa</td>
        </tr>
        <tr>
          <td className="title">Purpose</td>
          <td className="content">meeting</td>
        </tr>
        <tr>
          <td className="title">Passenger Name</td>
          <td className="content">John Smith</td>
        </tr>
        <tr>
          <td className="title">Passenger Contact</td>
          <td className="content">+358442375285</td>
        </tr>
        <tr>
          <td className="title">Head of department</td>
          <td className="content">
            <FaCheckCircle /> approved by <b>John IT</b> at 2021-10-04 09:50 am
          </td>
        </tr>
        <tr>
          <td className="title">Transport</td>
          <td className="content">
            <FaCheckCircle /> approved by <b>Transport Team</b> at 2021-10-04
            09:50 am
          </td>
        </tr>

        <tr>
          <td className="title">Security</td>
          <td className="content">
            <FaRegTimesCircle /> approved by <b>Transport Team</b> at 2021-10-04
            09:50 am
          </td>
        </tr>
      </table>
      <hr />
    </div>
  );
};

export default DetailsContainer;
