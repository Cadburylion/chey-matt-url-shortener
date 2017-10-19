export default (state=false, {type, payload}) => {
  switch(type){
  case 'SUBMIT': return payload
  default: return state
  }
}
