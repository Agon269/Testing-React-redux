import React from "react";
import { shallow } from "enzyme";
import HeadLine from "./index";

import { findByTestAtrr } from "./../../utils/index";

const setUp = (props = {}) => {
  const component = shallow(<HeadLine {...props} />);
  return component;
};

describe("Headline Component", () => {
  describe("Have Props", () => {
    let wrapper;
    beforeEach(() => {
      const props = { header: "Hello", desc: "Test description" };
      wrapper = setUp(props);
    });
    it("Should render with out errors", () => {
      const component = findByTestAtrr(wrapper, "headLine");
      expect(component.length).toBe(1);
    });
    it("Shold render an h1", () => {
      const component = findByTestAtrr(wrapper, "header");
      expect(component.length).toBe(1);
    });
    it("Shold render an description", () => {
      const component = findByTestAtrr(wrapper, "desc");
      expect(component.length).toBe(1);
    });
  });

  describe("Have No Props", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp();
    });
    it("Should not render", () => {
      const component = findByTestAtrr(wrapper, "headLine");
      expect(component.length).toBe(0);
    });
  });
});
