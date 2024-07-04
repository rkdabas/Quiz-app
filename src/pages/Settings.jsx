import React from "react";
import { Button, Typography, Box, CircularProgress } from "@mui/material";
import SelectField from "../components/SelectField";
import TextFieldComp from "../components/TextFieldComp";
import useAxios from "../hooks/useAxios";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const { response, error, loading } = useAxios({ url: "/api_category.php" });
  const navigate = useNavigate();
  // console.log(response);
  if (loading) {
    return (
      <Box mt={20}>
        <CircularProgress />
      </Box>
    );
  }
  if (error) {
    return (
      <Typography variant="h6" mt={20} color="red">
        Something went wrong
      </Typography>
    );
  }

  const difficultyOptions = [
    { id: "easy", name: "Easy" },
    { id: "medium", name: "Medium" },
    { id: "hard", name: "Hard" },
  ];

  const typeOptions = [
    { id: "multiple", name: "multiple Choice" },
    { id: "boolean", name: "True/False" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/questions");
  };
  return (
    <>
      <Typography variant="h2" fontWeight="bold">
        Quiz app
      </Typography>
      <div>Settings</div>
      
      <form onSubmit={handleSubmit}>
        <SelectField options={response.trivia_categories} label="category" />
        <SelectField options={difficultyOptions} label="difficulty" />
        <SelectField options={typeOptions} label="type" />
        <TextFieldComp />
        <Box mt={3} widht="100%">
          <Button fullWitdth variant="contained" type="submit">
            Get Started
          </Button>
        </Box>
      </form>
    </>
  );
};

export default Settings;
