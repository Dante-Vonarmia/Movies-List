import React from 'react'
import configureStore from '../helpers/store'
import { Provider } from 'react-redux'

import Layout from './Layout'

const store = configureStore();

// export class App extends React.Component {
// 	render() {
// 		return (
// 			<Provider store={store}>
// 				<Layout />
// 			</Provider>
// 		)
// 	}
// }

const App = () => (
	<Provider store={store}>
		<Layout />
	</Provider>
)

export default App;
