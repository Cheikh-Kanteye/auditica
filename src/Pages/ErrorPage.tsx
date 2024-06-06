import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error: any = useRouteError();
  console.error(error);

  return (
    <div className="h-dvh col justify-center items-center" id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link className="row items-center link" to="/">
        <MdOutlineKeyboardBackspace />
        Go home
      </Link>
    </div>
  );
}
