import React from "react";
// react plugin for creating charts
// @material-ui/core
import {makeStyles} from "@material-ui/core/styles";
// @material-ui/icons
// core components

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import RecipeReviewCard from "../../components/Post/Post";
import Grid from "@material-ui/core/Grid";

class Feed extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            posts: [],
        }
    }

    fetchData = async () => {
        const a = await fetch('http://localhost:80/posts'
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        );
        return a.json();
    }

    async componentDidMount() {
        const posts = await this.fetchData();
        this.setState({posts});
    }

    render() {
        return (
            <Grid container spacing={2}>
                {this.state.posts.map(item => <RecipeReviewCard username={item.username}
                                                                creation_date={item.creation_date}
                                                                title={item.title}
                                                                body={item.body}
                                                                image_path={item.image_path}
                                                                comments={item.comments}/>)}
            </Grid>
        )
    }
}

export default Feed
