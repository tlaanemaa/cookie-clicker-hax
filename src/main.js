const cookie = document.getElementById('bigCookie')
const click = () => { cookie.click(); setTimeout(click, 10) }
click()