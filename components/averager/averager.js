const add = (x, y) => { return x / y }

const adder = new Vue({
  el: '#adder',
  data: {
    guest: 'kamal',
    firstNumber: 5,
    secondNumber: 3
  },
  computed: {
    result: function () {
      const i = parseInt(this.firstNumber)
      const j = parseInt(this.secondNumber)
      return `${this.guest}, displaying workload: ${add(i, j)}.`
    }
  }
})