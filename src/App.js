import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";

import "./App.css";

function App() {
    return (
        <div className="app">
            {/* TODO: Header */}
            <Header />
            {/* TODO: App Body */}
            <div className="app__body">
                {/* TODO: Sidebar */}
                <Sidebar />
                {/* TODO: Feed*/}
                <Feed />
                {/* TODO: Widgets */}
            </div>
        </div>
    );
}

export default App;
