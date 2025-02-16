// set cookies on request:
export default function setCookieOnReq(cookies) {
  const accessToken = cookies.get("accessToken");
  const refreshToken = cookies.get("refreshToken");

  const options = {
    method: "GET",
    credentials: "include",
    headers: {
      Cookie: `accessToken=${accessToken}; refreshToken=${refreshToken};`,
    },
  };
  return options;
}
