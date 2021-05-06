/*!

=========================================================
* Material Feed React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
// core components/views for Admin layout
import Feed from "views/Feed/Feed.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import OfficeFM from "views/OfficeFM/OfficeFM.js";
// core components/views for RTL layout
import SmallTalk from "./views/SmallTalk/SmallTalk";
import EmojiFoodBeverageIcon from '@material-ui/icons/EmojiFoodBeverage';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';


const dashboardRoutes = [
  {
    path: "/feed",
    name: "Feed",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: Feed,
    layout: "/admin"
  },
  {
    path: "/small_talk",
    name: "Small Talk",
    rtlName: "שיחת מסדרון",
    icon: EmojiFoodBeverageIcon,
    component: SmallTalk,
    layout: "/admin"
  },
  {
    path: "/office_fm",
    name: "Office FM",
    rtlName: "الرموز",
    icon: LibraryMusicIcon,
    component: OfficeFM,
    layout: "/admin"
  },
  {
    path: "/statistics",
    name: "Statistics",
    rtlName: "الرموز",
    icon: LibraryMusicIcon,
    component: OfficeFM,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "User Profile",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: UserProfile,
    layout: "/admin"
  }
];

export default dashboardRoutes;
