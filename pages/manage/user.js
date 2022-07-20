import React from 'react';
import { Button } from '../../components/button';
import DashboardHeading from '../../module/category/DashboardHeading';
import DashboardLayout from '../../module/dashboard/DashboardLayout';
import UserTable from '../../module/user/UserTable';

const UserManage = () => {
    return (
        <DashboardLayout>
            <DashboardHeading
                title="Users"
            // desc="Manage your user"
            >
                <Button kind="ghost" height="60px" to="/manage/add-user">Add new user</Button>
            </DashboardHeading>
            <div className="mb-10 flex justify-end">
                <div className="w-full max-w-[300px]">
                    <input
                        type="text"
                        className="w-full p-4 rounded-lg border border-solid border-gray-300"
                        placeholder="Search user..."
                    />
                </div>
            </div>
            <UserTable></UserTable>
        </DashboardLayout>
    );
};

export default UserManage;