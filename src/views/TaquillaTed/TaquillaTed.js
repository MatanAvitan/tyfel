/*!

=========================================================
* Black Dashboard React v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";

// reactstrap components
import {
    Button,
    ButtonGroup,
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    Label,
    FormGroup,
    Input,
    Table,
    Row,
    Col,
    UncontrolledTooltip,
} from "reactstrap";

// core components
import {
    chartExample1,
    chartExample2,
    chartExample3,
    chartExample4,
} from "variables/charts.js";

function TaquillaTed(props) {
    const [bigChartData, setbigChartData] = React.useState("data1");
    const setBgChartData = (name) => {
        setbigChartData(name);
    };
    return (
        <>
            <div className="content">
                    <Col lg="13" md="14">
                        <Card>
                            <CardHeader>
                                <CardTitle tag="h4">Upcoming Events</CardTitle>
                            </CardHeader>
                            <CardBody>
                                <Table className="tablesorter" responsive>
                                    <thead className="text-primary">
                                    <tr>
                                        <th>Lecturer Name</th>
                                        <th>Topic</th>
                                        <th>Target Audience</th>
                                        <th className="text-center">When</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>Dakota Rice</td>
                                        <td>5 ways to improve</td>
                                        <td>Everyone</td>
                                        <td className="text-center">18/5</td>
                                    </tr>
                                    <tr>
                                        <td>Minerva Hooper</td>
                                        <td>Mindfulness</td>
                                        <td>stressed individuals</td>
                                        <td className="text-center">19/5</td>
                                    </tr>
                                    <tr>
                                        <td>Sage Rodriguez</td>
                                        <td>Mixing Drinks</td>
                                        <td>Legal Adults</td>
                                        <td className="text-center">21/5</td>
                                    </tr>
                                    <tr>
                                        <td>Philip Chaney</td>
                                        <td>Global Warming</td>
                                        <td>everyone Who Cares</td>
                                        <td className="text-center">24/5</td>
                                    </tr>
                                    <tr>
                                        <td>Doris Greene</td>
                                        <td>How To Win EVERYTHING</td>
                                        <td>DCS</td>
                                        <td className="text-center">32/5</td>
                                    </tr>
                                    <tr>
                                        <td>Mason Porter</td>
                                        <td>LET DCS WIN</td>
                                        <td>the Judges</td>
                                        <td className="text-center">7/5</td>
                                    </tr>
                                    <tr>
                                        <td>Jon Porter</td>
                                        <td>Hi-Tech</td>
                                        <td>Entry level Engeineers</td>
                                        <td className="text-center">15/6</td>
                                    </tr>
                                    <tr>
                                        <td>Jon Porter</td>
                                        <td>Yoga</td>
                                        <td>Yogies</td>
                                        <td className="text-center">20/6</td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </CardBody>
                        </Card>
                    </Col>

            </div>
        </>
    );
}

export default TaquillaTed;
