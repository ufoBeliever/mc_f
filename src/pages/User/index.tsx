import { useParams } from "react-router-dom";

export const User = () => {
  const { id } = useParams();
  return <div className="text-white">Hi, {id}</div>;
};
