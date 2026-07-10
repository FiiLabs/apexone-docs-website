// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.apex1.us',
	integrations: [
		starlight({
			title: 'ApexOne',
			description:
				"The verifiable frontier-AI gateway — call the world's most advanced models and verify which one served every request.",
			logo: { light: './src/assets/logo-light.svg', dark: './src/assets/logo-dark.svg', replacesTitle: true },
			components: {
				SiteTitle: './src/components/SiteTitle.astro',
			},
			customCss: ['./src/styles/custom.css'],
			social: [{ icon: 'telegram', label: 'Telegram', href: 'https://t.me/apex1us' }],
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'Overview', link: '/' },
						{ label: 'Quick Start', slug: 'getting-started/quick-start' },
						{ label: 'Install Prerequisites', slug: 'getting-started/install' },
					],
				},
				{
					label: 'Integrations',
					items: [
						{ label: 'Claude Code', slug: 'integrations/claude-code' },
						// { label: 'Codex CLI', slug: 'integrations/codex-cli' },
					],
				},
				{
					label: 'Verification',
					items: [{ label: 'Privacy Proof', slug: 'verification/privacy-proof' }],
				},
				{
					label: 'Help',
					items: [{ label: 'FAQ', slug: 'faq' }],
				},
			],
		}),
	],
});
