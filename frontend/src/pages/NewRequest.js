import React from "react";
import Wrapper from "../assets/wrappers/FormPage";
import {
  Form,
  redirect,
  useNavigation,
  useOutletContext,
} from "react-router-dom";
import { FormRow } from "../components";
import customFetch from "../utils/CustomFetch";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post("/requests/new-request", data);
    toast.success("Request added successfully");
    return redirect("/dashboard");
  } catch (error) {
    toast.error(error?.response?.data?.message);
    return error;
  }
};

const NewRequest = () => {
  const { user } = useOutletContext();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <Wrapper>
      <Form method="post" className="form">
        <h1 className="form-title">new request</h1>
        <div className="form-center">
          <FormRow
            type="text"
            name="startLocation"
            lableText="Start Locstion"
          />
          <FormRow
            type="text"
            name="destination"
            lableText="Destination Location"
          />
          <FormRow type="date" name="travelDate" lableText="travel date" />
          <FormRow type="text" name="purpose" lableText="purpose" />
          <FormRow
            type="text"
            name="passengerName"
            lableText="passenger name"
          />
          <FormRow
            type="number"
            name="passengerContact"
            lableText="passenger contact"
          />
          <button
            type="submit"
            className="btn btn-block form-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? "submitting" : "submit"}
          </button>
        </div>
      </Form>
    </Wrapper>
  );
};

export default NewRequest;
