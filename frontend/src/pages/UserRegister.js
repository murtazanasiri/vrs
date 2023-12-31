import React from "react";
import { Link } from "react-router-dom";

import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { Logo, FormRow, FormRowSelect } from "../components";
import { USER_ROLE, USER_DEP } from "../dummyData/constants";

const UserRegiser = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h4>Register</h4>
        <FormRow type="text" name="name" />
        <FormRow type="text" name="lastName" lableText="last name" />
        <FormRow type="email" name="email" />
        <FormRowSelect
          labelText="user role"
          name="userRole"
          defaultValue={USER_ROLE.REQUESTER}
          list={Object.values(USER_ROLE)}
        />
        <FormRowSelect
          lableText="department"
          name="userDep"
          defaultValue={USER_DEP.IT}
          list={Object.values(USER_DEP)}
        />
        <FormRow type="password" name="password" />

        <button type="submit" className="btn btn-block">
          submit
        </button>
        <p>
          Already a member?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};

export default UserRegiser;
