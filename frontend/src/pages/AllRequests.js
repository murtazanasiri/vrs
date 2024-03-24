import React, { useContext, createContext } from "react";
import customFetch from "../utils/CustomFetch";
import { toast } from "react-toastify";
import { useLoaderData } from "react-router-dom";
import RequestContainer from "../components/RequestContainer";

export const loader = async () => {
  try {
    const { data } = await customFetch.get("/requests");
    return { data };
  } catch (error) {
    toast.error(error?.response?.data?.message);
    return error;
  }
};

const AllRequestsContext = createContext();

const AllRequests = () => {
  const { data } = useLoaderData();
  return (
    <AllRequestsContext.Provider value={{ data }}>
      <RequestContainer />
    </AllRequestsContext.Provider>
  );
};

export const useAllRequestContext = () => useContext(AllRequestsContext);
export default AllRequests;
