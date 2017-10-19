export default (state='', {type, payload}) => {
  switch(type){
  case 'URL': return payload
  default: return state
  }
}
