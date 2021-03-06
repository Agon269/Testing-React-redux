import React from "react";
import { shallow } from "enzyme";
import Header from "./index";
import { findByTestAtrr } from "./../../utils/index";
const setUp = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
};

describe("Header Component", () => {
  let component;
  //before each test it defines the component
  beforeEach(() => {
    component = setUp();
  });
  //component.debug() = renders component on log
  it("Should render without errors", () => {
    const wrapper = findByTestAtrr(component, "headerComponent");
    expect(wrapper.length).toBe(1);
  });
  it("Should render logo text", () => {
    const logo = findByTestAtrr(component, "logoText");
    expect(logo.length).toBe(1);
  });
});
