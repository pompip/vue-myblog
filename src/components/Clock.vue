<template>
  <div id="clock">
    <p class="date">{{ date }}</p>
    <p class="time">{{ time }}</p>
  </div>
</template>
<script>
export default {
  data: () => {
    return {
      time: "00:14:13",
      date: "2019-05-23 THU"
    };
  },
  created() {
    var timerID = setInterval(this.updateTime, 1000);
  },
  methods: {
    zeroPadding: function(num, digit) {
      var zero = "";
      for (var i = 0; i < digit; i++) {
        zero += "0";
      }
      return (zero + num).slice(-digit);
    },
    updateTime: function() {
      var week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
      var cd = new Date();
      this.time =
        this.zeroPadding(cd.getHours(), 2) +
        ":" +
        this.zeroPadding(cd.getMinutes(), 2) +
        ":" +
        this.zeroPadding(cd.getSeconds(), 2);
      this.date =
        this.zeroPadding(cd.getFullYear(), 4) +
        "-" +
        this.zeroPadding(cd.getMonth() + 1, 2) +
        "-" +
        this.zeroPadding(cd.getDate(), 2) +
        " " +
        week[cd.getDay()];
    }
  }
};
</script>

<style scoped>
#clock {
 
  background-size: 100%;
  font-family: "Share Tech Mono", monospace;
  color: green;
  text-align: center;
  padding: 20px 0;
  box-sizing: border-box;

  text-shadow: 0 0 20px #0aafe6, 0 0 20px rgba(10, 175, 230, 0);
}
#clock .time {
  letter-spacing: 0.05em;
  font-size: 40px;
  padding: 5px 0;
}
#clock .date {
  letter-spacing: 0.1em;
  font-size: 24px;
}
#clock .text {
  letter-spacing: 0.1em;
  font-size: 12px;
  padding: 20px 0 0;
}
</style>

