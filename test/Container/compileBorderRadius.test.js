import Container from "../../src/Container";

test("undefined", () => {
    expect(
        Container.compileBorderRadius(undefined)
    ).toStrictEqual("");
});

test("number", () => {
    expect(
        Container.compileBorderRadius(1)
    ).toStrictEqual("");
});

test("shorthand", () => {
    expect(
        Container.compileBorderRadius("1px solid red;")
    ).toStrictEqual("");
});

test("object", () => {
    expect(
        Container.compileBorderRadius({radius: 1})
    ).toStrictEqual("border-radius: 1px;");
});

test("with percent", () => {
    expect(
        Container.compileBorderRadius({radius: "50%"})
    ).toStrictEqual("border-radius: 50%;");
});

test("partial", () => {
    expect(
        Container.compileBorderRadius({
            top: {
                left: {
                    radius: 1
                },
                right: {
                    radius: 2
                },
            },
            bottom: {
                left: {
                    radius: 3
                },
                right: {
                    radius: 4
                },
            }
        })
    ).toStrictEqual([
        "border-top-left-radius: 1px;",
        "border-top-right-radius: 2px;",
        "border-bottom-left-radius: 3px;",
        "border-bottom-right-radius: 4px;"
    ].join(""));
});


test("with fix", () => {
    expect(
        Container.compileBorderRadius({radius: 1, fix: true})
    ).toStrictEqual("border-radius: 1px;overflow: hidden;");
});