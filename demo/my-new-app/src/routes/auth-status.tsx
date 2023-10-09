import { Navigate, useLocation } from "react-router-dom";
export const AuthStatus = (props: { children: JSX.Element }) => {
  const location = useLocation();

  const tokenKey = (window as any).appsettings?.tokenKey as string;

  if (
    (localStorage.getItem(tokenKey) as string) === "" ||
    (localStorage.getItem(tokenKey) as string) === null
  ) {
    return <Navigate to="/login" state={{ from: location }} replace={true} />;
  }

  return props.children;
};
