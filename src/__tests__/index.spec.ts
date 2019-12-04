import parseBoolean from "..";

describe("parseBoolean(s)", () => {
  it("parseBoolean({ a: 1 }) => false", () => {
    expect(parseBoolean({ a: 1 })).toBeFalsy();
  });

  it("parseBoolean(['a']) => false", () => {
    expect(parseBoolean(["a"])).toBeFalsy();
  });

  it("parseBoolean(true) => true", () => {
    expect(parseBoolean(true)).toBeTruthy();
  });

  it("parseBoolean(false) => false", () => {
    expect(parseBoolean(false)).toBeFalsy();
  });

  it('parseBoolean("") => false', () => {
    expect(parseBoolean("")).toBeFalsy();
  });

  it('parseBoolean("False") => false', () => {
    expect(parseBoolean("False")).toBeFalsy();
  });

  it('parseBoolean("  FalsE  ") => false', () => {
    expect(parseBoolean("  FalsE  ")).toBeFalsy();
  });

  it('parseBoolean("  No  ") => false', () => {
    expect(parseBoolean("  No  ")).toBeFalsy();
  });

  it("parseBoolean(0) => false", () => {
    expect(parseBoolean(0)).toBeFalsy();
  });

  it("parseBoolean(1) => true", () => {
    expect(parseBoolean(1)).toBeTruthy();
  });

  it("parseBoolean(-3) => true", () => {
    expect(parseBoolean(-3)).toBeTruthy();
  });

  it('parseBoolean("  0  ") => false', () => {
    expect(parseBoolean("  0  ")).toBeFalsy();
  });

  it('parseBoolean("  1 ") => true', () => {
    expect(parseBoolean("  1 ")).toBeTruthy();
  });

  it('parseBoolean("  True ") => true', () => {
    expect(parseBoolean("  True ")).toBeTruthy();
  });

  it('parseBoolean("  a - b") => true', () => {
    expect(parseBoolean("  a - b")).toBeTruthy();
  });

  it('parseBoolean("  some Stuff 🚀 ñaaa --- a") => true', () => {
    expect(parseBoolean("  some Stuff 🚀 \n ñaaa --- a")).toBeTruthy();
  });
});
