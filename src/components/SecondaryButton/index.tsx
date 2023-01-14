import { SecondaryButtonProps } from "./types";

export const SecondaryButton: React.FC<SecondaryButtonProps> = ({ label }) => {
  return (
    <button
      className="bg-primarydark
                text-white
                py-3
                px-4
                xl:py-4
                xl:px-5
                border-4
                border-primarydark
                font-semibold
                xl:text-lg
                rounded-md
                hover:border-primarygreen
                transition"
    >
      {label}
    </button>
  );
};
