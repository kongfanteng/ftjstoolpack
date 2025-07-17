truncate('123453232323232') ---> 12...
truncate('12345', 5) ---> 12345
truncate('12345', 3) ---> 123...

function.ts
debounce.test.ts
jest.useFakeTimers();
应该在等待时间之后调用函数
当防抖函数执行时候，始终只执行最后一次调用
在等待时间内又调用了函数，重置计时器
执行一次，500ms 执行一次
执行三次
500ms 重复调用三次
扩展类型 FuncType，泛型调用
