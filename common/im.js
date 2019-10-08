import NIM from '../util/NIM_Web_NIM_weixin_v6.8.0.js'
import common from '../common/globalVariable.js'
import Request from '../util/luch-request/request.js'


export default class IMController {
	constructor(headers) {
		common.nim = NIM.getInstance({
			debug: false,
			appKey: '447c6d115707b7837feb32738915b9f4',
			account: headers.account,
			token: headers.token,
			db:true, //若不要开启数据库请设置false。SDK默认为true。
			// privateConf: {}, // 私有化部署方案所需的配置
			//连接建立后的回调
			onconnect: onConnect,
			//即将重连的回调
			onwillreconnect: onWillReconnect,
			//断开连接后的回调
			ondisconnect: onDisconnect,
			//发生错误的回调, 会传入错误对象
			onerror: onError,
			//同步最近会话列表回调, 会传入会话列表, 按时间正序排列, 即最近聊过天的放在列表的最后面。
			onsessions:onSessions,
			//更新会话的回调, 会传入会话, 以下情况会收到此回调
			onupdatesession: onUpdateSession,
			//同步漫游消息
			onroamingmsgs: onRoamingMsgs,
			//同步离线消息的回调, 每个会话对应一个回调, 会传入消息数组
			onofflinemsgs: onOfflineMsgs,
			//收到消息的回调, 会传入消息对象
			onmsg: onMsg,
			//我的资料
			onmyinfo: onMyInfo,
			//我的资料更新
			onupdatemyinfo: onUpdateMyInfo,
			//用户资料
			onusers: onUsers,
			//用户资料更新
			onupdateuser: onUpdateUser
		});
		function onConnect() {
		  console.log('连接成功');
		}
		function onWillReconnect(obj) {
		  // 此时说明 SDK 已经断开连接, 请开发者在界面上提示用户连接已断开, 而且正在重新建立连接
		  console.log('即将重连');
		  console.log(obj.retryCount);
		  console.log(obj.duration);
		}
		function onDisconnect(error) {
		  // 此时说明 SDK 处于断开状态, 开发者此时应该根据错误码提示相应的错误信息, 并且跳转到登录页面
		  console.log('丢失连接');
		  console.log(error);
		  if (error) {
		    switch (error.code) {
		      // 账号或者密码错误, 请跳转到登录页面并提示错误
		      case 302:
		        break;
		      // 重复登录, 已经在其它端登录了, 请跳转到登录页面并提示错误
		      case 417:
		        break;
		      // 被踢, 请提示错误后跳转到登录页面
		      case 'kicked':
				// uni.reLaunch({
				// 	url:'../pages/login/login.vue',
				// 	success: () => {
				// 		uni.showModal({
				// 			title:'提示',
				// 			content:'此账号已在别处登陆',
				// 			
				// 		})
				// 	}
				// })
				
				uni.reLaunch({
					url:'pages/login/login.vue',
					success: (res) => {
						uni.showModal({
							title:'提示',
							content:'此账号已在别处登陆'
						})	
						console.log(res);
					},
					fail: (err) => {
						console.log(err);
					}
				})
				
				
		        break;
		      default:
		        break;
		    }
		  }
		}
		function onError(error) {
		  console.log(error);
		}
		function onSessions(sessions) {
		    console.log('收到会话列表', sessions);
			common.chatList = JSON.parse(JSON.stringify(sessions))
			common.chatList.map((cur,index)=>{
				cur.updateTime=common.calcTimeHeader(cur.updateTime)
			})
			console.log('common.chatList',common.chatList)
		}
		function onUpdateSession(session) {
			var flag = false;
		    console.log('会话更新了', session);
			common.chatList.map((cur,index)=>{
				if(cur.to==session.to){
					flag = true;
					common.chatList[index]=session;
					common.chatList[index].updateTime=common.calcTimeHeader(common.chatList[index].updateTime);
					if(common.isChatRoom==session.to){
						common.chatList[index].unread=0;
					}
					console.log('cur',index)
				}
			})
			if(flag == false){
				common.chatList.push(session);
			}
			common.chatList.sort(createComprisonFunction("updateTime"));
			console.log('common.chatList',common.chatList)
		}
		//排序
		function createComprisonFunction(propertyName){
		    return function(object1,object2){
		        var value1 = object1[propertyName];
		        var value2 = object2[propertyName];
		        if(value1 > value2){
		            return -1;
		        }else if(value1 < value2){
		            return 1;
		        }else{
		            return 0;
		        }
		    }
		}
		function updateSessionsUI() {
		    // this.chatList=common.chatList
		}
		function onRoamingMsgs(obj) {
		    console.log('收到漫游消息', obj);
			common.msgs.push(obj)
			common.msgs.map((cur,index)=>{
				cur.time=common.calcTimeHeader(cur.time);
			})
			console.log('common.msgs',common.msgs)
		}
		function onOfflineMsgs(obj) {
		    console.log('收到离线消息', obj);
			// obj.msgs.map((cur,index)=>{
			// 	cur.time=common.calcTimeHeader(cur.time);
			// })
			var flag = false;
			console.log('common.msgs',common.msgs);
			common.msgs.map((cur,index)=>{
				if(cur.to==obj.to){
					flag = true;
					common.msgs[index].msgs.push(...obj.msgs);
				}
			})
			if(flag == false){
				common.msgs.push(obj);
			}
			// common.msgs.map((cur,index)=>{
			// 	cur.time=common.calcTimeHeader(cur.time);
			// })
			console.log('common.msgs',common.msgs)
		}
		function onMsg(msg) {
			var flag = false;
		    console.log('收到消息', msg.scene, msg.type, msg);
			common.msgs.map((cur,index)=>{
				// console.log('cur',cur)
				// console.log('common.msgs',common.msgs)
				// console.log('common.msgs[index]',common.msgs[index])
				// console.log('common.msgs[index].msgs',common.msgs[index].msgs);
				cur.time=common.calcTimeHeader(cur.time);
				if(cur.to==msg.from){
					flag = true;
					common.msgs[index].msgs.push(msg);
					// console.log('common.msgs',common.msgs)
					// console.log('common.msgs[index]',common.msgs[index])
					// console.log('common.msgs[index].msgs',common.msgs[index].msgs);
					
					// common.msgs[index].time=common.calcTimeHeader(common.msgs[index].time);
					// console.log('cur',index)
				}
			})
			if(flag == false){
				common.msgs.push(msg);
			}
		}
		function onMyInfo(user) {
		    console.log('收到我的名片', user);
			common.myInfo = user;
		}
		function onUpdateMyInfo(user) {
		    console.log('我的名片更新了', user);
		}
		function onUsers(users) {
		    console.log('收到用户资料列表', users);
		}
		function onUpdateUser(user) {
		    console.log('用户资料更新了', user);
		}
	}
}