import barangays from "../src/barangays";

describe("test barangays all function", () => {
  it("should return all barangays", () => {
    expect(barangays.all().length).toBe(42036);
    expect(barangays.all()).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: "San Nicolas East",
        }),
      ])
    );
  });
});

describe("test barangays find function", () => {
  it("should return barangay if name is valid", () => {
    expect(barangays.find("San Nicolas East")).toEqual(
      expect.objectContaining({
        name: "San Nicolas East",
      })
    );
  });

  it("should return undefined if name is not valid", () => {
    expect(barangays.find("test")).toBeUndefined();
  });
});

describe("test barangays filter function", () => {
  it("should return barangays that contain the given name", () => {
    expect(barangays.filter("San")).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: "San Nicolas East",
        }),
      ])
    );
  });

  it("should return empty array if nothing match on the given name", () => {
    expect(barangays.filter("Invalid")).toEqual([]);
  });
});
