describe("Split Array function", function() {
  it("is able to split an array into two halves", function() {
    expect(split([1, 2, 3, 4, 5, 6])).toEqual([
      [1, 2, 3],
      [4, 5, 6]
    ]);
  });
});
describe("Merge function", function() {
  it("is able to merge two sorted arrays into one sorted array", function() {
    expect(merge([3, 27, 38, 43], [9, 10, 82])).toEqual([
      3,
      9,
      10,
      27,
      38,
      43,
      82
    ]);
  });
});
describe("MergeSort function", function() {
  it("is able to recursively mergeSort an array", function() {
    expect(mergeSort([27, 3, 38, 9, 43, 82, 10])).toEqual([
      3,
      9,
      10,
      27,
      38,
      43,
      82
    ]);
  });
});
