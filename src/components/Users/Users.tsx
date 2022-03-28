import React, {FC} from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import {UserType} from "../../types/types";

type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanget: (pageNumber: number) => void
    users: Array<UserType>
    followingInProgress: Array<number>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

const Users: FC<PropsType> = ({totalUsersCount, pageSize, currentPage, onPageChanget, users, ...props}) => {
    return <div>
        <Paginator totalItemsCount={totalUsersCount}
                   pageSize={pageSize}
                   currentPage={currentPage}
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