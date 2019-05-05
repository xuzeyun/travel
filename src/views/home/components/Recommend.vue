<template>
  <div>
    <div class="rec-title">
      热销推荐
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
            <button type="button" name="button">查看详情</button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
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
      padding: .2rem .3rem
      overflow: hidden
      .img-box
        float: left
        width: 2rem
        height: 2rem
        background: #ddd
        .img-cont
          width: 100%
      .text-box
        box-sizing: border-box;
        padding:.2rem 0 0 2.2rem
        .title
          font-size: .3rem
          ellipsis()
        .desc
          margin-top: .2rem
          font-size: .3rem
          color: #999
          ellipsis()
        button
          margin-top: .2rem
          background: orange
          color:#fff
          padding: .1rem .2rem
          font-size: .3rem
          border-radius: .1rem
</style>
