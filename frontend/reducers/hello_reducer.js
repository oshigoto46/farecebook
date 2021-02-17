import _ from 'lodash';
const initialState = {
    name: "Anonymouse"
  }
  
  export default function reducer(state = initialState, action) {
    switch(action.type) {
     
      /* nameを変更する */
      case 'CHANGE_NAME':
        const  name = _.merge({},state.name,action.name);
        // return {
        //   state,
        //   name: action.name,
        // };
        return name
  
      default:
        return state
    }
  }