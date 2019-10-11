const avg = (x, y) => { return x / y }

const averager = new Vue({
  el: '#averager',
  data: {
    guest: 'kamal',
    firstNumber: 5,
    secondNumber: 3
  },
  computed: {
    result: function () {
      const i = parseInt(this.firstNumber)
      const j = parseInt(this.secondNumber)
      return `${this.guest}, displaying workload: ${avg(i, j)}.`
    }
  }
})