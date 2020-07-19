export default function doctor(state = [], action) {
  switch (action.type) {
    case '@doctor/INFO':
      return action.data;
    default:
      return state;
  }
}
