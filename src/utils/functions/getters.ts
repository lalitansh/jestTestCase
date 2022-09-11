export const checkEveryLength=(...restParam: Array<any>)=>{
let arr = [];
arr = [...restParam];
const val = arr.every((item) => item.toString().length > 0)
return val
}