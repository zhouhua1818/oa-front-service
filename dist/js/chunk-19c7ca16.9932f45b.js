(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-19c7ca16"],{"88bc":function(e,t,a){(function(t){var a=1/0,i=9007199254740991,n="[object Arguments]",r="[object Function]",l="[object GeneratorFunction]",o="[object Symbol]",c="object"==typeof t&&t&&t.Object===Object&&t,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")();function u(e,t,a){switch(a.length){case 0:return e.call(t);case 1:return e.call(t,a[0]);case 2:return e.call(t,a[0],a[1]);case 3:return e.call(t,a[0],a[1],a[2])}return e.apply(t,a)}function h(e,t){var a=-1,i=e?e.length:0,n=Array(i);while(++a<i)n[a]=t(e[a],a,e);return n}function f(e,t){var a=-1,i=t.length,n=e.length;while(++a<i)e[n+a]=t[a];return e}var p=Object.prototype,m=p.hasOwnProperty,v=p.toString,y=d.Symbol,g=p.propertyIsEnumerable,b=y?y.isConcatSpreadable:void 0,w=Math.max;function C(e,t,a,i,n){var r=-1,l=e.length;a||(a=O),n||(n=[]);while(++r<l){var o=e[r];t>0&&a(o)?t>1?C(o,t-1,a,i,n):f(n,o):i||(n[n.length]=o)}return n}function j(e,t){return e=Object(e),x(e,t,(function(t,a){return a in e}))}function x(e,t,a){var i=-1,n=t.length,r={};while(++i<n){var l=t[i],o=e[l];a(o,l)&&(r[l]=o)}return r}function S(e,t){return t=w(void 0===t?e.length-1:t,0),function(){var a=arguments,i=-1,n=w(a.length-t,0),r=Array(n);while(++i<n)r[i]=a[t+i];i=-1;var l=Array(t+1);while(++i<t)l[i]=a[i];return l[t]=r,u(e,this,l)}}function O(e){return D(e)||F(e)||!!(b&&e&&e[b])}function k(e){if("string"==typeof e||q(e))return e;var t=e+"";return"0"==t&&1/e==-a?"-0":t}function F(e){return L(e)&&m.call(e,"callee")&&(!g.call(e,"callee")||v.call(e)==n)}var D=Array.isArray;function $(e){return null!=e&&V(e.length)&&!T(e)}function L(e){return R(e)&&$(e)}function T(e){var t=A(e)?v.call(e):"";return t==r||t==l}function V(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=i}function A(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function R(e){return!!e&&"object"==typeof e}function q(e){return"symbol"==typeof e||R(e)&&v.call(e)==o}var B=S((function(e,t){return null==e?{}:j(e,h(C(t,1),k))}));e.exports=B}).call(this,a("c8ba"))},b098:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-tree-select",{staticStyle:{width:"100%"},attrs:{allowClear:"",labelInValue:"",disabled:e.disabled,dropdownStyle:{maxHeight:"400px",overflow:"auto"},placeholder:e.placeholder,loadData:e.asyncLoadTreeData,value:e.treeValue,treeData:e.treeData,multiple:e.multiple},on:{change:e.onChange,search:e.onSearch}})},n=[],r=a("7618"),l=(a("ac4d"),a("8a81"),a("ac6a"),a("75fc")),o=(a("28a5"),a("0fea")),c={name:"JTreeSelect",props:{value:{type:String,required:!1},placeholder:{type:String,default:"请选择",required:!1},dict:{type:String,default:"",required:!1},pidField:{type:String,default:"pid",required:!1},pidValue:{type:String,default:"",required:!1},disabled:{type:Boolean,default:!1,required:!1},hasChildField:{type:String,default:"",required:!1},condition:{type:String,default:"",required:!1},multiple:{type:Boolean,default:!1},loadTriggleChange:{type:Boolean,default:!1,required:!1}},data:function(){return{treeValue:null,treeData:[],url:"/sys/dict/loadTreeData",view:"/sys/dict/loadDictItem/",tableName:"",text:"",code:""}},watch:{value:function(){this.loadItemByCode()},dict:function(){this.initDictInfo(),this.loadRoot()}},created:function(){var e=this;this.validateProp().then((function(){e.initDictInfo(),e.loadRoot(),e.loadItemByCode()}))},methods:{loadItemByCode:function(){var e=this;this.value&&"0"!=this.value?Object(o["getAction"])("".concat(this.view).concat(this.dict),{key:this.value}).then((function(t){if(t.success){var a=e.value.split(",");e.treeValue=t.result.map((function(e,t){return{key:a[t],value:a[t],label:e}})),e.onLoadTriggleChange(t.result[0])}})):this.treeValue=null},onLoadTriggleChange:function(e){!this.multiple&&this.loadTriggleChange&&this.$emit("change",this.value,e)},initDictInfo:function(){var e=this.dict.split(",");this.tableName=e[0],this.text=e[1],this.code=e[2]},asyncLoadTreeData:function(e){var t=this;return new Promise((function(a){if(e.$vnode.children)a();else{var i=e.$vnode.key,n={pid:i,tableName:t.tableName,text:t.text,code:t.code,pidField:t.pidField,hasChildField:t.hasChildField,condition:t.condition};Object(o["getAction"])(t.url,n).then((function(e){if(e.success){var n=!0,r=!1,o=void 0;try{for(var c,s=e.result[Symbol.iterator]();!(n=(c=s.next()).done);n=!0){var d=c.value;d.value=d.key,0==d.leaf?d.isLeaf=!1:1==d.leaf&&(d.isLeaf=!0)}}catch(u){r=!0,o=u}finally{try{n||null==s.return||s.return()}finally{if(r)throw o}}t.addChildren(i,e.result,t.treeData),t.treeData=Object(l["a"])(t.treeData)}a()}))}}))},addChildren:function(e,t,a){if(a&&a.length>0){var i=!0,n=!1,r=void 0;try{for(var l,o=a[Symbol.iterator]();!(i=(l=o.next()).done);i=!0){var c=l.value;if(c.key==e){t&&0!=t.length?c.children=t:c.isLeaf=!0;break}this.addChildren(e,t,c.children)}}catch(s){n=!0,r=s}finally{try{i||null==o.return||o.return()}finally{if(n)throw r}}}},loadRoot:function(){var e=this,t={pid:this.pidValue,tableName:this.tableName,text:this.text,code:this.code,pidField:this.pidField,hasChildField:this.hasChildField,condition:this.condition};Object(o["getAction"])(this.url,t).then((function(t){if(t.success&&t.result){var a=!0,i=!1,n=void 0;try{for(var r,o=t.result[Symbol.iterator]();!(a=(r=o.next()).done);a=!0){var c=r.value;c.value=c.key,0==c.leaf?c.isLeaf=!1:1==c.leaf&&(c.isLeaf=!0)}}catch(s){i=!0,n=s}finally{try{a||null==o.return||o.return()}finally{if(i)throw n}}e.treeData=Object(l["a"])(t.result)}else console.log("数根节点查询结果-else",t)}))},onChange:function(e){e?e instanceof Array?(this.$emit("change",e.map((function(e){return e.value})).join(",")),this.treeValue=e):(this.$emit("change",e.value,e.label),this.treeValue=e):(this.$emit("change",""),this.treeValue=null)},onSearch:function(e){console.log(e)},getCurrTreeData:function(){return this.treeData},validateProp:function(){var e=this,t=this.condition;return new Promise((function(a,i){if(t)try{var n=JSON.parse(t);console.log("aaaaasdsdd",Object(r["a"])(n)),"object"==Object(r["a"])(n)&&n?a():(e.$message.error("组件JTreeSelect-condition传值有误，需要一个json字符串!"),i())}catch(l){e.$message.error("组件JTreeSelect-condition传值有误，需要一个json字符串!"),i()}else a()}))}},model:{prop:"value",event:"change"}},s=c,d=a("2877"),u=Object(d["a"])(s,i,n,!1,null,null,null);t["default"]=u.exports},f1cf:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:e.title,width:e.width,visible:e.visible,confirmLoading:e.confirmLoading,destroyOnClose:!0,cancelText:"关闭"},on:{ok:e.handleOk,cancel:e.handleCancel}},[a("a-spin",{attrs:{spinning:e.confirmLoading}},[a("a-form",{attrs:{form:e.form}},[a("a-form-item",{attrs:{label:"父级节点",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("j-tree-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["pid",e.validatorRules.pid],expression:"['pid', validatorRules.pid]"}],ref:"treeSelect",attrs:{placeholder:"请选择父级节点",dict:"sys_category,name,id",pidField:"pid",pidValue:"0"}})],1),a("a-form-item",{attrs:{label:"类型名称",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",e.validatorRules.name],expression:"[ 'name', validatorRules.name]"}],attrs:{placeholder:"请输入类型名称"}})],1)],1)],1)],1)},n=[],r=a("0fea"),l=a("88bc"),o=a.n(l),c=a("b098"),s={name:"SysCategoryModal",components:{JTreeSelect:c["default"]},data:function(){return{form:this.$form.createForm(this),title:"操作",width:800,visible:!1,model:{},labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},confirmLoading:!1,validatorRules:{code:{rules:[{required:!0,message:"请输入类型编码!"},{validator:this.validateMyCode}]},pid:{},name:{}},url:{add:"/sys/category/add",edit:"/sys/category/edit",checkCode:"/sys/category/checkCode"},expandedRowKeys:[],pidField:"pid"}},created:function(){},methods:{add:function(){this.edit({})},edit:function(e){var t=this;this.form.resetFields(),this.model=Object.assign({},e),this.visible=!0,this.$nextTick((function(){t.form.setFieldsValue(o()(t.model,"pid","name","code"))}))},close:function(){this.$emit("close"),this.visible=!1},handleOk:function(){var e=this,t=this;this.form.validateFields((function(a,i){if(!a){t.confirmLoading=!0;var n="",l="";e.model.id?(n+=e.url.edit,l="put"):(n+=e.url.add,l="post");var o=Object.assign(e.model,i);console.log("表单提交数据",o),Object(r["httpAction"])(n,o,l).then((function(e){e.success?(t.$message.success(e.message),t.submitSuccess(o)):t.$message.warning(e.message)})).finally((function(){t.confirmLoading=!1,t.close()}))}}))},handleCancel:function(){this.close()},popupCallback:function(e){this.form.setFieldsValue(o()(e,"pid","name","code"))},submitSuccess:function(e){if(e.id)this.$emit("ok",e);else{var t=this.$refs.treeSelect.getCurrTreeData();this.expandedRowKeys=[],this.getExpandKeysByPid(e[this.pidField],t,t),this.$emit("ok",e,this.expandedRowKeys.reverse())}},getExpandKeysByPid:function(e,t,a){if(e&&t&&t.length>0)for(var i=0;i<t.length;i++)t[i].key==e?(this.expandedRowKeys.push(t[i].key),this.getExpandKeysByPid(t[i]["parentId"],a,a)):this.getExpandKeysByPid(e,t[i].children,a)},validateMyCode:function(e,t,a){var i={pid:this.form.getFieldValue("pid"),code:t};Object(r["getAction"])(this.url.checkCode,i).then((function(e){e.success?a():a(e.message)}))}}},d=s,u=a("2877"),h=Object(u["a"])(d,i,n,!1,null,null,null);t["default"]=h.exports}}]);