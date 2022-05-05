export interface IUser {
    id: number
    name: string
}
export interface IUserState {
    user: IUser
}
const initUserState: IUserState = {
    user: {
        id: 0,
        name: 'username'
    }
}
export enum IUserActionType {
    INIT,
    CHANGE
}
const user = (state: IUserState = initUserState, action: { type: IUserActionType, payload: any }) => {
    switch (action.type) {
        case IUserActionType.INIT:
            return state
        case IUserActionType.CHANGE:
            return { ...state, ...action.payload }
        default:
            return state
    }
}
export default user