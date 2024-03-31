import React, { useState } from "react";
import Wrapper from "../assets/wrappers/FormPage";
import customFetch from "../utils/CustomFetch";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SecurityAction = ({ requestId }) => {
  const [approved, setApproved] = useState(1); // Default to pending
  const [comments, setComments] = useState("");
  const navigate = useNavigate();

  const handleApprove = async () => {
    try {
      const response = await customFetch.put(`/security/approve/${requestId}`, {
        approved,
        comments,
      });
      toast.success("Request updated successfully");
      navigate("/dashboard");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <Wrapper>
      <div className="form-center">
        <div className="form-row">
          <label htmlFor="securityAction" className="form-label">
            Security Action
          </label>
          <select
            value={approved}
            onChange={(e) => setApproved(e.target.value)}
            name="securityAction"
            id="securityAction"
            className="form-select"
          >
            <option value={1}>Pending</option>
            <option value={2}>Reject</option>
            <option value={3}>Approve</option>
          </select>
        </div>
        <div className="form-row">
          <label htmlFor="securityComment" className="form-label">
            Comment
          </label>
          <textarea
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            placeholder="Comments (optional)"
            type="text"
            id="securityComment"
            name="securityComment"
            className="form-input"
          ></textarea>
        </div>
      </div>
      <button type="submit" onClick={handleApprove} className="btn form-btn">
        Submit
      </button>
    </Wrapper>
  );
};

export default SecurityAction;
