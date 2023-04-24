module.exports = {
	ci: {
		collect: {
			// Use this for Prod / dev
			url: [
				`https://${process.env.PREVIEW_URL}`,
			],
			// url: 'http://localhost:3001',
			startServerCommand:
				process.env.NODE_ENV === 'production' ? undefined : 'npm run start',
		},
		assert: {
			preset: 'lighthouse:no-pwa',
		},
		upload: {
			target: 'temporary-public-storage',
		},
	},
};
