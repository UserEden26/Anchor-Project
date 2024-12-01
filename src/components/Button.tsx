import classNames from "classnames";

interface IButton {
  text: string
  onClick: () => void
  disabled?: boolean
}

const Button = ({ text, disabled = false, ...props }: IButton) => {
  return (
    <button {...props}
      className={classNames('button', disabled && 'button--disable')}
      disabled={disabled}
    >
      {text}
    </button>
  );
};


export default Button