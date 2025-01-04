export function overtime(credits, quota, days) {
  if (credits <= 0) {
    return
  }
  if (quota < 130 || quota == undefined) {
    quota = 130;
  }
  if (credits < quota) {
    return credits;
  }
  // Days on the 3-0/NOW scale
  if (days > 3 || days < 0 || days == undefined) {
    days = 0;
  }

  console.log(`credits = ${credits}`);
  console.log(`quota = ${quota}`);
  console.log(`days = ${days}`);

  let scrap = Math.ceil((5 * credits + quota - (75 * (days-1))) / 6);
  console.log(`scrap = ${scrap}`);
  return scrap;
}
