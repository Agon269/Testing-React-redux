import React from "react";
import { shallow } from "enzyme";
import HeadLine from "./index";

import { findByTestAtrr, checkProps } from "./../../utils/index";

const setUp = (props = {}) => {
  const component = shallow(<HeadLine {...props} />);
  return component;
};

describe("Headline Component", () => {
  describe("Checking proptypes", () => {
    it("Should not throw a warning", () => {});
  });

  describe("Have Props", () => {
    const expectedProps = {
      header: "test",
      desc: "Test description",
      tempArr: [
        {
          fName: "test",
          lName: "Test",
          email: "test@test.com",
          age: 24,
          onlineStatus: false,
        },
      ],
    };
    const propsErr = checkProps(HeadLine, expectedProps);
    expect(propsErr).toBe(undefined);
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
