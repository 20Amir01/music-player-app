import { useEffect } from "react";
import { useState } from "react";
import PropTypes from "prop-types";
Error.propTypes = {
  errorMessage: PropTypes.string,
};
export default function useError({ errorMessage }) {
  const [error, setError] = useState("");
  useEffect(() => {
    setError(errorMessage);
  }, [errorMessage]);
  return <p>{error}</p>;
}
