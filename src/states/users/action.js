import API from "../../data/api";
const ActionType = {
    RECEIVE_USERS: 'RECEIVE_USERS',
  };
   
  function receiveUsersActionCreator(users) {
    return {
      type: ActionType.RECEIVE_USERS,
      payload: {
        users,
      },
    };
  }
  function asyncRegisterUser({ email, name, password }) {
    return async () => {
      try {
        const regist = await API.register({ email, name, password });
        console.log(regist)
      } catch (error) {
        alert(error.message);
      }
    };
  }
  export {
    ActionType,
    receiveUsersActionCreator,
    asyncRegisterUser,
  };