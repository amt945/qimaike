webpackJsonp([3],{RaQ3:function(t,e){},oF1k:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("qnXt"),i=s("zNUS");s.n(i).a.mock("/api/CourseData",{Data:[{time:"2015年-2021年",company:"中软国际",introduce:"一：华为学习云是一个企业多运营商的学习平台，站点有（学习云、共同学习社区、mgmt运营商管理后台、admin超级管理后台、eserve华为学习内部管理平台）等，都是跟学习相关的管理端，客户端，有多个终端（web,APP）。起初是传统的开发模式，从2016年开始转变成微服务化的开发模式，其中华为学习云共同社区是用discuz!开发的，discuz!模板diy是进行的二次开发。后台管理使用的是.net 微软的MVC框架开发的。二：自服务平台(企业视图，运营商视图，后台管理视图，电商企业视图)，该平台是华为服务提供企业管理，运营商管理一体的平台。三：server平台(拨测任务，采集任务，包检测)是服务终端管理的平台，这些平台前端开发使用的技术:vue全家桶（vue-cli + vue2.0 + vuex + vue-router + axios）,bootstrap,css,sea.js,jquery,ztree,echarts,hicharts,canvas，jtop，egg.js,exprees.js",timeintroduce:[{info:"2015年-2016年：负责华为学习云portal站点网页设计，海报宣传，及视频动画设计，各类活动的广告设计，APP界面设计<br>2016年-2017年：负责华为学习云mgmt管理后台以及eserve讲师管理端界面设计，以及web前端开发<br>2017年-2019年：负责hiclc社区站点网页设计，海报宣传，各类活动的广告设计，以及web前端开发<br>2019年-2020年：负责自服务平台(企业视图，运营商视图，后台视图)，web前端开发"}]},{time:"2012年-2015年",company:"软通动力",introduce:"华为云盘做的是一个内部使用的项目，是一个内部文件管理系统，其中有PC客户端，web端，APP端。",timeintroduce:[{info:"2012年-2013年：负责华为桌面云、itools、海报宣传，网页设计，及视频动画设计，负责各类活动的广告设计。 <br>2013年-2014年：负责华为iDesk桌面管家：便携服务,消息中心， 界面UI设计，负责办公装备论坛BSS网页设计及前端。负责anyoffice,iDesk,office,办公装备,华为云盘（onebox）,iAccess等产品各类活动广告设计。 <br>2014年-2015年：负责iAccess官方网站及华为云盘（onebox）网站web端及界面UI设计，对网站整体表现风格的定位，对用户视觉感受的整体把握;<br>我主要带领领视觉团队负责网站web前面页面设计以及APP界面设计以及网站web页面（css,js,jquery，bootatrap）开发"}]},{time:"2010年-2012年",company:"上海崛兴网络科技公司",introduce:"项目做的是传统的网站开发，做的是一个护肤品类型的网站，在该项目我主要是做网站页面UI设计，以及各类广告设计，以及网站静态页面开发。",timeintroduce:[{info:"2010年-2011年：负责公司VIIbeautiful商城网站设计以及web前端开发。<br>2011年-2012年:负责公司淘宝店铺装修，以及各类广告设计。"}]}]});var r={data:function(){return{courseData:[]}},components:{headerBar:a.b,footerBar:a.a},mounted:function(){this.getCourseData()},methods:{getCourseData:function(){var t=this;this.$axios.get("/api/CourseData").then(function(e){t.courseData=e.data.Data})}}},c={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"wxz-container"},[s("header-bar"),t._v(" "),s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"container"},[s("div",{staticClass:"wxz-content clearfix"},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12 col-xs-12"},[s("ul",{staticClass:"list-unstyled wxz-course-menu"},t._l(t.courseData,function(e,a){return s("li",{key:a,staticClass:"wxz-course-list"},[s("span",{staticClass:"wxz-course-data"},[t._v(t._s(e.time))]),t._v(" "),s("h4",[t._v(t._s(e.company))]),t._v(" "),s("p",[t._v(t._s(e.introduce))]),t._v(" "),s("ul",{staticClass:"list-unstyled"},t._l(e.timeintroduce,function(e,a){return s("li",{domProps:{innerHTML:t._s(e.info)}})}))])}))])])])])]),t._v(" "),s("footer-bar")],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12 col-xs-12 text-center"},[e("h1",{staticClass:"text-rem3"},[this._v("\n                            那些年的历程\n                        ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-12 text-center"},[e("img",{staticClass:"img-responsive img-auto",attrs:{src:s("NQWX")}})])])}]};var n=s("VU/8")(r,c,!1,function(t){s("RaQ3")},"data-v-4ad9da30",null);e.default=n.exports}});
//# sourceMappingURL=3.325e0d234b5e939c9251.js.map