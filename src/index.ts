import returnBen from './returnBen';
import NumberGen from './NumberGen';

const gen = new NumberGen();
const val = gen.getNum();
console.log(returnBen());
console.log('getNum Value:', val);
