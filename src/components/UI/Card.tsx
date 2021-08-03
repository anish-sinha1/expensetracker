import classes from "./Card.module.css";
const Card: React.FC<{ className: string }> = (props) => {
  const classList = `${classes.card} ${props.className}`;
  return <div className={classList}>{props.children}</div>;
};

export default Card;
