import { debounce } from "../src/function";

beforeEach(() => {
  jest.useFakeTimers();
});
afterEach(() => {
  jest.clearAllTimers();
  jest.useRealTimers();
});
// 应该在等待时间之后调用函数
test("应该在等待时间之后调用函数", () => {
  const fn = jest.fn();
  const debounced = debounce(fn, 1000);

  debounced();
  jest.advanceTimersByTime(500);
  expect(fn).toHaveBeenCalledTimes(0);

  jest.advanceTimersByTime(500);
  expect(fn).toHaveBeenCalledTimes(1);
});
// 当防抖函数执行时候，始终只执行最后一次调用
test("当防抖函数执行时候，始终只执行最后一次调用", () => {
  const fn = jest.fn();
  const debounced = debounce(fn, 1000);

  debounced("a");
  debounced("b");
  debounced("c");

  jest.advanceTimersByTime(1000);
  expect(fn).toHaveBeenCalledWith("c");
});
// 在等待时间内又调用了函数，重置计时器
test("在等待时间内又调用了函数，重置计时器", () => {
  const fn = jest.fn();
  const debounced = debounce(fn, 1000);

  debounced("a");
  jest.advanceTimersByTime(500);

  debounced("b");
  jest.advanceTimersByTime(500);
  expect(fn).toHaveBeenCalledTimes(0);
  jest.advanceTimersByTime(1000);

  expect(fn).toHaveBeenCalledTimes(1);
});
