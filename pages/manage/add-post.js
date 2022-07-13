import DashboardLayout from '../../module/dashboard/DashboardLayout';
import PostAddNew from '../../module/post/PostAddNew';
import { getServerSideProps } from "./../../utils/getServerSideProps";
const AddPost = () => {
    return (
        <DashboardLayout>
            <PostAddNew></PostAddNew>
        </DashboardLayout>
    );
};
export { getServerSideProps };
export default AddPost;

// export default (connect(({ Admin: { posts, categories } }) => ({ posts, categories }))(AddPost));