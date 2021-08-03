import { generatePath } from "react-router-dom";
import { push } from "connected-react-router";
import { concat, values, find } from "lodash";
import * as employers from "@routes/employers";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ routeName }, ...args) => {
  const routes = concat([], ...values(employers));
  const route = find(routes, { name: routeName });

  if (route) return push(generatePath(route.path, ...args));

  throw new Error("Route Name not found");
};
