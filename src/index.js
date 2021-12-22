// import _ from 'lodash';
function component() {
  const element = document.createElement('div');

  // lodash（目前通过一个 script 引入）对于执行这一行是必需的
  element.innerHTML = "adsdsdsdsdsds"

  return element;
}

document.body.appendChild(component());

var btn = document.getElementById('btn')
btn.addEventListener('click',function(e) {
  import('./aaa').then((data)=>{
    console.log('data',data)
  })
})