(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-95fa191a"],{"1b80":function(t,e,a){"use strict";e["a"]={data:function(){return{pagination:{page:1,pageSize:10,total:0,showTotal:function(t,e){return"共 ".concat(t," 条")}}}},computed:{requestData:function(){return{page:this.pagination.page,pageSize:this.pagination.pageSize}}},methods:{init:function(){},pageChange:function(t){this.pagination.page=t,this.requestData.page=t.current,this.init()}}}},"6be7":function(t,e,a){"use strict";a.d(e,"f",(function(){return n})),a.d(e,"l",(function(){return o})),a.d(e,"e",(function(){return s})),a.d(e,"g",(function(){return i})),a.d(e,"k",(function(){return c})),a.d(e,"i",(function(){return d})),a.d(e,"d",(function(){return l})),a.d(e,"j",(function(){return u})),a.d(e,"h",(function(){return p})),a.d(e,"c",(function(){return m})),a.d(e,"b",(function(){return _})),a.d(e,"a",(function(){return f}));var r=a("22b6");function n(t){return r["a"].post("project/project",t)}function o(t){return r["a"].post("project/project/selfList",t)}function s(t){var e="project/project/save";return t.projectCode&&(e="project/project/edit"),r["a"].post(e,t)}function i(t){return r["a"].post("project/project/quit",{projectCode:t})}function c(t){return r["a"].post("project/project/recycle",{projectCode:t})}function d(t){return r["a"].post("project/project/recovery",{projectCode:t})}function l(t){return r["a"].post("project/project/archive",{projectCode:t})}function u(t){return r["a"].post("project/project/recoveryArchive",{projectCode:t})}function p(t){return r["a"].post("project/project/read",{projectCode:t})}function m(t){return r["a"].post("project/project/analysis",t)}function _(t){return r["a"].post("project/project/_projectStats",t)}function f(t){return r["a"].post("project/project/_getProjectReport",t)}},8172:function(t,e,a){"use strict";var r=a("aada"),n=a.n(r);n.a},"81fe":function(t,e,a){"use strict";a.d(e,"c",(function(){return o})),a.d(e,"b",(function(){return s})),a.d(e,"a",(function(){return i})),a.d(e,"d",(function(){return c}));a("3b2b"),a("a481");var r=a("c1df"),n=a.n(r),o=function(t,e){e||(e=n()());var a=n()(e).diff(n()(t),"hours");if(a<=1)return n()(t).fromNow();n()(e).get("date"),n()(t).get("date");var r=n()(t).format("H:mm"),o=n()(t).format("YYYY-MM-DD"),s=n()().weekday(0).format("YYYY-MM-DD"),i=n()().weekday(6).format("YYYY-MM-DD"),c="";return c=o<s?"[上周]dd "+r:o>i?"[下周]dd "+r:"[周]dd "+r,n()(t).calendar(null,{sameDay:"[今天 ]"+n()(t).format("H:mm"),nextDay:"[明天 ]"+r,nextWeek:c,lastDay:"[昨天 ]"+r,lastWeek:c,sameElse:"M月D日 H:mm"})},s=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=n()(t).format("H:mm");e||(a="");var r=n()(t).format("YYYY-MM-DD"),o=n()().weekday(0).format("YYYY-MM-DD"),s=n()().weekday(6).format("YYYY-MM-DD"),i="";return i=r<o?"[上周]dd "+a:r>s?"[下周]dd "+a:"[周]dd "+a,n()(t).calendar(null,{sameDay:"[今天 ]"+n()(t).format("H:mm"),nextDay:"[明天 ]"+a,nextWeek:i,lastDay:"[昨天 ]"+a,lastWeek:i,sameElse:"M月D日 H:mm"})},i=function(t,e){return!e&&t?s(t)+" 开始":t?s(t)+" - "+s(e):s(e)+" 截止"},c=function(t){var e="";void 0==t&&(t=new Date);var a=t.getHours();return a>=0&&a<=4&&(e="深夜了，注意身体，"),a>=4&&a<7&&(e="清晨好， "),a>=7&&a<12&&(e="早安，"),a>=12&&a<=13&&(e="午饭时间到了，"),a>=13&&a<=17&&(e="下午好，"),a>=17&&a<=18&&(e="进入傍晚了，"),a>=18&&a<=20&&(e="吃过晚饭了吗，"),a>=20&&a<=24&&(e="在加班吗？辛苦了，"),e}},aada:function(t,e,a){},ca8d:function(t,e,a){"use strict";a.d(e,"j",(function(){return n})),a.d(e,"h",(function(){return o})),a.d(e,"o",(function(){return s})),a.d(e,"t",(function(){return i})),a.d(e,"r",(function(){return c})),a.d(e,"m",(function(){return d})),a.d(e,"u",(function(){return l})),a.d(e,"q",(function(){return u})),a.d(e,"b",(function(){return p})),a.d(e,"c",(function(){return m})),a.d(e,"s",(function(){return _})),a.d(e,"p",(function(){return f})),a.d(e,"l",(function(){return v})),a.d(e,"k",(function(){return g})),a.d(e,"e",(function(){return k})),a.d(e,"d",(function(){return h})),a.d(e,"i",(function(){return b})),a.d(e,"a",(function(){return j})),a.d(e,"n",(function(){return y})),a.d(e,"g",(function(){return w})),a.d(e,"f",(function(){return x}));var r=a("22b6");function n(t){return r["a"].post("project/task",t)}function o(t){return r["a"].post("project/task/getListByTaskTag",t)}function s(t){return r["a"].post("project/task/selfList",t)}function i(t){return r["a"].post("project/task/taskSources",t)}function c(t){return r["a"].post("project/task/sort",t)}function d(t){return r["a"].post("project/task/save",t)}function l(t){return r["a"].post("project/task/taskToTags",t)}function u(t){return r["a"].post("project/task/setTag",t)}function p(t){return r["a"].post("project/task/assignTask",t)}function m(t){return r["a"].post("project/task/batchAssignTask",t)}function _(t,e){return r["a"].post("project/task/taskDone",{taskCode:t,done:e})}function f(t,e){return r["a"].post("project/task/setPrivate",{taskCode:t,private:e})}function v(t){return r["a"].post("project/task/recycleBatch",t)}function g(t){return r["a"].post("project/task/recovery",{taskCode:t})}function k(t){return r["a"].post("project/task/delete",{taskCode:t})}function h(t){return r["a"].post("project/task/dateTotalForProject",t)}function b(t){return r["a"].post("project/project/getLogBySelfProject",t)}function j(t){return r["a"].post("project/task/_taskWorkTimeList",t)}function y(t){return r["a"].post("project/task/saveTaskWorkTime",t)}function w(t){return r["a"].post("project/task/editTaskWorkTime",t)}function x(t){return r["a"].post("project/task/delTaskWorkTime",t)}},ccce:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home-index"},[a("div",{staticClass:"page-header",staticStyle:{"margin-top":"-10px",position:"relative"}},[a("a-row",{attrs:{gutter:24}},[a("a-col",{attrs:{xl:24,lg:24,md:24,sm:24,xs:24}},[a("div",{staticClass:"header-content"},[a("div",{staticClass:"ant-breadcrumb-title"},[a("span",[t._v("首页")]),a("span",{staticClass:"ant-breadcrumb-separator"},[t._v("/")]),a("span",{staticClass:"ant-breadcrumb-link"},[t._v("任务管理")]),a("span",{staticClass:"ant-breadcrumb-separator"},[t._v("/")]),a("span",{staticClass:"ant-breadcrumb-link"},[t._v("任务中心")])]),a("div",{staticClass:"page-wrapper",staticStyle:{position:"absolute",top:"40px",left:"35px"}},[a("div",{staticClass:"left-content"},[a("div",{staticClass:"avatar"},[a("a-avatar",{attrs:{size:64,src:t.avatar}},[t._v(t._s(t.userInfo.realname))])],1)]),a("div",{staticClass:"right-content"},[a("div",{staticClass:"content-item"},[a("div",{staticClass:"item-title muted"},[t._v("团队数目")]),a("div",{staticClass:"item-text"},[a("span",[t._v(" "+t._s(t.accountsTotal))])])]),a("div",{staticClass:"content-item"},[a("div",{staticClass:"item-title muted"},[t._v("项目数目")]),a("div",{staticClass:"item-text"},[a("span",[t._v(t._s(t.projectTotal))])])]),a("div",{staticClass:"content-item"},[a("div",{staticClass:"item-title muted"},[t._v("任务数目")]),a("div",{staticClass:"item-text"},[a("span",[t._v(t._s(t.tasksTotal))])])])])])])])],1)],1),a("div",{staticClass:"page-wrapper"},[a("a-row",{attrs:{gutter:24}},[a("a-col",{attrs:{xl:16,lg:24,md:24,sm:24,xs:24}},[a("a-card",{staticClass:"project-list",staticStyle:{"margin-bottom":"24px"},attrs:{loading:t.loading,bordered:!1,title:"进行中的项目","body-style":{padding:0}}},[a("router-link",{attrs:{slot:"extra",to:"/project/list/my"},slot:"extra"},[t._v("全部项目")]),a("div",[t._l(t.projectList,(function(e,r){return a("a-card-grid",{key:r,staticClass:"project-card-grid"},[a("a-card",{attrs:{bordered:!1,"body-style":{padding:0}},on:{click:function(a){return t.routerLink("/project/space/task/"+e.code)}}},[a("a-card-meta",[a("div",{staticClass:"card-title",attrs:{slot:"title"},slot:"title"},[a("a-avatar",{attrs:{size:"small",src:e.cover}}),a("router-link",{attrs:{to:"/project/space/task/"+e.code}},[a("a-icon",{directives:[{name:"show",rawName:"v-show",value:e.collected,expression:"item.collected"}],staticStyle:{color:"#ffaf38","margin-right":"6px"},attrs:{type:"star",theme:"filled"}}),t._v("\n                      "+t._s(e.name)+"\n                    ")],1)],1),a("div",{staticClass:"card-description",attrs:{slot:"description"},slot:"description"},[a("a-tooltip",{attrs:{mouseEnterDelay:.3,title:e.description}},[a("span",{staticClass:"description-text"},[e.description?a("span",[t._v(t._s(e.description))]):a("span",[t._v("暂无介绍")])])]),a("a-tooltip",{attrs:{placement:"right",mouseEnterDelay:.3,title:"当前进度："+e.schedule+"%"}},[a("a-progress",{attrs:{strokeWidth:2,showInfo:!1,percent:e.schedule}})],1)],1)]),a("div",{staticClass:"project-item"},[a("a",{attrs:{href:"/#/"}},[t._v(t._s(e.owner_name))]),a("span",{staticClass:"datetime"},[t._v(t._s(t.formatTime(e.create_time)))])])],1)],1)})),t.projectList.length?t._e():a("p",{staticClass:"muted text-center m-t-md m-b-md"},[t._v("\n              暂无项目\n            ")])],2)],1),a("a-card",{staticClass:"activities-list",attrs:{loading:t.loading,title:"动态",bordered:!1}},[a("a-list",t._l(t.activities,(function(e,r){return a("a-list-item",{key:r},[a("a-list-item-meta",[a("a-avatar",{attrs:{slot:"avatar",src:e.member_avatar},slot:"avatar"}),a("div",{attrs:{slot:"title"},slot:"title"},[a("span",[t._v(t._s(e.member_name))]),0==e.is_comment?a("span",[a("span",{domProps:{innerHTML:t._s(e.remark)}})]):t._e(),t._v(" \n                  "),1==e.is_comment?[t._v("\n                    发表了评论\n                    "),a("p",{staticClass:"comment-text"},[t._v(t._s(e.content))])]:t._e(),a("router-link",{staticClass:"right-item",attrs:{target:"_blank",to:"/project/space/task/"+e.project_code+"/detail/"+e.source_code}},[t._v("「 "+t._s(e.task_name)+" 」")])],2),a("div",{attrs:{slot:"description"},slot:"description"},[t._v("\n                  "+t._s(t.formatTime(e.create_time))+" -\n                  "),a("router-link",{staticClass:"muted",attrs:{target:"_blank",to:"/project/space/task/"+e.project_code}},[t._v(t._s(e.project_name))])],1)],1)],1)})),1)],1)],1),a("a-col",{staticStyle:{padding:"0 12px"},attrs:{xl:8,lg:24,md:24,sm:24,xs:24}},[a("a-card",{staticClass:"tasks-list",staticStyle:{"margin-bottom":"24px"},attrs:{title:"我的任务 · "+t.tasks.length,bordered:!1,loading:t.loading}},[a("a-list",t._l(t.tasks,(function(e,r){return a("a-list-item",{key:r},[a("a-list-item-meta",[a("div",{staticStyle:{float:"left"},attrs:{slot:"title"},slot:"title"},[a("a-tag",{attrs:{color:t.tags[e.pri].color}},[t._v(t._s(t.tags[e.pri].name))]),a("router-link",{attrs:{target:"_blank",to:"/project/space/task/"+e.projectInfo.code+"/detail/"+e.code}},[t._v(t._s(e.name))])],1),a("div",{staticStyle:{float:"right"},attrs:{slot:"description"},slot:"description"},[e.end_time?a("span",{staticClass:"label m-r-xs",class:t.showTimeLabel(e.end_time)},[t._v(t._s(t.showTaskTime(e.begin_time,e.end_time)))]):t._e(),a("router-link",{staticClass:"muted",attrs:{target:"_blank",to:"/project/space/task/"+e.projectInfo.code}},[t._v(t._s(e.projectInfo.name))])],1)])],1)})),1)],1),a("a-card",{attrs:{loading:t.loading,title:"团队",bordered:!1}},[a("div",{staticClass:"members"},[a("a-row",t._l(t.accounts,(function(e,r){return a("a-col",{key:r,attrs:{span:12}},[a("a",{staticStyle:{display:"flex","align-items":"center"},on:{click:function(a){return t.routerLink("/members/profile/"+e.membar_account_code+"?key=3")}}},[a("a-avatar",{attrs:{size:"small",src:e.avatar}}),a("span",{staticClass:"member"},[t._v(t._s(e.name))])],1)])})),1)],1)])],1)],1)],1)])},n=[],o=(a("8e6e"),a("ac6a"),a("456d"),a("7f7f"),a("96cf"),a("3b8d")),s=a("bd86"),i=a("5880"),c=a("c1df"),d=a.n(c);var l=a("81fe"),u=(a("6be7"),a("0672"),a("1b80")),p=(a("ca8d"),a("5d2d")),m=a("0fea");function _(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function f(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?_(Object(a),!0).forEach((function(e){Object(s["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):_(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var v={components:{},mixins:[u["a"]],data:function(){return{loading:!1,yiyan:{},projectList:[],projectTotal:0,activities:[],tasks:[],tasksTotal:0,accounts:[],userInfo:{},avatar:"",tags:{0:{name:"普通",color:"green"},1:{name:"紧急",color:"orange"},2:{name:"非常紧急",color:"red"}}}},computed:f({},Object(i["mapState"])({socketAction:function(t){return t.socketAction}}),{helloTime:function(){return Object(l["d"])()}}),created:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.userInfo=p["e"]("cur_user"),t.prev=1,t.next=4,m["queryUserInfoByView"](this.userInfo.username);case 4:this.v_user=t.sent,this.postName=this.v_user[0]["post"],this.departName=this.v_user[0]["name"],this.address=this.v_user[0]["address"],this.bio=this.v_user[0]["bio"],this.avatar=this.userInfo.avatar=window._CONFIG["imgDomainURL"]+"/"+this.v_user[0]["avatar"],t.next=15;break;case 12:t.prev=12,t.t0=t["catch"](1),console.log("工作台设置员工岗位信息/部门信息异常："+t.t0);case 15:try{this.init()}catch(e){console.error(e)}case 16:case"end":return t.stop()}}),t,this,[[1,12]])})));function e(){return t.apply(this,arguments)}return e}(),watch:{$route:function(t,e){this.init()},socketAction:function(t){console.log(t),"organization:task"===t.action&&this.init(!1,!1)}},methods:{init:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t&&(this.projectList=[],this.pagination.page=1,this.pagination.pageSize=9);try{this.getProjectList(e)}catch(a){console.error(a)}try{this.getTasks()}catch(a){console.error(a)}try{this.getTaskLog()}catch(a){console.error(a)}try{this.getAccountList()}catch(a){console.error(a)}},getProjectList:function(t){t&&(this.loading=!0);var e=JSON.parse('{"code":200,"msg":"","data":{"list":[{"id":15566,"cover":"https://beta.vilson.xyz/static/image/default/project-cover.png","name":"yunwisdom","code":"vu7x3wgk1jq9slhf8odpzbnm","description":"","access_control_type":"open","white_list":null,"order":0,"deleted":0,"template_code":"","schedule":90,"create_time":"2020-02-29 14:53:50","organization_code":"3c6wv21apdm0ro84jbxqeylk","deleted_time":null,"private":0,"prefix":"TESTProjec","open_prefix":1,"archive":0,"archive_time":null,"open_begin_time":1,"open_task_private":0,"task_board_theme":"simple","begin_time":null,"end_time":null,"auto_update_schedule":0,"collected":1,"owner_name":"yunwisdom"}],"total":1}}');this.projectList=e.data.list,this.projectTotal=e.data.total,this.loading=!1},getTasks:function(){var t=JSON.parse('{"code":200,"msg":"","data":{"list":[{"id":18301,"code":"il8vco3qyd2fkgnersp4w79a","project_code":"vu7x3wgk1jq9slhf8odpzbnm","name":"少时诵诗书","pri":2,"execute_status":"wait","description":"","create_by":"9opr8l5caxq4sd6m37hbiz1t","done_by":null,"done_time":null,"create_time":"2020-02-29 14:54:12","assign_to":"9opr8l5caxq4sd6m37hbiz1t","deleted":0,"stage_code":"uv1qs06lirwt752b8gxh9ozk","task_tag":null,"done":0,"begin_time":"","end_time":"","remind_time":null,"pcode":"","sort":2,"like":0,"star":0,"deleted_time":null,"private":0,"id_num":3,"path":"","schedule":90,"version_code":"0","features_code":"0","work_time":0,"status":0,"cover":"https://beta.vilson.xyz/static/image/default/project-cover.png","access_control_type":"open","white_list":null,"order":0,"template_code":"","organization_code":"3c6wv21apdm0ro84jbxqeylk","prefix":"TESTProjec","open_prefix":1,"archive":0,"archive_time":null,"open_begin_time":1,"open_task_private":0,"task_board_theme":"simple","auto_update_schedule":0,"priText":"普通","executor":{"name":"yunwisdom","avatar":"https://static.vilson.online/cover.png"},"projectInfo":{"name":"yunwisdom","code":"vu7x3wgk1jq9slhf8odpzbnm"}},{"id":18300,"code":"nb3y2xd7sfgmz9ch6al5w14q","project_code":"vu7x3wgk1jq9slhf8odpzbnm","name":"asdfasdf","pri":0,"execute_status":"wait","description":"","create_by":"9opr8l5caxq4sd6m37hbiz1t","done_by":null,"done_time":null,"create_time":"2020-02-29 14:54:05","assign_to":"9opr8l5caxq4sd6m37hbiz1t","deleted":0,"stage_code":"uv1qs06lirwt752b8gxh9ozk","task_tag":null,"done":0,"begin_time":"","end_time":"","remind_time":null,"pcode":"","sort":0,"like":0,"star":0,"deleted_time":null,"private":0,"id_num":2,"path":"","schedule":90,"version_code":"0","features_code":"0","work_time":0,"status":0,"cover":"https://beta.vilson.xyz/static/image/default/project-cover.png","access_control_type":"open","white_list":null,"order":0,"template_code":"","organization_code":"3c6wv21apdm0ro84jbxqeylk","prefix":"TESTProjec","open_prefix":1,"archive":0,"archive_time":null,"open_begin_time":1,"open_task_private":0,"task_board_theme":"simple","auto_update_schedule":0,"priText":"普通","executor":{"name":"yunwisdom","avatar":"https://static.vilson.online/cover.png"},"projectInfo":{"name":"yunwisdom","code":"vu7x3wgk1jq9slhf8odpzbnm"}},{"id":18299,"code":"xt9630ybg412jovrscp8iknz","project_code":"vu7x3wgk1jq9slhf8odpzbnm","name":"asdfasdf","pri":1,"execute_status":"wait","description":"","create_by":"9opr8l5caxq4sd6m37hbiz1t","done_by":null,"done_time":null,"create_time":"2020-02-29 14:54:02","assign_to":"9opr8l5caxq4sd6m37hbiz1t","deleted":0,"stage_code":"uv1qs06lirwt752b8gxh9ozk","task_tag":null,"done":0,"begin_time":"","end_time":"","remind_time":null,"pcode":"","sort":1,"like":0,"star":0,"deleted_time":null,"private":0,"id_num":1,"path":"","schedule":90,"version_code":"0","features_code":"0","work_time":0,"status":0,"cover":"https://beta.vilson.xyz/static/image/default/project-cover.png","access_control_type":"open","white_list":null,"order":0,"template_code":"","organization_code":"3c6wv21apdm0ro84jbxqeylk","prefix":"TESTProjec","open_prefix":1,"archive":0,"archive_time":null,"open_begin_time":1,"open_task_private":0,"task_board_theme":"simple","auto_update_schedule":0,"priText":"普通","executor":{"name":"yunwisdom","avatar":"https://static.vilson.online/cover.png"},"projectInfo":{"name":"yunwisdom","code":"vu7x3wgk1jq9slhf8odpzbnm"}}],"total":3}}');this.tasks=t.data.list,this.tasksTotal=t.data.total},getTaskLog:function(){var t=JSON.parse('{"code":200,"msg":"","data":[{"remark":"将任务移动到 已完成","content":"asdfasdf","is_comment":0,"create_time":"2020-04-03 10:12:42","project_name":"yunwisdom","task_name":"asdfasdf","source_code":"xt9630ybg412jovrscp8iknz","project_code":"vu7x3wgk1jq9slhf8odpzbnm","member_avatar":"https://static.vilson.online/cover.png","member_name":"yunwisdom"},{"remark":"将任务移动到 已完成","content":"asdfasdf","is_comment":0,"create_time":"2020-04-03 10:12:39","project_name":"yunwisdom","task_name":"asdfasdf","source_code":"nb3y2xd7sfgmz9ch6al5w14q","project_code":"vu7x3wgk1jq9slhf8odpzbnm","member_avatar":"https://static.vilson.online/cover.png","member_name":"yunwisdom"},{"remark":"将任务移动到 进行中","content":"asdfasdf","is_comment":0,"create_time":"2020-02-29 14:54:14","project_name":"yunwisdom","task_name":"asdfasdf","source_code":"xt9630ybg412jovrscp8iknz","project_code":"vu7x3wgk1jq9slhf8odpzbnm","member_avatar":"https://static.vilson.online/cover.png","member_name":"yunwisdom"},{"remark":"认领了任务 ","content":"","is_comment":0,"create_time":"2020-02-29 14:54:12","project_name":"yunwisdom","task_name":"少时诵诗书","source_code":"il8vco3qyd2fkgnersp4w79a","project_code":"vu7x3wgk1jq9slhf8odpzbnm","member_avatar":"https://static.vilson.online/cover.png","member_name":"yunwisdom"},{"remark":"创建了任务 ","content":"少时诵诗书","is_comment":0,"create_time":"2020-02-29 14:54:12","project_name":"yunwisdom","task_name":"少时诵诗书","source_code":"il8vco3qyd2fkgnersp4w79a","project_code":"vu7x3wgk1jq9slhf8odpzbnm","member_avatar":"https://static.vilson.online/cover.png","member_name":"yunwisdom"},{"remark":"认领了任务 ","content":"","is_comment":0,"create_time":"2020-02-29 14:54:05","project_name":"yunwisdom","task_name":"asdfasdf","source_code":"nb3y2xd7sfgmz9ch6al5w14q","project_code":"vu7x3wgk1jq9slhf8odpzbnm","member_avatar":"https://static.vilson.online/cover.png","member_name":"yunwisdom"},{"remark":"创建了任务 ","content":"asdfasdf","is_comment":0,"create_time":"2020-02-29 14:54:05","project_name":"yunwisdom","task_name":"asdfasdf","source_code":"nb3y2xd7sfgmz9ch6al5w14q","project_code":"vu7x3wgk1jq9slhf8odpzbnm","member_avatar":"https://static.vilson.online/cover.png","member_name":"yunwisdom"},{"remark":"认领了任务 ","content":"","is_comment":0,"create_time":"2020-02-29 14:54:02","project_name":"yunwisdom","task_name":"asdfasdf","source_code":"xt9630ybg412jovrscp8iknz","project_code":"vu7x3wgk1jq9slhf8odpzbnm","member_avatar":"https://static.vilson.online/cover.png","member_name":"yunwisdom"},{"remark":"创建了任务 ","content":"asdfasdf","is_comment":0,"create_time":"2020-02-29 14:54:02","project_name":"yunwisdom","task_name":"asdfasdf","source_code":"xt9630ybg412jovrscp8iknz","project_code":"vu7x3wgk1jq9slhf8odpzbnm","member_avatar":"https://static.vilson.online/cover.png","member_name":"yunwisdom"}]}');this.activities=t.data},getAccountList:function(){var t=JSON.parse('{"code":200,"msg":"","data":{"total":1,"page":"1","list":[{"id":2288,"code":"due6mrhp58yqwbktcv3l7x9o","member_code":"9opr8l5caxq4sd6m37hbiz1t","organization_code":"3c6wv21apdm0ro84jbxqeylk","department_code":"","authorize":null,"is_owner":1,"name":"yunwisdom","mobile":null,"email":"qq695926920@163.com","create_time":"2020-02-29 14:53:17","last_login_time":null,"status":1,"description":null,"avatar":"https://static.vilson.online/cover.png","position":"资深工程师","department":"某某公司－某某某事业群－某某平台部－某某技术部－BM","membar_account_code":"due6mrhp58yqwbktcv3l7x9o","departments":"","statusText":"使用中","authorizeArr":[]}],"authList":[{"id":"3584","title":"管理员","status":1,"sort":0,"desc":"管理员","create_by":0,"create_at":"2018-08-01 14:20:46","organization_code":"3c6wv21apdm0ro84jbxqeylk","is_default":1,"type":"admin","canDelete":0},{"id":"3585","title":"技术开发","status":1,"sort":0,"desc":"技术开发人员","create_by":0,"create_at":"2018-12-20 13:39:59","organization_code":"3c6wv21apdm0ro84jbxqeylk","is_default":0,"type":"member","canDelete":0}]}}');this.accounts=t.data.list,this.accountsTotal=t.data.total},formatTime:function(t){return Object(l["c"])(t)},showTaskTime:function(t,e){return Object(l["a"])(t,e)},showTimeLabel:function(t){var e="label-primary";if(null==t)return e;var a=d()(d()(t).format("YYYY-MM-DD")).diff(d()().format("YYYY-MM-DD"),"days");return a<0?e="label-danger":0==a?e="label-warning":a>7&&(e="label-normal"),e}}},g=v,k=(a("8172"),a("2877")),h=Object(k["a"])(g,r,n,!1,null,null,null);e["default"]=h.exports}}]);