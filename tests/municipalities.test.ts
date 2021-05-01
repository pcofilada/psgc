import municipalities from "../src/municipalities";

describe("test municipalities all function", () => {
  it("should return all municipalities with barangays", () => {
    expect(municipalities.all().length).toBe(1632);
    expect(municipalities.all()).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: "Agoo",
          barangays: expect.arrayContaining([
            expect.objectContaining({ name: "San Nicolas East" }),
          ]),
        }),
      ])
    );
  });
});

describe("test municipalities find function", () => {
  it("should return municipality if name is valid", () => {
    expect(municipalities.find("Agoo")).toEqual(
      expect.objectContaining({
        name: "Agoo",
        barangays: expect.arrayContaining([
          expect.objectContaining({ name: "San Nicolas East" }),
        ]),
      })
    );
  });

  it("should return undefined if name is not valid", () => {
    expect(municipalities.find("test")).toBeUndefined();
  });
});

describe("test municipalities filter function", () => {
  it("should return municipalities that contain the given name", () => {
    expect(municipalities.filter("Agoo")).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: "Agoo",
          barangays: expect.arrayContaining([
            expect.objectContaining({ name: "San Nicolas East" }),
          ]),
        }),
      ])
    );
  });

  it("should return empty array if nothing match on the given name", () => {
    expect(municipalities.filter("Invalid")).toEqual([]);
  });
});
