const createDiv = (el) => {
    for ( let i = 0; i <el.length; i++ ){
        var div = $(`<div>${el[i].title}</div>`)
    }
}