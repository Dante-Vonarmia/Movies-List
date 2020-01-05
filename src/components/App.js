import React from 'react'
import configureStore from '../helpers/store'
import { Provider } from 'react-redux'

import Layout from './Layout'

const store = configureStore();

const App = () => (
	<Provider store={store}>
		<Layout />
	</Provider>
)

export default App;
