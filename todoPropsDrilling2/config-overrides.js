const { override, addWebpackAlias } = require('customize-cra');
const { resolve } = require('path');

module.exports = {
	webpack: override(
		addWebpackAlias({
			'@components': resolve(__dirname, 'src/components'),
			'@pages': resolve(__dirname, 'src/pages')
		})
	)
};
