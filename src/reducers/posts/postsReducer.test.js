//tdd
//write tests before code
import { types } from "../../actions/types";
import posts from "./reducer";
describe("Posts Reducer", () => {
  it("should return default state", () => {
    const newState = posts(undefined, {});
    expect(newState).toEqual([]);
  });

  it("should return a new state if recieving type", () => {
    const posted = [
      { title: "test 2" },
      { title: "test 1" },
      { title: "test 3" },
    ];
    const newState = posts(undefined, {
      type: types.GET_POSTS,
      payload: posted,
    });
    expect(newState).toEqual(posted);
  });
});
