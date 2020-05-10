import Vue from "vue";
import HelloWorld from "../src/HelloWorld";

describe("HelloWorld.test.js", () => {
  let cmp, vm;

  beforeEach(() => {
    cmp = Vue.extend(HelloWorld); // Create a copy of the original component
    vm = new cmp({
      data: {
        // Replace data value with this fake data
        message: "world",
      },
    }).$mount(); // Instances and mounts the component
  });

  it('message includes "world"', () => {
    expect(vm.$el.querySelector("p").outerHTML).toContain("world");
  });

  it("has the expected html structure", () => {
    expect(vm.$el).toMatchSnapshot();
  });
});
