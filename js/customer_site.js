const CUSTOMER_SITES = {
    qiqi: {
        api: 'https://www.qiqidys.com/api.php/provide/vod',
        name: '七七资源',
    }
 };       

    dyttzy: {
        api: 'http://caiji.dyttzyapi.com/api.php/provide/vod',
        name: 'TV-电影天堂',
    }
 };       

    ruyi: {
        api: 'https://cj.rycjapi.com/api.php/provide/vod',
        name: '如意资源',
    }
 };       

    souavzy: {
        api: 'https://api.souavzy.vip/api.php/provide/vod',
        name: 'souavZY',
    }
   
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
