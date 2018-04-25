import React from "react";
import Sidebar from "../../components/Sidebar/index";

export default class SidebarContainer extends React.Component {
    render() {
        return <Sidebar navigation={this.props.navigation}/>;
    }
}
