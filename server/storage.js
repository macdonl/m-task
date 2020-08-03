let moment = require('moment')
const STORAGE_KEY = 'chatlist';
let initMsg = [{
    userType: 'service',
    username: 'Ami',
    msg: '使用连接https://d66td.com/直接登录，' +
        '复制到浏览器打开。' +
        '三天一单。由于客服比较忙，若您可能有以下问题可以直接单击问题了解，或者耐心等待客服，20分钟内回复',
    time: moment().format("HH:mm:ss")
}]
export default{
    fetch:function(){
        if(window.sessionStorage.getItem(STORAGE_KEY)==null){
            window.sessionStorage.setItem(STORAGE_KEY,JSON.stringify(initMsg));
        }
        return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY)||'[]');
    },
    save:function(item){
        window.sessionStorage.setItem(STORAGE_KEY,JSON.stringify(item));
    }
}