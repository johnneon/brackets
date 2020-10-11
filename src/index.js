module.exports = function check(str, bracketsConfig) {
	bracketsConfig = bracketsConfig.map(el => el.join(''));
	for (let i = 0; i < 50; i++) {
			for (let j = 0; j < bracketsConfig.length; j++) {
				str = str.replace(bracketsConfig[j], '')
			}
	}
	if (str != '') return false;
  else return true;
}
