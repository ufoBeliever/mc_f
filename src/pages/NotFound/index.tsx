import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex flex-col items-center">
        <h1 className="text-white uppercase text-9xl">404</h1>
        <span className="text-white uppercase text-xl w-64 text-center">
          Cant't find this page, try to return to{" "}
          <span className="hover:underline text-primarygreen">
            <Link to="/">home</Link>
          </span>
        </span>
      </div>
    </div>
  );
};
