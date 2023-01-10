import ReactLoading from "react-loading";

export const Loading = () => {
  return (
    <ReactLoading
      type="spin"
      color="#1D6434"
      height={70}
      width={70}
      className="mt-12"
    />
  );
};
