//入口文件


//1.在入口文件中引入css
import '../css/index.less'
const { updateDom } = require('../js/tool')
updateDom('app', 'index.html')