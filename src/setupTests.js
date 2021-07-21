import Enzyme from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-17";

Enzyme.configure({
  adapter: new EnzymeAdapter(),
  disableLifecycleMethods: true,
});
