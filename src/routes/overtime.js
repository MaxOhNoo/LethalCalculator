export function overtime(credits, quota) {
  if (credits < quota) {
    return credits;
  }

  console.log(`credits = ${credits}`);
  console.log(`quota = ${quota}`);

  let scrap = Math.ceil((5 * credits + quota) / 6);
  console.log(`scrap = ${scrap}`);
  return scrap;
}
