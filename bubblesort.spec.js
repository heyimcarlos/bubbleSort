describe("Bubble Sort", function() {
  beforeEach(function() {
    spyOn(window, "swap").and.callThrough();
  });

  it("handles an empty array", function() {
    expect(bubbleSort([])).toEqual([]);
    expect(window.swap.calls.count()).toEqual(0);
  });

  it("handles an array of length 1", function() {
    expect(bubbleSort([1])).toEqual([1]);
  });

  it("handles an array with multiple items", function() {
    expect(bubbleSort([3, 2, 4, 1])).toEqual([1, 2, 3, 4]);
    expect(window.swap.calls.count()).toEqual(4);
  });

  it("handles an inversed array", function() {
    expect(bubbleSort([9, 8, 7, 6, 5])).toEqual([5, 6, 7, 8, 9]);
  });
});
