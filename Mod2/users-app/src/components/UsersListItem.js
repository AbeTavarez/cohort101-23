

function UsersListItem(props) {
    const user = props.user;
    return (
        <div>
            <h3>Name: {user.name}</h3>
            <h4>Cell: {user.phone}</h4>
            <h4>Email: {user.email}</h4>
        </div>
    )
}

export default UsersListItem;