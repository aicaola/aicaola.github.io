var newestUrls = [
    'https://peizisky.cc',
    'https://aicaola.klxqr.cc',
    'https://aicaola.xztds.cyou'
];
var otherUrls = [
	'https://aicaola.github.io'
];
var foreverUrls = [
    'aicaoladizhi@gmail.com',
	'爱操啦地址(拼音)加上谷歌邮箱后缀@gmail.com'
];
var notices = [
    '* 我们推荐PC和Andriod手机用户使用Chrome(谷歌)浏览器访问，iPhone用户我们建议您使用手机自带Safria浏览器访问。',
    //'* 为了防止域名劫持而无法访问，请设置手机和PC的DNS，我们推荐使用8.8.8.8和1.1.1.1。',
    '* 大陆地区用户我们建议您可以使用VPN或者代理的方式来访问我们的永久地址。',
	'* 大陆地区用户我们强烈建议您截图收藏当前页面(aicaola.github.io)。'
];

function createFieldElem(option) {
    var title = option.title;
    var items = option.items;
    var plainText = option.plainText;
    var classStr = option.classStr;
    var text = option.text;

    var fieldElem = document.createElement('div');
    var fieldClass = ['field', classStr].join(' ');
    fieldElem.setAttribute('class', fieldClass);

    var titleElem = document.createElement('h4');
    titleElem.setAttribute('class', 'title');
    titleElem.innerHTML = title;
    fieldElem.appendChild(titleElem);

    var ulElem = document.createElement('ul');
    var htmlStr = ''
    for (var i = 0; i < items.length; i++) {
        if (plainText) {
            htmlStr = htmlStr + '<li>' + items[i] + '</li>';
        } else {
            htmlStr = htmlStr + '<li><a href="' + items[i] + '" target="_blank">' + items[i] + '</a></li>';
        }
    }

    // For text
    if (text) {
        htmlStr = htmlStr + '<li class="text">' + text + '</li>';
    }

    ulElem.innerHTML = htmlStr;
    fieldElem.appendChild(ulElem);
    return fieldElem;
}

window.onload = function () {
    var mainElem = document.getElementById('main');
    // append logo
    var logoElem = document.createElement('div');
    logoElem.setAttribute('class', 'brand');
    logoElem.setAttribute('id', 'logo');
    logoElem.innerHTML = '爱 <span>草啦</span><span class="flag">视频</span>'
    mainElem.appendChild(logoElem);

    // newest urls
    var newestFieldElem = createFieldElem({title: '最新地址', items: newestUrls, text: '请使用https://协议访问爱草啦'});
    mainElem.appendChild(newestFieldElem);
	
    // other urls
    var otherFieldElem = createFieldElem({title: '请收藏永久地址发布页', items: otherUrls});
    mainElem.appendChild(otherFieldElem);

    // forever urls
    var foreverFieldElem = createFieldElem({title: '发送邮件获得最新地址', items: foreverUrls});
    mainElem.appendChild(foreverFieldElem);
	
    // Description
    var noticeFieldElem = createFieldElem({title: '注意事项', items: notices, plainText: true, classStr: 'desc'});
    mainElem.appendChild(noticeFieldElem);
}
