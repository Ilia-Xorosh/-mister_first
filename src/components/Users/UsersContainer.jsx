import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {
    follow,
    setCurrentPage,
    unfollow,
    toggleFollowingProgress,
    getUsers
} from "../../Redux/Users-reduser";
import Preloader from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../Hoc/WithAuthRedirect";

class UsersConteiner extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanget = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.setCurrentPage(pageNumber));
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users currentPage={this.props.currentPage}
                      onPageChanget={this.onPageChanget}
                      users={this.props.users}
                      unfollow={this.props.unfollow}
                      follow={this.props.follow}
                      totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                   followingInProgress={this.props.followingInProgress}
                      />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
    }
};

/*let mapDispatchToProps = (dispatch) => {
    return {
        follow: (usersId) => {
            dispatch(followAC(usersId));
        },
        unfollow: (usersId) => {
            dispatch(unfollowAC(usersId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber));
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setUsersTotalCountAC(totalCount));
        },
        toggleIsFetching: (isFetching) => {
            dispatch(setToggleIsFetchingAC(isFetching));
        }
    }
}*/

let AuthRedirectComponent = withAuthRedirect(UsersConteiner);

export default connect(mapStateToProps, {follow, unfollow, setCurrentPage,
    toggleFollowingProgress, getUsers})(AuthRedirectComponent);
