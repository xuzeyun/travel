<template>
  <div>
    <div class="rec-title">
      周末去哪儿
    </div>
    <div class="list">
      <ul>
        <li class="border-bottom" v-for="item of recList" :key="item.id">
          <div class="img-box">
            <img class="img-cont" :src="item.imgUrl" alt="">
          </div>
          <div class="text-box">
            <p class="title">{{item.title}}</p>
            <p class="desc">{{item.intro}}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data (){
    return {
      recList: [
        {
          id: '001',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg',
          title: '北京刘老根大舞台北京刘老根大舞台北京刘老根大舞台北京刘老根大舞台北京刘老根大舞台北京刘老根大舞台',
          intro: '赵本山团队集体亮相',
        },
        {
          id: '002',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg',
          title: '北京刘老根大舞台',
          intro: '赵本山团队集体亮相',
        },
        {
          id: '003',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg',
          title: '北京刘老根大舞台',
          intro: '赵本山团队集体亮相',
        }
      ]
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import '~@/assets/styles/mixins.styl'
  .rec-title
    line-height: .8rem
    background: #eee
    text-indent: .2rem
    margin-top: .2rem
  .list
    li
      box-sizing: border-box
      padding: 0 0
      overflow: hidden
      .img-box
        width: 100%
        height: 2rem
        background: #ddd
        overflow: hidden
        .img-cont
          width: 100%
          height: 100%
      .text-box
        box-sizing: border-box;
        padding:0 0 0 0
        .title
          font-size: .3rem
          ellipsis()
          padding: 0.2rem 0.1rem
        .desc
          margin-top: 0
          font-size: .3rem
          color: #999
          padding: 0rem 0.1rem 0.2rem
          ellipsis()
</style>
