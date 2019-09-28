import React from "react"
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import LoginForm from "./components/LoginForm"
import ResetPassForm from "./components/ResetPassForm"
import SignUp from "./components/SignUp"

function App() {
	return (
		<Router>
			<Switch>
				<Route path='/' exact>
					<LoginForm />
				</Route>
				<Route path='/reset'>
					<ResetPassForm />
				</Route>
				<Route path='/signup'>
					<SignUp />
				</Route>
			</Switch>
		</Router>
	)
}

export default App
