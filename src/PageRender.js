import React from "react";
import { useRouteMatch } from "react-router";

const generatePage = (page) => {
  const component = () => require(`./pages/${page}.js`).default;
  try {
    return React.createElement(component());
  } catch (error) {
    console.warn(error);
    return React.createElement(() => 404);
  }
};

export default function PageRender() {
  const {
    params: { page },
  } = useRouteMatch();
  return generatePage(page);
}
