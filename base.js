function setRem() {
  const scale = (document.documentElement.clientHeight + 1) / 1080
  document.documentElement.style.fontSize = (scale) * 100 + 'px'
}

function isPc() {
  var width = window.innerWidth || document.documentElement.clientWidth;
  if (width < 1385) {
    console.log(width, '移动端')
    let pc_page = document.getElementById('pc_page')
    let mobile_page = document.getElementById('mobile_page')
    pc_page.style.display = 'none'
    mobile_page.style.display = 'block'
  } else {
    console.log(width, 'pc端')
    let pc_page = document.getElementById('pc_page')
    let mobile_page = document.getElementById('mobile_page')
    pc_page.style.display = 'block'
    mobile_page.style.display = 'none'
  }

}

setRem()
isPc()
window.onresize = function () {
  setRem()
  isPc()
}