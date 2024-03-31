import React, { useState, useEffect } from "react";
import Wrapper from "../assets/wrappers/FormPage";
import { useNavigate } from "react-router-dom";
import customFetch from "../utils/CustomFetch";
import { toast } from "react-toastify";

const TransportAction = ({ requestId }) => {
  const [drivers, setDrivers] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [selectedDriver, setSelectedDriver] = useState("");
  const [selectedVehicle, setSelectedVehicle] = useState("");
  const [comments, setComments] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchDrivers();
    fetchVehicles();
  }, []);

  const fetchDrivers = async () => {
    try {
      const response = await customFetch.get("/transport/drivers");
      setDrivers(response.data);
    } catch (error) {
      toast.error("Failed to fetch drivers");
    }
  };

  const fetchVehicles = async () => {
    try {
      const response = await customFetch.get("/transport/vehicles");
      setVehicles(response.data);
    } catch (error) {
      toast.error("Failed to fetch vehicles");
    }
  };

  const handleAssign = async () => {
    try {
      const response = await customFetch.put(`/transport/assign/${requestId}`, {
        driver: selectedDriver,
        vehicle: selectedVehicle,
        comments,
      });
      toast.success("Driver and vehicle assigned successfully");
      navigate("/dashboard");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <Wrapper>
      <div className="form-center">
        <div className="form-row">
          <label htmlFor="driver" className="form-label">
            Select Driver
          </label>
          <select
            value={selectedDriver}
            onChange={(e) => setSelectedDriver(e.target.value)}
            name="driver"
            id="driver"
            className="form-select"
          >
            <option value="">Select Driver</option>
            {drivers.map((driver) => (
              <option key={driver._id} value={driver._id}>
                {driver.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-row">
          <label htmlFor="vehicle" className="form-label">
            Select Vehicle
          </label>
          <select
            value={selectedVehicle}
            onChange={(e) => setSelectedVehicle(e.target.value)}
            name="vehicle"
            id="vehicle"
            className="form-select"
          >
            <option value="">Select Vehicle</option>
            {vehicles.map((vehicle) => (
              <option key={vehicle._id} value={vehicle._id}>
                {vehicle.model}
              </option>
            ))}
          </select>
        </div>
        <div className="form-row">
          <label htmlFor="transportComment" className="form-label">
            Comment
          </label>
          <textarea
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            placeholder="Comments (optional)"
            type="text"
            id="transportComment"
            name="transportComment"
            className="form-input"
          ></textarea>
        </div>
      </div>
      <button type="submit" onClick={handleAssign} className="btn form-btn">
        Assign
      </button>
    </Wrapper>
  );
};

export default TransportAction;
