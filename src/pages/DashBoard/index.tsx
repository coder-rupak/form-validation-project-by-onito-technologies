import { useAppSelector } from "../../store/hooks";

export const DashBoard = () => {
  const users = useAppSelector((state) => state.user);
  console.log("DASBOARD", users.name);
  const dashBoardMarkup = <>{/* <p>{users}</p> */}</>;
  return <>{dashBoardMarkup}</>;
};
