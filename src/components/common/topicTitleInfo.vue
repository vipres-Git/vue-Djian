<!--
 * @Date         : 2020-06-23 14:31:03
 * @LastEditors  : 曾迪
 * @LastEditTime : 2020-07-07 17:03:01
 * @FilePath     : \党建项目git同步目录\dangjianxiangmupcyidongduan\src\components\common\topicTitleInfo.vue
 * @Description  : 
--> 
<template>
  <div>
    <!-- 这里是专题模块 带title -->
    <div class="mx-topic-wrapper">
      <div class="mx-topic mx-m">
        <!--item-title start-->
        <div class="mx-item-title">
          <strong>专题 Topics</strong>
          <span class="mx-item-more">
            <a href="javascript:;" @click="goArticleList(topicList,activeMenuId,1,0)">
              查看更多
              <i class="iconfont icon-jiantouyou"></i>
            </a>
          </span>
        </div>
        <!--item-title end-->
        <ul>
          <!-- 一个li start -->
          <li v-for="item in (topicList || '').slice(0,2)" :key="item.id">
            <!-- <a href target="_blank" class="clearfix"> -->
              <router-link :to="{path:'/topic',query:{
                topicsId:item.id
              }}"  class="clearfix">
              <img :src="item.path?item.path:''" alt />
              <span>
                <strong>{{item.name}}</strong>
                <em>{{item.description}}</em>
              </span>
              </router-link>
            <!-- </a> -->
          </li>
           
          
        </ul>
        
      </div>
    </div>
    <!-- 底部墙-->
       
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  props: {
    topicList: {
      type: Array
    },
    //标识变量,判断当前这个组件来自哪个页面
    activeMenuId:{

    },
   
  },
  data() {
    return {
      ipAddress: ""
    };
  },
  created() {
     this.ipAddress = this.$store.state.ipAddress;
    
  },
  mounted() {
   
  },
  methods:{
    //跳到文章列表展示页 isMore 默认是查看更多跳转过去的
    goArticleList(totalData,activeMenuId,isTopic=0,isMore =1) {
      //拿到当前模块下的所有数据
      console.log(totalData);
      totalData = JSON.stringify(totalData);
      //跳转到对应的文章详情主页  组件为listingNewsMore.attr-value
      this.$router.push({
        path: "/articleList",
        query: { totalData: totalData,activeMenuId:activeMenuId,isTopic:isTopic,isMore: isMore }
      });
    }
  }
};
</script>

<style scoped="scoped" lang="scss">
// 设置间距倍数
$times: 2;
@media only screen and (max-width: 959px) {
  .mx-topic-wrapper {
    /* 移动端默认百分百宽 */
    width: 100vw;
  }
  .mx-topic ul li {
    padding: 0;
  }
  .mx-topic ul li a {
    padding: 15px * $times !important;
  }
  .mx-topic ul li img {
    width: 70px * $times;
    height:70px*$times;
  }
  .mx-topic ul li span {
    margin-left: 80px * $times;
  }
  .mx-topic ul li span strong {
    font-size: 16px * $times;
    line-height: 28px * $times;
    height: 28px * $times;
  }
  .mx-topic ul li span em {
    font-size: 12px * $times;
    line-height: 20px * $times !important;
    height: 40px * $times;
  }
}
</style>

