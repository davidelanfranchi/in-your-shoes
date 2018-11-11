// https://stackoverflow.com/questions/24736938/is-it-possible-to-assign-a-parameter-value-within-handlebars-templates-without-u
module.exports = function (varName, varValue, options) {
	if (!options.data.root) {
		options.data.root = {};
	}
	options.data.root[varName] = varValue;
};