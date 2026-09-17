// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.apex1.us',
	integrations: [
		starlight({
			title: 'ApexOne',
			// 英文用 root locale：英文页保持在 /earn/... 而不是 /en/earn/...。
			// 这不是风格选择——挂号奖励那封邮件（2026-09-16 发出 29,112 封）里的
			// 链接指向 /earn/share-subscription/，加前缀会让它们全部 404。
			defaultLocale: 'root',
			locales: {
				root: { label: 'English', lang: 'en' },
				'zh-cn': { label: '简体中文', lang: 'zh-CN' },
			},
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
					translations: { 'zh-CN': '开始使用' },
					items: [
						{ label: 'Overview', translations: { 'zh-CN': '概览' }, link: '/' },
						{ label: 'Quick Start', translations: { 'zh-CN': '快速开始' }, slug: 'getting-started/quick-start' },
						{ label: 'Install Prerequisites', translations: { 'zh-CN': '安装前置' }, slug: 'getting-started/install' },
					],
				},
				{
					label: 'Integrations',
					translations: { 'zh-CN': '客户端接入' },
					items: [
						{ label: 'Claude Code', slug: 'integrations/claude-code' },
						{ label: 'Codex CLI', slug: 'integrations/codex-cli' },
					],
				},
				{
					label: 'Earn by Sharing',
					translations: { 'zh-CN': '共享赚钱' },
					items: [
						{ label: 'Share Your Subscription', translations: { 'zh-CN': '共享你的订阅' }, slug: 'earn/share-subscription' },
						{
							label: 'Idle Quota Rewards',
							translations: { 'zh-CN': '挂号奖励活动' },
							slug: 'earn/idle-quota-rewards',
							badge: { text: { en: 'Live', 'zh-CN': '进行中' }, variant: 'success' },
						},
						{ label: 'Earnings & Withdrawals', translations: { 'zh-CN': '收益与提现' }, slug: 'earn/earnings-and-withdrawals' },
					],
				},
				{
					label: 'Verification',
					translations: { 'zh-CN': '可验证性' },
					items: [{ label: 'Privacy Proof', translations: { 'zh-CN': '隐私证明' }, slug: 'verification/privacy-proof' }],
				},
				{
					label: 'Help',
					translations: { 'zh-CN': '帮助' },
					items: [{ label: 'FAQ', translations: { 'zh-CN': '常见问题' }, slug: 'faq' }],
				},
			],
		}),
	],
});
