// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
// 2026-10-20 文档换成云开发机。旧页面（API 网关时代）都删了，但链接不能 404 ——
// 挂号奖励那封邮件（2026-09-16 发出 29,112 封）指向 /earn/share-subscription/ 等。
const legacy = {
	'getting-started/install': 'getting-started/quick-start/',
	'integrations/claude-code': 'claude/sign-in/',
	'integrations/codex-cli': 'claude/sign-in/',
	'earn/share-subscription': '',
	'earn/idle-quota-rewards': '',
	'earn/earnings-and-withdrawals': '',
	'verification/privacy-proof': 'security/privacy/',
	'claude/guardrails': 'claude/long-tasks/',   // 2026-10-21 去掉了 agent 隔离（~/private 等）
};
const redirects = {};
for (const [from, to] of Object.entries(legacy)) {
	redirects[`/${from}`] = `/${to}`;
	redirects[`/zh-cn/${from}`] = `/zh-cn/${to}`;
}

export default defineConfig({
	site: 'https://docs.apex1.us',
	redirects,
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
				'A cloud dev machine with Claude Code ready — start coding at boot, and it keeps working after you close your laptop.',
			logo: { light: './src/assets/logo-light.svg', dark: './src/assets/logo-dark.svg', replacesTitle: true },
			components: {
				SiteTitle: './src/components/SiteTitle.astro',
			},
			customCss: ['./src/styles/custom.css'],
			social: [
				{ icon: 'x.com', label: 'X', href: 'https://x.com/Apex1_api' },
				{ icon: 'telegram', label: 'Telegram', href: 'https://t.me/apex1us' },
			],
			sidebar: [
				{
					label: 'Getting Started',
					translations: { 'zh-CN': '开始使用' },
					items: [
						{ label: 'Overview', translations: { 'zh-CN': '概览' }, link: '/' },
						{ label: 'Quick Start', translations: { 'zh-CN': '快速开始' }, slug: 'getting-started/quick-start' },
						{ label: 'Connect over SSH', translations: { 'zh-CN': '用 SSH 连接' }, slug: 'getting-started/connect' },
					],
				},
				{
					label: 'Claude Code',
					items: [
						{ label: 'Sign in to Claude', translations: { 'zh-CN': '登录 Claude' }, slug: 'claude/sign-in' },
						{ label: 'Long-running Tasks', translations: { 'zh-CN': '跑长任务' }, slug: 'claude/long-tasks' },
						{ label: 'Versions & Updates', translations: { 'zh-CN': '版本与升级' }, slug: 'claude/versions' },
					],
				},
				{
					label: 'Your Machine',
					translations: { 'zh-CN': '机器管理' },
					items: [
						{ label: 'Auto-suspend', translations: { 'zh-CN': '自动待机' }, slug: 'machines/auto-standby' },
						{ label: 'Open Ports', translations: { 'zh-CN': '开放端口' }, slug: 'machines/ports' },
						{ label: 'Web Terminal', translations: { 'zh-CN': '网页终端' }, slug: 'machines/web-terminal' },
						{ label: 'Reimage', translations: { 'zh-CN': '重装系统' }, slug: 'machines/reimage' },
						{ label: 'Commands', translations: { 'zh-CN': '机器里的命令' }, slug: 'machines/cli' },
					],
				},
				{
					label: 'Billing & Privacy',
					translations: { 'zh-CN': '计费与隐私' },
					items: [
						{ label: 'Pricing & Billing', translations: { 'zh-CN': '价格与计费' }, slug: 'billing/pricing' },
						{ label: 'Security & Privacy', translations: { 'zh-CN': '安全与隐私' }, slug: 'security/privacy' },
					],
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
