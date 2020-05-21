import React, { Component } from "react";
import AdminLayout from "../../components/layouts/AdminLayout";
import MyTable from "../../components/MyTable/MyTable";

class Manage extends Component {
    render() {
        return (
            <div>
                <AdminLayout>
                   <MyTable></MyTable>
                </AdminLayout>
            </div>
        );
    }
}

export default Manage;
