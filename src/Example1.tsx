import { Dispatch } from "redux"
import { connect } from "react-redux"
import { rootState } from "./store"
import { IAdmin, IAdminActionType } from "./store/reducers/admin"
import { IUser, IUserActionType } from "./store/reducers/user"
interface IProps {
    admin?: IAdmin
    user?: IUser
    changeAdminName?(): void
    changeUsername?(): void
}
const Example1: React.FC<IProps> = (props: IProps) => {
    const changeUsername = () => {
        props.changeUsername && props.changeUsername()
    }
    const changeAdminName = () => {
        props.changeAdminName && props.changeAdminName()
    }
    return (
        <>
            {props.admin?.name}
            <br />
            {props.user?.name}
            <br />
            <button onClick={changeAdminName}>change admin name</button>
            <br />
            <button onClick={changeUsername}>change username</button>
        </>
    )
}
const mapStateToProps = (state: rootState) => {
    return { ...state.admin, ...state.user }
}
const mapDispatchToProps = (dispatch: Dispatch) => ({
    changeAdminName: () => {
        dispatch({
            type: IAdminActionType.CHANGE,
            payload: { admin: { name: 'change admin name' + new Date().toLocaleString() } }
        })
    },
    changeUsername: () => {
        dispatch({
            type: IUserActionType.CHANGE,
            payload: { user: { name: 'change username' + new Date().toLocaleString() } }
        })
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(Example1)