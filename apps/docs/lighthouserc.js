module.exports = {
	ci: {
		collect: {
			url: 'http://localhost:3001',
			startServerCommand: 'yarn run dev',
		},
		assert: {
			preset: 'lighthouse:no-pwa',
		},
		upload: {
			target: 'temporary-public-storage',
		},
	},
};

