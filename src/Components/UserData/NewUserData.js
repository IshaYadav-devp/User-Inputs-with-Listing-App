import styles from "./NewUserData.module.css";

const NewUserData = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <li className={styles["user-data-display"]} onClick={deleteHandler}>
      {`${props.name} is ${props.age} years old.`}
    </li>
  );
};

export default NewUserData;
