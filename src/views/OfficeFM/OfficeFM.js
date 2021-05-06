import React from "react";
// react plugin for creating charts
// @material-ui/core
import {makeStyles} from "@material-ui/core/styles";
// @material-ui/icons
// core components
import SpotifyPlayer from 'react-spotify-player';

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import RecipeReviewCard from "../../components/Post/Post";

const size = {
    width: '100%',
    height: '500',
};
const view = 'list'; // or 'coverart'
const theme = 'black'; // or 'white'
const useStyles = makeStyles(styles);

export default function OfficeFM() {
    const classes = useStyles();
    return (
        <div>
            <SpotifyPlayer
                uri="spotify:playlist:5RrUx8Wgoaokc2TDkG7z2T"
                size={size}
                view={view}
                theme={theme}
            />
        </div>
    );
}
