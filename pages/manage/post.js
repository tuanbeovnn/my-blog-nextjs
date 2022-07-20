import { connect } from "react-redux";
import { Pagination } from "../../components/pagination";
import { Table } from "../../components/table";
import DashboardLayout from "../../module/dashboard/DashboardLayout";
import { getServerSideProps } from "./../../utils/getServerSideProps";



const PostManage = ({ posts }) => {

    const dateToYMD = (date) => {
        var strArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var d = date.getDate();
        var m = strArray[date.getMonth()];
        var y = date.getFullYear();
        return '' + (d <= 9 ? '0' + d : d) + ' ' + m + ' ' + y;
    }

    return (
        <DashboardLayout>
            <div>
                <h1 className="dashboard-heading">Manage post</h1>
                <div className="mb-10 flex justify-end">
                    <div className="w-full max-w-[300px]">
                        <input
                            type="text"
                            className="w-full p-4 rounded-lg border border-solid border-gray-300"
                            placeholder="Search post..."
                        />
                    </div>
                </div>
                <Table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Id</th>
                            <th>Post</th>
                            <th>Category</th>
                            <th>Author</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.length > 0 && posts.map((item) => {
                            const { category } = item;
                            return (
                                <tr key={item.id}>
                                    <td></td>
                                    <td>{item.id}</td>
                                    <td>
                                        <div className="flex items-center gap-x-3">
                                            <img
                                                src={item.thumnail}
                                                alt=""
                                                className="w-[66px] h-[55px] rounded object-cover"
                                            />
                                            <div className="flex-1">
                                                <h3 className="font-semibold">{item.title}</h3>
                                                <time className="text-sm text-gray-500">
                                                    Date: {dateToYMD(new Date(item.createdDate))}
                                                </time>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <span className="text-gray-500">{category.name}</span>
                                    </td>
                                    <td>
                                        <span className="text-gray-500">{item.createdBy}</span>
                                    </td>
                                    <td>
                                        <div className="flex items-center gap-x-3 text-gray-500">
                                            <span className="flex items-center justify-center w-10 h-10 border border-gray-200 rounded cursor-pointer">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="w-5 h-5"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                    />
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                                    />
                                                </svg>
                                            </span>
                                            <span className="flex items-center justify-center w-10 h-10 border border-gray-200 rounded cursor-pointer">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="w-5 h-5"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                                    />
                                                </svg>
                                            </span>
                                            <span className="flex items-center justify-center w-10 h-10 border border-gray-200 rounded cursor-pointer">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="w-5 h-5"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                    />
                                                </svg>
                                            </span>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
                <div className="mt-10">
                    <Pagination></Pagination>
                </div>
            </div>
        </DashboardLayout>
    );
};

export { getServerSideProps };


export default (connect(({ Admin: { posts, categories } }) => ({ posts, categories }))(PostManage));