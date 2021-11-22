


// 生成指定范围随机数
export const randomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// 数字千分位分隔
export const format = (n) => {
    let num = n.toString();
    let len = num.length;
    if (len <= 3) {
        return num;
    } else {
        let temp = '';
        let remainder = len % 3;
        if (remainder > 0) { // 不是3的整数倍
            return num.slice(0, remainder) + ',' + num.slice(remainder, len).match(/\d{3}/g).join(',') + temp;
        } else { // 3的整数倍
            return num.slice(0, len).match(/\d{3}/g).join(',') + temp; 
        }
    }
}

// 数组中获取随机数
export const sample = arr => arr[Math.floor(Math.random() * arr.length)];

// 生成随机字符串
export const randomString = (len) => {
    let chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz123456789';
    let strLen = chars.length;
    let randomStr = '';
    for (let i = 0; i < len; i++) {
        randomStr += chars.charAt(Math.floor(Math.random() * strLen));
    }
    return randomStr;
};

// 数字转化为大写金额
export const digitUppercase = (n) => {
    const fraction = ['角', '分'];
    const digit = [
        '零', '壹', '贰', '叁', '肆',
        '伍', '陆', '柒', '捌', '玖'
    ];
    const unit = [
        ['元', '万', '亿'],
        ['', '拾', '佰', '仟']
    ];
    n = Math.abs(n);
    let s = '';
    for (let i = 0; i < fraction.length; i++) {
        s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '');
    }
    s = s || '整';
    n = Math.floor(n);
    for (let i = 0; i < unit[0].length && n > 0; i++) {
        let p = '';
        for (let j = 0; j < unit[1].length && n > 0; j++) {
            p = digit[n % 10] + unit[1][j] + p;
            n = Math.floor(n / 10);
        }
        s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s;
    }
    return s.replace(/(零.)*零元/, '元')
        .replace(/(零.)+/g, '零')
        .replace(/^整$/, '零元整');
};

// 数字转化为中文数字
export const intToChinese = (value) => {
 const str = String(value);
 const len = str.length-1;
 const idxs = ['','十','百','千','万','十','百','千','亿','十','百','千','万','十','百','千','亿'];
 const num = ['零','一','二','三','四','五','六','七','八','九'];
 return str.replace(/([1-9]|0+)/g, ( $, $1, idx, full) => {
    let pos = 0;
    if($1[0] !== '0'){
      pos = len-idx;
      if(idx == 0 && $1[0] == 1 && idxs[len-idx] == '十'){
      	 return idxs[len-idx];
      }
     	return num[$1[0]] + idxs[len-idx];
    } else {
     	let left = len - idx;
     	let right = len - idx + $1.length;
     	if(Math.floor(right / 4) - Math.floor(left / 4) > 0){
      		pos = left - left % 4;
     	}
     	if( pos ){
      		return idxs[pos] + num[$1[0]];
     	} else if( idx + $1.length >= len ){
      		return '';
     	}else {
      		return num[$1[0]]
     	}
    }
   });
}
// 存储loalStorage
export const loalStorageSet = (key, value) => {
    if (!key) return;
    if (typeof value !== 'string') {
        value = JSON.stringify(value);
    }
    window.localStorage.setItem(key, value);
};
// 测试拉取服务器端代码
export const testFetch = (params) => {
    console.log(params);
};
// 测试拉取服务器端代码222
export const testFetch22 = (params) => {
    console.log(params);
};
