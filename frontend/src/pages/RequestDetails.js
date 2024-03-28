import React from "react";

import Wrapper from "../assets/wrappers/RequestDetails";
import RequesterAction from "../components/RequesterAction";
import DetailsContainer from "../components/DetailsContainer";
import { redirect, useLoaderData, useParams } from "react-router-dom";
import customFetch from "../utils/CustomFetch";
import { toast } from "react-toastify";
import HODAction from "../components/HODAction";
import { useDashboardContext } from "../pages/DashboardLayout";

export const loader = async ({ params }) => {
  try {
    const { data } = await customFetch.get(`/requests/${params.id}`);
    return { data };
  } catch (error) {
    toast.error(error?.response?.data?.message);
    return redirect("/dashboard");
  }
};

const RequestDetails = () => {
  const { user } = useDashboardContext();
  const { data } = useLoaderData();
  const { id } = useParams();

  const roleName = user?.role?.name;
  console.log(roleName);

  return (
    <Wrapper>
      <h1>Request Details</h1>
      <DetailsContainer data={data} />
      {roleName === "requester" && <RequesterAction requestId={id} />}
      {roleName === "hod" && <HODAction requestId={id} />}
    </Wrapper>
  );
};

export default RequestDetails;
