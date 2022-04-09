import { useSelector } from "react-redux";

import PublicRoutes from "./public";
import SecuredRoutes from "./secured";

const RootRouter = () => {
  const userTokens = useSelector((state: any) => state.common.userTokens) || {};

  return <>{!userTokens.AccessToken ? <PublicRoutes /> : <SecuredRoutes />}</>;
};

export default RootRouter;
