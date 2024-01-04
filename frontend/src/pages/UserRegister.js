import React from "react";
import { Link, Form, redirect, useNavigation } from "react-router-dom";

import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { Logo, FormRow, FormRowSelect } from "../components";
import { USER_ROLE, USER_DEP } from "../dummyData/constants";
import customFetch from "../utils/CustomFetch";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    const response = await customFetch.post("/auth/register", data);
    console.log(response);
    toast.success(response?.data?.message);
    return redirect("/");
  } catch (error) {
    toast.error(error?.response?.data?.message);
    return error;
  }
};

const UserRegiser = () => {
  const navigation = useNavigation();
  console.log(navigation);
  const isSubmitting = navigation.state === "submitting";

  return (
    <Wrapper>
      <Form method="post" className="form">
        <Logo />
        <h4>Register</h4>
        <FormRow type="text" name="name" />
        <FormRow type="text" name="lastName" lableText="last name" />
        <FormRow type="number" name="contactNo" lableText="Contact No" />
        <FormRow type="email" name="email" />
        <FormRowSelect
          labelText="user role"
          name="roleName"
          defaultValue={USER_ROLE.REQUESTER}
          list={Object.values(USER_ROLE)}
        />
        <FormRowSelect
          lableText="department"
          name="departmentName"
          defaultValue={USER_DEP.IT}
          list={Object.values(USER_DEP)}
        />
        <FormRow type="password" name="password" />

        <button type="submit" className="btn btn-block" disabled={isSubmitting}>
          {isSubmitting ? "submitting..." : "submit"}
        </button>
        <p>
          Already a member?
          <Link to="/" className="member-btn">
            Login
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};

export default UserRegiser;
