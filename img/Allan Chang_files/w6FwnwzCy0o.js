if (self.CavalryLogger) { CavalryLogger.start_js(["8yjcK"]); }

__d("UFIBotsButtonImplQuery.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{kind:"LocalArgument",name:"groupID",type:"ID!",defaultValue:null}],b=[{kind:"Variable",name:"id",variableName:"groupID",type:"ID!"}],c=[{kind:"Literal",name:"named",value:"",type:"String"}],d=[{kind:"Literal",name:"first",value:15,type:"Int"}],e={kind:"ScalarField",alias:null,name:"name",args:null,storageKey:null},f={kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null},g={kind:"LinkedField",alias:null,name:"profile_picture",storageKey:"profile_picture(height:32,width:32)",args:[{kind:"Literal",name:"height",value:32,type:"Int"},{kind:"Literal",name:"width",value:32,type:"Int"}],concreteType:"Image",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"uri",args:null,storageKey:null}]},h={kind:"ScalarField",alias:null,name:"subtext",args:null,storageKey:null},i={kind:"ScalarField",alias:null,name:"__typename",args:null,storageKey:null};return{kind:"Request",operationKind:"query",name:"UFIBotsButtonImplQuery",id:"1582921211750883",text:null,metadata:{},fragment:{kind:"Fragment",name:"UFIBotsButtonImplQuery",type:"Query",metadata:null,argumentDefinitions:a,selections:[{kind:"LinkedField",alias:null,name:"node",storageKey:null,args:b,concreteType:null,plural:!1,selections:[{kind:"InlineFragment",type:"Group",selections:[{kind:"LinkedField",alias:null,name:"group_mentions",storageKey:'group_mentions(named:"")',args:c,concreteType:"GroupMentioning",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"bot_section",storageKey:"bot_section(first:15)",args:d,concreteType:"GroupMentionsBotConnection",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"edges",storageKey:null,args:null,concreteType:"GroupMentionsBotEdge",plural:!0,selections:[{kind:"LinkedField",alias:null,name:"node",storageKey:null,args:null,concreteType:null,plural:!1,selections:[e,{kind:"InlineFragment",type:"Page",selections:[f,g]}]},h]}]}]}]}]}]},operation:{kind:"Operation",name:"UFIBotsButtonImplQuery",argumentDefinitions:a,selections:[{kind:"LinkedField",alias:null,name:"node",storageKey:null,args:b,concreteType:null,plural:!1,selections:[i,f,{kind:"InlineFragment",type:"Group",selections:[{kind:"LinkedField",alias:null,name:"group_mentions",storageKey:'group_mentions(named:"")',args:c,concreteType:"GroupMentioning",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"bot_section",storageKey:"bot_section(first:15)",args:d,concreteType:"GroupMentionsBotConnection",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"edges",storageKey:null,args:null,concreteType:"GroupMentionsBotEdge",plural:!0,selections:[{kind:"LinkedField",alias:null,name:"node",storageKey:null,args:null,concreteType:null,plural:!1,selections:[i,e,f,{kind:"InlineFragment",type:"Page",selections:[g]}]},h]}]}]}]}]}]}}}();e.exports=a}),null);
__d("UFIBotsButtonImpl.react",["cx","fbt","Bootloader","FocusRelocator.react","Link.react","React","RelayFBEnvironment","RelayModern","SearchableEntry","createCancelableFunction","UFIBotsButtonImplQuery.graphql"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i,j=b("RelayModern").QueryRenderer;b("RelayModern").graphql;var k=function(){return b("UFIBotsButtonImplQuery.graphql")},l=null;c=babelHelpers.inherits(a,b("React").Component);i=c&&c.prototype;function a(){var a,b;for(var c=arguments.length,d=new Array(c),e=0;e<c;e++)d[e]=arguments[e];return b=(a=i.constructor).call.apply(a,[this].concat(d)),this.state={locked:!1,shown:!1},this.$5=function(event){event.preventDefault(),event.stopPropagation(),this.setState({locked:!1,shown:this.state.locked?!1:!this.state.shown})}.bind(this),this.$6=function(event){this.setState({locked:this.state.shown})}.bind(this),this.$8=function(a){this.setState({shown:!1}),this.props.onSelect(a)}.bind(this),this.$9=function(a){a||this.setState({shown:!1})}.bind(this),b}a.prototype.componentWillUnmount=function(){this.$1&&(this.$1.cancel(),this.$1=null)};a.prototype.render=function(){__p&&__p();return b("React").createElement(j,{environment:b("RelayFBEnvironment"),query:k,variables:{groupID:this.props.groupID},render:function(a){__p&&__p();var c=a.error;a=a.props;if(c||!a)return null;a=((c=a)!=null?(c=c.node)!=null?(c=c.group_mentions)!=null?(c=c.bot_section)!=null?c.edges:c:c:c:c)||[];if(a.length===0)return null;c=a.map(function(a){var c,d,e;e=((e=a)!=null?(e=e.node)!=null?e.id:e:e)||null;d=((d=a)!=null?(d=d.node)!=null?d.name:d:d)||null;c=((c=a)!=null?(c=c.node)!=null?(c=c.profile_picture)!=null?c.uri:c:c:c)||"";return!e||!d?null:new(b("SearchableEntry"))({uniqueID:e,photo:c,subtitle:a.subtext,title:d})}).filter(Boolean);return this.$4(c)}.bind(this)})};a.prototype.$4=function(a){var c=h._("Discover the Bots available"),d="UFICommentBotsIcon"+(this.state.shown?" UFICommentBotsIconActive":"");return b("React").createElement(b("FocusRelocator.react"),{from:this.$3,to:this.$2},b("React").createElement(b("Link.react"),{className:"_r1a _5f0v","aria-label":c,"data-hover":"tooltip","data-tooltip-alignh":"center","data-tooltip-content":this.state.shown?null:c,onClick:this.$5,onMouseDown:this.$6,linkRef:function(a){return this.$3=a}.bind(this),role:"button"},b("React").createElement("span",{className:d,ref:function(a){return this.$2=a}.bind(this)}),this.$7(a)))};a.prototype.$7=function(a){if(!l){this.state.shown&&(this.$1=b("createCancelableFunction")(function(){this.forceUpdate()}.bind(this)),b("Bootloader").loadModules(["BotsPicker.react"],function(a){l=a,this.$1&&(this.$1(),this.$1=null)}.bind(this),"UFIBotsButtonImpl.react"));return null}return b("React").createElement(l,{bots:a,context:this.$3,groupID:this.props.groupID,onSelect:this.$8,onToggle:this.$9,shown:this.state.shown})};e.exports=a}),null);
__d("FantaComposerGroupedInputUtil",["CacheStorage","UFIGroupedInputTabs"],(function(a,b,c,d,e,f){"use strict";var g=b("UFIGroupedInputTabs").InputTitleEnum,h="last_used_tab_on_chat_composer",i=new(b("CacheStorage"))("localstorage");a=function(a){return i.get(h,g.EMOJI)};c=function(a){return i.set(h,a)};e.exports={getLastUsedChatInputTab:a,setLastUsedChatInputTab:c}}),null);
__d("AddCommentFlyoutSizeType",[],(function(a,b,c,d,e,f){a={LARGE:"large",SMALL:"small"};e.exports=a}),null);
__d("XWorkInstallContentAppOnUserController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/work/content_apps/",{})}),null);