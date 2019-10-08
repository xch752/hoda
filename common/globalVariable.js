let gender = '';
let uploadAvatar = '';
let uploadCertification = 'https://static.mianyangjuan.com//Upload_Avatar@3x.png';
let chatList = [];
let msgs = [];
let nowMsg = [];
let nim = {};
let appKey = '447c6d115707b7837feb32738915b9f4';
let token = 'ef9535158b9678b58528972d2aba2b04';
let account = '587';
let isChatRoom = '';
let userId = '';
let myInfo = '';
let sex = '';
let isMember = '';


function calcTimeHeader(time) {
			  // 格式化传入时间
			  let date = new Date(parseInt(time)),
			    year = date.getUTCFullYear(),
			    month = date.getUTCMonth(),
			    day = date.getDate(),
			    hour = date.getHours(),
			    minute = date.getUTCMinutes()
			  // 获取当前时间
			  let currentDate = new Date(),
			    currentYear = date.getUTCFullYear(),
			    currentMonth = date.getUTCMonth(),
			    currentDay = currentDate.getDate()
			  // 计算是否是同一天
			  if (currentYear == year && currentMonth == month && currentDay == day) {//同一天直接返回
			    if (hour > 12) {
			      return `下午 ${hour}:${minute < 10 ? '0' + minute : minute}`
			    } else {
			      return `上午 ${hour}:${minute < 10 ? '0' + minute : minute}`
			    }
			  }
			  // 计算是否是昨天
			  let yesterday = new Date(currentDate - 24 * 3600 * 1000)
			  if (year == yesterday.getUTCFullYear() && month == yesterday.getUTCMonth && day == yesterday.getDate()) {//昨天
			    return `昨天 ${hour}:${minute < 10 ? '0' + minute : minute}`
			  } else {
			    return `${year}-${month + 1}-${day} ${hour}:${minute < 10 ? '0' + minute : minute}`
			  }
			}

export default{
	gender,
	uploadAvatar,
	uploadCertification,
	chatList,
	msgs,
	nowMsg,
	nim,
	appKey,
	token,
	account,
	calcTimeHeader,
	isChatRoom,
	userId,
	myInfo,
	sex,
	isMember
}