import React from "react";
import Wrapper from "../assets/wrappers/FormPage";
import { Form, redirect, useLoaderData } from "react-router-dom";
import { FormRow } from "../components";
import customFetch from "../utils/CustomFetch";
import { toast } from "react-toastify";

export const loader = async ({ params }) => {
  try {
    const { data } = await customFetch.get(`/requests/${params.id}`);
    return { data };
  } catch (error) {
    toast.error(error?.response?.data?.message);
    return redirect("/dashboard");
  }
};

export const action = async ({ request, params }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.put(`/requests/${params.id}`, data);
    toast.success("Request updated successfully");
    return redirect("/dashboard");
  } catch (error) {
    toast.error(error?.response?.data?.message);
    return error;
  }
};

const EditRequest = () => {
  const { data } = useLoaderData();
  console.log(data);
  return (
    <Wrapper>
      <Form method="post" className="form">
        <h1>Edit request</h1>
        <div className="form-center">
          <FormRow
            type="text"
            lableText="Start Location"
            name="startLocation"
            defaultValue={data.startLocation}
          />
          <FormRow
            type="text"
            name="destination"
            defaultValue={data.destination}
          />
          <FormRow
            type="text"
            name="travelDate"
            lableText="Travel Date"
            defaultValue={data.travelDate}
          />
          <FormRow type="text" name="purpose" defaultValue={data.purpose} />
          <FormRow
            type="text"
            name="passengerName"
            lableText="Passenger Name"
            defaultValue={data.passengerName}
          />
          <FormRow
            type="text"
            lableText="Passenger Contact No"
            name="passpassengerContactengerName"
            defaultValue={data.passengerContact}
          />
          <button className="btn btn-block form-btn">Update</button>
        </div>
      </Form>
    </Wrapper>
  );
};

export default EditRequest;
