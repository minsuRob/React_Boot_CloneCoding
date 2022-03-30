import React from "react";

function ErrorBanner({ message }) {
  let errorMsg = message || "에러입니다.";

  return (
      <div
      data-testid="error-banner"
      style={{backgroundColor: "red", color: "white"}}
      >
          {errorMsg}
      </div>
  )
}
export default ErrorBanner;


