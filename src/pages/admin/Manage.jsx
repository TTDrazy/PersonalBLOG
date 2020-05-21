import React, { Component } from 'react';
import AdminLayout from '../../components/layouts/AdminLayout';
import MyTable from '../../components/MyTable/MyTable';

class Manage extends Component {
    render() {
        return (
            <div>
                <MyTable></MyTable>
            </div>
        );
    }
}

export default Manage;
