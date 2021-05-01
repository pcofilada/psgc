import regions from "../src/regions";

describe("test regions all function", () => {
  it("should return all regions with provinces", () => {
    expect(regions.all().length).toBe(17);
    expect(regions.all()).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          designation: "NCR",
          name: "National Capital Region",
          provinces: expect.arrayContaining([
            expect.objectContaining({ name: "Metro Manila" }),
          ]),
        }),
      ])
    );
  });
});

describe("test regions find function", () => {
  it("should return region if name is valid", () => {
    expect(regions.find("National Capital Region")).toEqual(
      expect.objectContaining({
        designation: "NCR",
        name: "National Capital Region",
        provinces: expect.arrayContaining([
          expect.objectContaining({ name: "Metro Manila" }),
        ]),
      })
    );
  });

  it("should return undefined if name is not valid", () => {
    expect(regions.find("test")).toBeUndefined();
  });
});

describe("test regions filter function", () => {
  it("should return regions that contain the given name", () => {
    expect(regions.filter("Capital")).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          designation: "NCR",
          name: "National Capital Region",
          provinces: expect.arrayContaining([
            expect.objectContaining({ name: "Metro Manila" }),
          ]),
        }),
      ])
    );
  });

  it("should return empty array if nothing match on the given name", () => {
    expect(regions.filter("Invalid")).toEqual([]);
  });
});
