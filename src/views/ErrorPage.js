import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" style={{ padding: "12px" }}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred. This page was not found</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
