import React from "react";
// react plugin for creating charts
// @material-ui/core
import {makeStyles} from "@material-ui/core/styles";
// @material-ui/icons
// core components

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import RecipeReviewCard from "../../components/Post/Post";

const useStyles = makeStyles(styles);

export default function Feed() {
  const classes = useStyles();
  return (
    <div>
      <RecipeReviewCard/>
    </div>
  );
}
