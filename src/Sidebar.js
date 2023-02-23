import React from "react";
import { Avatar } from "@mui/material";

import "./Sidebar.css";

function Sidebar() {
    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    );

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img
                    src="https://images.unsplash.com/photo-1509023464722-18d996393ca8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt=""
                />
                <Avatar className="sidebar__avatar" />
                <h2>Ankur Rawat</h2>
                <h4>ankurrawat620@gmail.com</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">3.3M</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on Post</p>
                    <p className="sidebar__statNumber">12M</p>
                </div>
            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem("reactJs")}
                {recentItem("programming")}
                {recentItem("softwareEngineering")}
                {recentItem("design")}
                {recentItem("developer")}
            </div>
        </div>
    );
}

export default Sidebar;
