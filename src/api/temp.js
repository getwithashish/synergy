function tempFunc(){
    let tempVar = searchStation({query: 'TVM'})
    .then(resp => console.log('Inside Temp Func: ', resp))
}
