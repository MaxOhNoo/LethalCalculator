export function overtime(credits, quota, days) {
  if (credits > 0 !== true) {
    return
  }
  if (quota >= 130 !== true) {
    quota = 130;
  }
  if (credits < quota) {
    return credits;
  }
  // Days on the 3-0/NOW scale
  if (3 >= days >= 0 !== true||days == undefined) {
    days = 0;
  }

  console.log(`credits = ${credits}`);
  console.log(`quota = ${quota}`);
  console.log(`days = ${days}`);

  let scrap = Math.ceil((5 * credits + quota - (75 * (days-1))) / 6);
  console.log(`scrap = ${scrap}`);
  return scrap;
}
