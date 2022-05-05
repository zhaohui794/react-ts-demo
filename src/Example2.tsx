import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { rootState } from "./store"
import { IAdminActionType, IAdminState } from "./store/reducers/admin"
import { IUserActionType, IUserState } from "./store/reducers/user"

const Example2 = () => {
    const { user } = useSelector<rootState, IUserState>((state: rootState) => state.user, shallowEqual)
    const { admin } = useSelector<rootState, IAdminState>((state: rootState) => state.admin, shallowEqual)
    const dispatch = useDispatch()

    const changeUsername = () => {
        dispatch({
            type: IAdminActionType.CHANGE,
            payload: { admin: { name: 'change admin name' + new Date().toLocaleString() } }
        })
    }
    const changeAdminName = () => {
        dispatch({
            type: IUserActionType.CHANGE,
            payload: { user: { name: 'change username' + new Date().toLocaleString() } }
        })
    }
    return (
        <>
            {user.name}
            <br />
            {admin.name}
            <br />
            <button onClick={changeAdminName}>change admin name</button>
            <br />
            <button onClick={changeUsername}>change username</button>
        </>
    )
}

export default Example2
