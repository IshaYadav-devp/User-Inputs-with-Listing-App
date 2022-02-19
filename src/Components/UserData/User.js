import NewUserData from "./NewUserData";

const User = (props) => {
  return (
    <ul>
      {props.user.map((u) => {
        return (
          <NewUserData
            name={u.name}
            age={u.age}
            key={u.id}
            id={u.id}
            onDelete={props.onDeleteUser}
          />
        );
      })}
    </ul>
  );
};

export default User;
