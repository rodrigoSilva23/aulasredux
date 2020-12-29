import React from 'react';

import Layout from './layout';
import Pages from './pages';
import Massege from './components/message'

export default function App() {
	return (
		<Layout>
			<Massege/>
			<Pages />
		</Layout>
	);
}
