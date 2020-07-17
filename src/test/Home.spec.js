describe(`The home list`, () => {
  beforeEach(() => {
    console.log("Before Each");
  });
  afterAll(() => {
    console.log("After all");
  });
  it(`It should display the result of the sum`, () => {
    expect(40 + 2).toEqual(42);
  });
  it.skip(`It should display the result of the miltuplication`, () => {
    expect(40 * 2).toEqual(80);
  });
  it(`It should display the result of the division`, () => {
    expect(40 / 2).toEqual(20);
  });
});
