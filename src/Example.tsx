import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { rootState } from './store'
import { IAdmin, IAdminActionType } from './store/reducers/admin'
import { IUser, IUserActionType } from './store/reducers/user'
interface IProps {
    admin?: IAdmin
    user?: IUser
    changeAdminName?(): void
    changeUsername?(): void
}
class Example extends Component<IProps> {
    changeUsername = () => {
        this.props.changeUsername && this.props.changeUsername()
    }
    changeAdminName = () => {
        this.props.changeAdminName && this.props.changeAdminName()
    }
    render() {
        return (
            <div>
                {this.props.admin?.name}
                <br />
                {this.props.user?.name}
                <br />

                <button onClick={this.changeAdminName}>change admin name</button>
                <br />

                <button onClick={this.changeUsername}>change username</button>

            </div>
        )
    }
}
const mapStateToProps = (state: rootState) => {
    return { ...state.admin, ...state.user }
}
const mapDispatchToProps = (dipatch: Dispatch) => ({
    changeAdminName: () => {
        dipatch({
            type: IAdminActionType.CHANGE,
            payload: { admin: { name: 'change admin name' + new Date().toLocaleString() } }
        })
    },
    changeUsername: () => {
        dipatch({
            type: IUserActionType.CHANGE,
            payload: { user: { name: 'change username' + new Date().toLocaleString() } }
        })
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(Example)