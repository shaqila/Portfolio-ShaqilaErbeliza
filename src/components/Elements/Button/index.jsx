/* eslint-disable react/prop-types */

const Button = (props) => {
  return (
    <button
      id={props.id}
      className={`${
        props.isDisabled
          ? "bg-blue-500 py-2 w-52 m-2 rounded-xl"
          : "bg-violet-400 py-2 w-52 m-2 rounded-xl"
      }`}
      onClick={props.clickHandler}
      type={props.type}
      disabled={props.isDisabled}
    >
      {props.value}
    </button>
  );
};

Button.defaultProps = {
  type: "button",

  disabled: false,
};

export default Button;
