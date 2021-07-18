//routerGuard.js
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Loadable from 'react-loadable'
import { connect } from 'react-redux'
import renderRoutesMap from './renderRoutesMap'

const mapStateToProps = state => (state)
const mapDispatchToProps = dispatch => ({ ...dispatch })

class RouterGuard extends Component {
	constructor(props) {
		super()
	}
	componentWillMount() {
		let { history: { replace }, authorization, location } = this.props
		if (authorization) replace('./login')
		if (location.pathname === '/') replace('./asd')
		console.log('路由跳转前的拦截', this.props)
	}
	render() {
		let { component, routes = [] } = this.props
		console.log('准备渲染compoent前', this.props)
		const LoadableComponent = Loadable({
			loader: () => import(`../${component}`),
			loading: () => (
				<span>11111</span>
			)
		})
		return (
			<div>
				<LoadableComponent {...this.props} />
				{renderRoutesMap(routes)}
			</div>

		)
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RouterGuard))
