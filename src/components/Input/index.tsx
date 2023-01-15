import { InputProps } from "./types";
import "./styles.scss";

export const Input: React.FC<InputProps> = ({ label, error, ...rest }) => {
  return (
    <div className="flex flex-col space-y-2">
      <h4 className="font-semibold text-2xl text-start text-white">{label}</h4>
      <input
        className={
          `input
                bg-primarydark
                text-white
                p-3
                border-4
                border-primarydark
                font-semibold
                rounded-md
                transition
                w-full
                focus:border-primarygreen ` +
          (error ? "border-red focus:border-red" : "")
        }
        {...rest}
      />
      {error ? (
        <div className={"text-red font-medium"}>{error}</div>
      ) : (
        <div style={{ height: "24px" }} />
      )}
    </div>
  );
};
