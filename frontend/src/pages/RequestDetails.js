import React from "react";

import DetailsContainer from "../components/DetailsContainer";
import Wrapper from "../assets/wrappers/RequestDetails";
import RequesterAction from "../components/RequesterAction";

const RequestDetails = () => {
  return (
    <Wrapper>
      <h1>Request Details</h1>
      <DetailsContainer />
      <RequesterAction />
    </Wrapper>
  );
};

export default RequestDetails;
