// 开发者最终用的 JS，在方法内部做参数防御（健壮性）
export function range(start?: any, stop?: any, step?: any) {
  // 参数防御
  start = start ? (isNaN(+start) ? 0 : +start) : 0;
  stop = stop ? (isNaN(+stop) ? 0 : +stop) : 0;
  step = step ? (isNaN(+step) ? 0 : +step) : 1;

  // 保证 step 的正确
  if ((start < stop && step < 0) || (start > stop && step > 0)) {
    step = -step;
  }

  const arr: number[] = [];
  for (let i = start; start > stop ? i > stop : i < stop; i += step) {
    arr.push(i);
  }

  return arr;
}
// "test": "jest"
