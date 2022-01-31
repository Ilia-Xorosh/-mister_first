import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

const Users = ({totalUsersCount, pageSize, currentPage, onPageChanget, users, ...props}) => {
    return <div>
        <Paginator totalUsersCount={totalUsersCount}
                   pageSize={pageSize}
                   onPageChanget={onPageChanget}/>
        {
            users.map(u => <User key={u.id}
                                 user={u}
                                 followingInProgress={props.followingInProgress}
                                 follow={props.follow}
                                 unfollow={props.unfollow}/>)
        }
    </div>
}


export default Users;