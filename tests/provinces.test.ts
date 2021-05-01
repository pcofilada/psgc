import provinces from "../src/provinces";

describe("test provinces all function", () => {
  it("should return all provinces with municipalities", () => {
    expect(provinces.all().length).toBe(82);
    expect(provinces.all()).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: "Metro Manila",
          municipalities: expect.arrayContaining([
            expect.objectContaining({ name: "Manila" }),
          ]),
        }),
      ])
    );
  });
});

describe("test provinces find function", () => {
  it("should return province if name is valid", () => {
    expect(provinces.find("Metro Manila")).toEqual(
      expect.objectContaining({
        name: "Metro Manila",
        municipalities: expect.arrayContaining([
          expect.objectContaining({ name: "Manila" }),
        ]),
      })
    );
  });

  it("should return undefined if name is not valid", () => {
    expect(provinces.find("test")).toBeUndefined();
  });
});

describe("test provinces filter function", () => {
  it("should return provinces that contain the given name", () => {
    expect(provinces.filter("Metro")).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: "Metro Manila",
          municipalities: expect.arrayContaining([
            expect.objectContaining({ name: "Manila" }),
          ]),
        }),
      ])
    );
  });

  it("should return empty array if nothing match on the given name", () => {
    expect(provinces.filter("Invalid")).toEqual([]);
  });
});
