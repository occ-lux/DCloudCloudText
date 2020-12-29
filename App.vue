<script>
	export default {
		onLaunch: function() {
			
		},
		onShow: function() {
			
		},
		onHide: function() {
			
		}
	}
</script>

<style>
/*每个页面公共css */
page{
	overflow-x: hidden;
}
.w100{
	width: 100%;
}
.h100{
	height: 100%;
}
.imagewh {
	width: 100%;
	height: 100%;
}
.imagewhr {
	width: 100%;
	height: 100%;
	border-radius: 100%;
}
.flex {
	display: flex;
	box-sizing: border-box;
}
/* // 左对齐 */
.direction-row {
	flex-direction: row;
}
/* // 右对齐(div反向) */
.direction-row-reverse {
	flex-direction: row-reverse;
}
/* // 纵向排列 */
.direction-column {
	flex-direction: column;
}
/* // 反向纵向排列(从下往上排列) */
.direction-column-reverse {
	flex-direction: column-reverse;
}
/* // 最上(top: 0;) */
.justify-start {
	justify-content: flex-start;
}
/* // 最下(bottom: 0;) */
.justify-end {
	justify-content: flex-end;
}
/* // 平均分布 */
.justify-between {
	justify-content: space-between;
}
/* // 带间隔的平均分布 */
.justify-around {
	justify-content: space-around;
}
/* // 从头排列 */
.align-start {
	align-items: flex-start;
}
/* // 从尾排列(div正向) */
.align-end {
	align-items: flex-end;
}
/* // 左右居中 */
.align-center {
	align-items: center;
}
/* // 上下居中 */
.justify-center {
	justify-content: center;
}
/* // 一行分布 */
.flex-nowrap {
	flex-wrap: nowrap;
}
/* // 多行分布 */
.flex-wrap {
	flex-wrap: wrap;
}
/* // 反向多行分布(最后一个放在开头,开始反向排列) */
.flex-wrap-reverse {
	flex-wrap: wrap-reverse;
}
.flex-1{
	flex: 1;
}
</style>
