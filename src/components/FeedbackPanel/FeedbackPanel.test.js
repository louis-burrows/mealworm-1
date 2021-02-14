import React, { Component } from "react";
import FeedbackPanel from "./FeedbackPanel";
import { shallow } from "enzyme";
describe("Feedback component tests", () => {
  let testComponent;
  beforeEach(() => {
    testComponent = shallow(<FeedbackPanel header={"no recipes"} text={"Type into the searchbar to find your desired meal"}/>);
  });
  it("should render", () => {
    expect(testComponent).toBeTruthy();
  });
  it("should render correct title ", () => {
    let containsTitle = testComponent.text().includes("no recipes");
    expect(containsTitle).toBe(true);
  });
  it("should render correct text ", () => {
    let containsText = testComponent.text().includes("Type into the searchbar to find your desired meal");
    expect(containsText).toBe(true);
  });
});