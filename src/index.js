function fun({x, y=5}) {
  console.log(x, y)
}

fun({})

let {x, y=5} = {}

function ajax(url, {
  method = 'GET',
  head = '123'
}={}) {
  return method
}

console.log(ajax());