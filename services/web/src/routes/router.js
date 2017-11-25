// Components
import Newsroom from '../app/Newsroom.js';
import NotFound from '../app/NotFound';

export default {
	routes: [
		{
			path: '/',
			component: Newsroom,
			exact: true
		},
		{
		path: '*',
		component: NotFound,
		exact: false
		}
	],
	redirects: [
		{
			// from: '/people',
			// to: '/user',
			// status: 301
		}
	]
};