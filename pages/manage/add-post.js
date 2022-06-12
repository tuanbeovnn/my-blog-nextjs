import React from 'react';
import DashboardLayout from '../../module/dashboard/DashboardLayout';
import PostAddNew from '../../module/post/PostAddNew';

const AddPost = () => {
    return (
        <DashboardLayout>
            <PostAddNew></PostAddNew>
        </DashboardLayout>
    );
};

export default AddPost;