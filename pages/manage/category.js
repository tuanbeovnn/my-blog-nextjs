import { connect } from "react-redux";
import { ActionDelete, ActionEdit, ActionView } from "../../components/action";
import { Button } from "../../components/button";
import { LabelStatus } from "../../components/label";
import { Table } from "../../components/table";
import DashboardHeading from "../../module/category/DashboardHeading";
import DashboardLayout from "../../module/dashboard/DashboardLayout";
import { categoryStatus } from "../../utils/constants";
import { getServerSideProps } from "./../../utils/getServerSideProps";
const CategoryManage = (props) => {

    const { categories } = props;
    return (
        <DashboardLayout>
            <DashboardHeading
                title="Manage Category"
            // desc="Manage your category"
            >
                <Button kind="ghost" height="60px" to="/manage/add-category">Create Category</Button>
            </DashboardHeading>
            <div className="mb-10 flex justify-end">
                <div className="w-full max-w-[300px]">
                    <input
                        type="text"
                        className="w-full p-4 rounded-lg border border-solid border-gray-300"
                        placeholder="Search category..."
                    />
                </div>
            </div>
            <Table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Code</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.length > 0 && categories.map((item) => {
                        return (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.code}</td>
                                <td>
                                    {item.categoryStatus === categoryStatus.APPROVED && (
                                        <LabelStatus type="success">Aprroved</LabelStatus>
                                    )}
                                    {item.categoryStatus === categoryStatus.UNAPPROVED && (
                                        <LabelStatus type="warning">Unaprroved</LabelStatus>
                                    )}
                                </td>
                                <td>
                                    <div className="flex items-center gap-x-3">
                                        <ActionView></ActionView>
                                        <ActionEdit></ActionEdit>
                                        <ActionDelete></ActionDelete>
                                    </div>
                                </td>
                            </tr>
                        )
                    })}

                </tbody>
            </Table>
        </DashboardLayout>
    );
};



export { getServerSideProps };


export default (connect(({ Admin: { posts, categories } }) => ({ posts, categories }))(CategoryManage));