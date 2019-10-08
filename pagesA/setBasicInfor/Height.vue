<template>
	<view class="full">
		<view class="flex padding justify-center">
			<view class="text-black text-bold text-xl">您的身高是?</view>
		</view>
		<view class="flex padding justify-center">
			<!-- <view class="text-black text-df padding solid heightValue text-center">{{height}}cm</view> -->
		
			<view class="uni-list text-mauve">
				<view class="uni-list-cell text-mauve">
					<view class="uni-list-cell-db text-mauve">
						<picker class="text-mauve" @change="bindPickerChanges" range-key="name" :data-index="22" :data-id="objectArray[index].id" :value="index" :range="objectArray">
							<view class="uni-input text-black text-df padding solid heightValue text-center">{{objectArray[index].name}}cm</view>
							<!-- 还是建议用input保存,可能picker更新不及时 -->
							<input class="text-mauve" type="text" :value="objectArray[index].id" hidden/>
						</picker>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				height:154,
				objectArray: [
					{id: 0,name: 140},{id: 1,name: 141},{id: 2,name: 142},{id: 3,name: 143},{id: 4,name: 144},{id: 5,name: 145},{id: 6,name: 146},{id: 7,name: 147},{id: 8,name: 148},{id: 9,name: 149},
					{id: 10,name: 150},{id: 11,name: 151},{id: 12,name: 152},{id: 13,name: 153},{id: 14,name: 154},{id: 15,name: 155},{id: 16,name: 156},{id: 17,name: 157},{id: 18,name: 158},{id: 19,name: 159},
					{id: 20,name: 160},{id: 21,name: 161},{id: 22,name: 162},{id: 23,name: 163},{id: 24,name: 164},{id: 25,name: 165},{id: 26,name: 166},{id: 27,name: 167},{id: 28,name: 168},{id: 29,name: 169},
					{id: 30,name: 170},{id: 31,name: 171},{id: 32,name: 172},{id: 33,name: 173},{id: 34,name: 174},{id: 35,name: 175},{id: 36,name: 176},{id: 37,name: 177},{id: 38,name: 178},{id: 39,name: 179},
					{id: 40,name: 180},{id: 41,name: 181},{id: 42,name: 182},{id: 43,name: 183},{id: 44,name: 184},{id: 45,name: 185},{id: 46,name: 186},{id: 47,name: 187},{id: 48,name: 188},{id: 49,name: 189},
					{id: 50,name: 190},{id: 51,name: 191},{id: 52,name: 192},{id: 53,name: 193},{id: 54,name: 194},{id: 55,name: 195},{id: 56,name: 196},{id: 57,name: 197},{id: 58,name: 198},{id: 59,name: 199},
					{id: 60,name: 200},{id: 61,name: 201},{id: 62,name: 202},{id: 63,name: 203},{id: 64,name: 204},{id: 65,name: 205},{id: 66,name: 206},{id: 67,name: 207},{id: 68,name: 208},{id: 69,name: 209},
					{id: 70,name: 210},{id: 71,name: 211},{id: 72,name: 212},{id: 73,name: 213},{id: 74,name: 214},{id: 75,name: 215},{id: 76,name: 216},{id: 77,name: 217},{id: 78,name: 218},{id: 79,name: 219},
                ],
				index:0,
			}
		},
		onLoad() {
			
		},
		methods:{
			bindPickerChanges: function(e) {
                this.index = e.detail.value
				this.height = this.objectArray[this.index].name;
				setTimeout(function(){
					uni.navigateTo({
						url:'Figure',
						success() {
							console.log("success toFigure");
						},
						fail(){
							console.log("fail toFigure");
						}
					})
					},1000)
				// console.log(this.height);
    //             console.log('可以传data-xx:xx',e.currentTarget.dataset.index,'\n默认传过来的是下标：',e.detail.value,'\n也可以传普通json传过来的id等：',e.currentTarget.dataset.id);
            }
		}
	}
</script>

<style scoped>
	.text-bold{
		margin-top: 80upx;
		margin-bottom: 70upx;
	}
	.heightValue{
		width:500upx;
		border-radius: 30upx;
	}
	.uni-list{
		color: #000000;
	}
	.uni-list-cell{
		color: #000000;
	}
	.uni-list-cell-db{
		color: #000000;
	}
</style>
