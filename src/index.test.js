// Note: create-react-app imports this polyfill for us. However, the test is
// still useful to avoid breaking browsers without fetch if the polyfill is
// ever removed.
test("window.fetch is the one from the polyfill", () => {
  expect(window.fetch.polyfill).toEqual(true);
});
