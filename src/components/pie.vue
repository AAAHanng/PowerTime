<template>
  <!-- 饼图组件 -->
  <div class="canvas-container">
    <canvas ref="myCanvas" class="canvas" :style="{ width: `${cWidth *2}px`, height: `${cHeight }px` }"></canvas>
  </div>
</template>

<script>
export default {
  props: {
    centerX: Number,
    centerY: Number,
    radius: Number,
    lineWidth: Number,
    data: Number,
    cWidth: Number,
    cHeight: Number,
    totalOrder:Number,
  },
  mounted() {
    // 数据，取值范围为0-1
    this.drawCircle(this.data / this.totalOrder);
  },
  methods: {
    drawCircle(data) {
      const ctx = this.$refs.myCanvas.getContext('2d');
      const centerX = this.centerX; // 圆环中心 X 坐标
      const centerY = this.centerY; // 圆环中心 Y 坐标
      const radius = this.radius; // 圆环半径
      const lineWidth = this.lineWidth; // 圆环线宽
      const startAngle = -0.5 * Math.PI; // 起始角度为-90度，即12点钟方向
      const endAngle = startAngle + (2 * Math.PI) * data; // 根据数据计算结束角度
      const gradient = ctx.createLinearGradient(centerX - radius, centerY, centerX + radius, centerY);

      const full = 2 * Math.PI;
      const backgroundGradient = ctx.createLinearGradient(centerX - radius, centerY, centerX + radius, centerY);

      // 添加灰色背景颜色比例
      backgroundGradient.addColorStop(0, '#e8e8e8');
      backgroundGradient.addColorStop(1, '#c9c9c9');

      // 添加颜色比例
      gradient.addColorStop(0, '#175cff');
      gradient.addColorStop(0.5, '#1C86EE');
      gradient.addColorStop(1, '#00BFFF');

      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, startAngle, full);
      ctx.lineWidth = lineWidth;
      ctx.strokeStyle = backgroundGradient;
      ctx.stroke();

      // 绘制圆环
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, startAngle, endAngle);
      ctx.lineWidth = lineWidth;
      ctx.strokeStyle = gradient;
      ctx.stroke();

      // 在中间放置数据
      ctx.font = '28px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = 'black';
      ctx.fillText(`${(this.data * 1).toFixed(0)}`, centerX, centerY);
    },
  },
};
</script>

<style>
.canvas{
  width: 100%;
  height: auto;
}
</style>