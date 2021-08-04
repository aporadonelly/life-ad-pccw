import { generatePath } from "react-router-dom";
import { push } from "connected-react-router";
import { concat, values, find, isEmpty } from "lodash";
import queryString from "query-string";
import * as employers from "@routes/employers";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ routeName, params, query }) => {
  const routes = concat([], ...values(employers));
  const findRoute = find(routes, { name: routeName });

  if (findRoute) {
    let path = generatePath(findRoute.path, params);
    if (!isEmpty(query)) path += `?${queryString.stringify(query)}`;
    return push(path);
  }

  throw new Error("Route Name not found");
};
