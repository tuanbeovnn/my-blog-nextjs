import React from "react";
import styled from "styled-components";
import { Button } from "../../components/button";
import { connect } from "react-redux";
import { getServerSideProps } from "./../../utils/getServerSideProps";
import Link from "next/link";
const DashboardHeaderStyles = styled.div`
  background-color: white;
  padding: 20px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  .header-avatar {
    width: 52px;
    height: 52px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 100rem;
      cursor: pointer;
    }
  }
`;

const DashboardHeader = (props) => {
    const [isExpanded, setIsExpanded] = React.useState(false);

    const { user } = props;
    const handleDropdown = () => {
        setIsExpanded((expanded) => !expanded)
    }
    return (
        <DashboardHeaderStyles>
            <Button to="/manage/add-post" className="header-button" height="52px">
                Write new post
            </Button>
            <div className="header-avatar">
                {/* <Link href="/manage/profile">
                    <img
                        src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80"
                        alt=""
                    />
                </Link> */}
                <div className="relative">
                    <div className="bg-slate-600 text-white-600" onClick={handleDropdown}>
                        Dropdown
                    </div>
                    <div style={{ position: "absolute", top: "100%", right: 0, backgroundColor: "white", padding: 50, border: "1px solid black", display: isExpanded ? "block" : "none" }}>
                        Content
                    </div>
                </div>
            </div>



        </DashboardHeaderStyles>
    );
};

export { getServerSideProps };

export default connect((store) => ({ user: store.Admin.user, store }))(DashboardHeader);
