function relScore(ml, m2) {
  const GW = 0.4;
  const YW = 0.1;
  const DW = 0.2;
  const WW = 0.3;
  let S = 0;
  if (m1.gen == m2.gen) {
    S += GW;
  }
  if (m1.yr == m2.yr) {
    S = S + YW;
  }
  if (m1.dir == m2.dir) {
    S += DW;
  }
  for (const w in ml.wrtrs) {
    if (m2.wrtrs.indexOf(w) !== -1) {
      S += WW;
      break;
    }
  }
  return S;
}
