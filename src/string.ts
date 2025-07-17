export function truncate(str?: any, len?: any, omission = "...") {
  //   参数防御
  str = String(str);
  omission = String(omission);
  len = len ? Math.round(len) : NaN;
  if (isNaN(len)) {
    return "";
  }
  if (str.length > len) {
    str = str.slice(0, len - omission.length) + omission;
  }
  return str;
}
