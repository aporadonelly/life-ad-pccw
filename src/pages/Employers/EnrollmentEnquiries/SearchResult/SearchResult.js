import { Page } from "@containers";
import { PageHeader, PageInner } from "@components/layout";
import { employersRoutes } from "@routes";

const SearchResult = () => (
  <Page>
    <PageHeader routes={employersRoutes} />
    <PageInner></PageInner>
  </Page>
);

export default SearchResult;
