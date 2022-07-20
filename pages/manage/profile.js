import { Button } from '../../components/button';
import DashboardHeading from '../../module/category/DashboardHeading';
import DashboardLayout from '../../module/dashboard/DashboardLayout';
import UserProfile from '../../module/user/UserProfile';

const Profile = () => {
    return (
        <DashboardLayout>
            <UserProfile></UserProfile>
        </DashboardLayout>
    );
};

export default Profile;