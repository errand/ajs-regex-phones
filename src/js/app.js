import Validator from './Validator';

/*
8 (927) 000-00-00 -> +79270000000
+7 960 000 00 00 -> +79600000000
+86 000 000 0000 -> +860000000000
*/

const validator = new Validator();

console.log(validator.transformPhone('8 (927) 000-00-00'));
console.log(validator.transformPhone('+7 960 000 00 00'));
console.log(validator.transformPhone('+86 000 000 0000'));
console.log(validator.transformPhone('+7 960d 000 00 00'));
