/* eslint-disable react/prop-types */
import { Helmet } from "react-helmet";

const PageTitle = (props) => {
  return (
    <Helmet>
      <title>{props.title}</title>
    </Helmet>
  );
};

export default PageTitle;
