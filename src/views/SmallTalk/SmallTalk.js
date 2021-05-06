import React from "react";
// react plugin for creating charts
// @material-ui/core
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import VideocamIcon from '@material-ui/icons/Videocam';
// @material-ui/icons
// core components

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import RecipeReviewCard from "../../components/Post/Post";


const useStyles = makeStyles(styles);

class SmallTalk extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            url:''
        }
    }

    fetchData = async () => {
        const a = await fetch('http://localhost:80/small_talk');
        return a.text();
    }

    async componentDidMount() {
        const url = await this.fetchData();
        window.open(url);
    }

    render() {
        return (
            <div>
                <Button onClick={this.fetchData}>
                    Start conversation
                </Button>
            </div>
        )
    }
}

export default SmallTalk




