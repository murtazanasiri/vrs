import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Wrapper from "../assets/wrappers/FormPage";
import customFetch from "../utils/CustomFetch";
import { toast } from "react-toastify";

const HODAction = ({ requestId }) => {
  const [approved, setApproved] = useState(1); // Default to pending
  const [comments, setComments] = useState("");
  const navigate = useNavigate();

  const handleApprove = async () => {
    try {
      const response = await customFetch.put(`/hod/approve/${requestId}`, {
        approved,
        comments,
      });
      toast.success("Request updated successfully");
      navigate("/dashboard");
    } catch (error) {
      toast.error(error?.response?.data?.message);
      return error;
    }
  };

  return (
    <Wrapper>
      <div className="form-center">
        <div className="form-row">
          <label htmlFor="hodAction" className="form-label">
            HOD Action
          </label>
          <select
            value={approved}
            onChange={(e) => setApproved(e.target.value)}
            name="hodAction"
            id="hodAction"
            className="form-select"
            defaultValue=""
          >
            <option value={1}>Pending</option>
            <option value={2}>Reject</option>
            <option value={3}>Approve</option>
          </select>
        </div>
        <div className="form-row">
          <label htmlFor="hodComment" className="form-label">
            Commment
          </label>
          <textarea
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            placeholder="Comments (optional)"
            type="text"
            id="hodComment"
            name="hodComment"
            className="form-input"
          ></textarea>
        </div>
      </div>
      <button type="submit" onClick={handleApprove} className="btn form-btn">
        submit
      </button>
    </Wrapper>
  );
};

export default HODAction;
