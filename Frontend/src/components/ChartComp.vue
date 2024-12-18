<script>
    

  export default {
    
    props: {
        points: Array,
        reload: Number
    },

    data() {
      return {
        options: {
          theme: "light2",
          animationEnabled: true,
          title: {
            text: "Item Repartition"
          },
          data: [{
            type: "doughnut",
            startAngle: 90,
            indexLabel: "{label} {y}(#percent%)",
            yValueFormatString: "#,##0",
            toolTipContent: "<span style='\"'color: {color};'\"'>{label}</span>: {y} units",
            dataPoints: this.points
          }]
        },
        styleOptions: {
          width: "100%",
          height: "70%"
        },

      }
    }
  }
</script>
<template>
  <CanvasJSChart v-if="this.$parent.$parent.$parent.points.length" class="w-full " :options="options" :styles="styleOptions"/>
</template>  