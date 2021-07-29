import { checkPropTypes } from "prop-types";
export const checkProps = (component, expectedProps) => {
  const propsErrors = checkPropTypes(
    component.PropTypes,
    expectedProps,
    component.name
  );
  return propsErrors;
};
export const findByTestAtrr = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
};
