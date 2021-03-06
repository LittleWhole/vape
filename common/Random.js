class Random {
    static nextInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }
  
    static nextFloat(min, max) {
      return this.nextInt(min * 100, (max * 100) + 1) / 100;
    }
  
    static roll() {
      return this.nextFloat(0, 100);
    }
  
    static arrayElement(array) {
      return array[this.nextInt(0, array.length)];
    }
  }
  
  module.exports = Random;