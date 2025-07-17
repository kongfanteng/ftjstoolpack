import { truncate } from "../src/string";

// 应该将字符串截取到指定长度
test("应该将字符串截取到指定长度", () => {
  expect(truncate("Hello, World!", 5)).toBe("He...");
  expect(truncate("Hello, World!", 10)).toBe("Hello, ...");
  expect(truncate("Hello, World!", 15)).toBe("Hello, World!");
  expect(truncate("Hello, World!", 11)).toBe("Hello, W...");
  expect(truncate("12313132323", 5)).toBe("12...");
  expect(truncate("12345", 5)).toBe("12345");
  expect(truncate("12345", 5, "-")).toBe("12345");
});
// 如果长度参数不是一个数字，那么返回一个空字符串
test("应该正确处理空字符串和未定义的输入", () => {
  expect(truncate("", 5)).toBe("");
  expect(truncate("Hello World", NaN)).toBe("");
  expect(truncate("Hello World", "abc" as any)).toBe("");
});
// 应该正确处理空字符串和未定义的输入
test("应该正确处理空字符串和未定义的输入", () => {
  expect(truncate("", 5)).toBe("");
  expect(truncate(undefined, 5)).toBe("un...");
});
// 应该正确处理省略号参数
test("应该正确处理省略号参数", () => {
  expect(truncate("Hello World", 5, "...")).toBe("He...");
  expect(truncate("Hello World", 10, "---")).toBe("Hello W---");
});
// 始终应该返回一个空字符串
test("始终应该返回一个空字符串", () => {
  expect(typeof truncate("Hello World", 5)).toBe("string");
  expect(typeof truncate("Hello World", NaN)).toBe("string");
  expect(typeof truncate(undefined, 5)).toBe("string");
});
