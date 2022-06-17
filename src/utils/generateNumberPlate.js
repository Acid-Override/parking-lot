const generateNumberPlate = () => {
  const r = (max, min) => Math.floor(Math.random() * (max - min) ) + min + "";
  const l = (x) => [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'][r(26, 0)]
  return r(1000, 100) + '-' + l() + l() + l();
}
export default generateNumberPlate