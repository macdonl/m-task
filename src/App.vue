<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
  body{
    background: #f7f7f7;
  }
  div,ul,li{
    box-sizing: border-box;
  }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
  button.btn{
    background: #46dbd5;
    font-size: 12px;
    color: #fff;
    padding: 0 10px;
    height: 25px;
    border: none;
    border-radius: 3px;
  }
  button.btn.btn-large{
    width: 100%;
    height: 40px;
    border-radius: 20px;
    font-size: 16px;
  }
  .warning{
    font-size: 14px;
    color: red;
  }
  .orange{
    color: #ff783e;
  }
  .arrow-left{
    display: inline-block;
    width: 7px;
    height: 7px;
    border-right: 2px solid #aaaaaa;
    border-bottom: 2px solid #aaaaaa;
    transform:rotate(-45deg);
    -ms-transform:rotate(-45deg);
    -moz-transform:rotate(-45deg);
    -webkit-transform:rotate(-45deg);
    -o-transform:rotate(-45deg);
  }
  .arrow-right{
    display: inline-block;
    width: 7px;
    height: 7px;
    border-right: 2px solid #aaaaaa;
    border-bottom: 2px solid #aaaaaa;
    transform:rotate(135deg);
    -ms-transform:rotate(135deg);
    -moz-transform:rotate(135deg);
    -webkit-transform:rotate(135deg);
    -o-transform:rotate(135deg);
  }
  .grey{
    color: #999;
    font-size: 14px;
  }
</style>
