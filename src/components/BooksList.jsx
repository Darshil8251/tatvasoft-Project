import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const BooksList = () => {
  const navigate = useNavigate();
  const handleButtonclick = () => {
    navigate("/");
  };

  return (
    <>
      <div>book</div>
      <Button
        variant="contained"
        color="info"
        onClick={() => {
          handleButtonclick();
        }}
      >
        Go to Home
      </Button>
    </>
  );
};
export default BooksList;
