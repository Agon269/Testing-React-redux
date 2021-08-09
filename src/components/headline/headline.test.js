import React from "react";
import { shallow } from "enzyme";
import HeadLine from "./index";

import { findByTestAtrr, checkProps } from "./../../utils/index";
//setup function that gets the component adds props to it and returns back the component
const setUp = (props = {}) => {
  const component = shallow(<HeadLine {...props} />);
  return component;
};

describe("Headline Component", () => {
  describe("Checking proptypes", () => {
    it("Should not throw a warning", () => {
      const expectedProps = {
        header: "Test Header",
        desc: "Test Desc",
        tempArr: [
          {
            fName: "Test fName",
            lName: "Test lName",
            email: "test@email.com",
            age: 23,
            onlineStatus: false,
          },
        ],
      };
      const propsErr = checkProps(HeadLine, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });

  describe("Have Props", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        header: "Test Header",
        desc: "Test Desc",
      };
      wrapper = setUp(props);
    });

    it("Should render without errors", () => {
      const component = findByTestAtrr(wrapper, "headLine");
      expect(component.length).toBe(1);
    });

    it("Should render a H1", () => {
      const h1 = findByTestAtrr(wrapper, "header");
      expect(h1.length).toBe(1);
    });

    it("Should render a desc", () => {
      const desc = findByTestAtrr(wrapper, "desc");
      expect(desc.length).toBe(1);
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
