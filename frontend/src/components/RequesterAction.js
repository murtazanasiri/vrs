import React, { useState } from "react";
import { toast } from "react-toastify";
import customFetch from "../utils/CustomFetch";
import { Link, useNavigate } from "react-router-dom";
import { NewRequest } from "../pages";
import Wrapper from "../assets/wrappers/RequesterAction";

const RequesterAction = ({ requestId }) => {
  const navigate = useNavigate();

  const handleDelete = async () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this request?"
    );
    if (confirmed) {
      try {
        await customFetch.delete(`/requests/${requestId}`);
        toast.success("Request deleted successfully");
        navigate("/dashboard");
      } catch (error) {
        toast.error(error?.response?.data?.message);
        return error;
      }
    }
  };

  return (
    <Wrapper>
      <Link to={`../edit-request/${requestId}`} className="btn edit-btn">
        Edit
      </Link>

      <button onClick={handleDelete} className="btn danger-btn">
        Delete
      </button>
    </Wrapper>
  );
};

export default RequesterAction;
