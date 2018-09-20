if (self.CavalryLogger) { CavalryLogger.start_js(["YrLd1"]); }

__d("ReactComposerFunFactAskPromptTaggerContainer.react",["cx","Arbiter","CurrentUser","FacebookAppIDs","FluxContainer","ProfileEngagementTypedLogger","ProfileFunFactsEntryPoint","ProfileFunFactsStrings","React","ReactComposerAttachmentStore","ReactComposerContextTypes","ReactComposerEvents","ReactComposerFormattedTextActions","ReactComposerLoggingName","ReactComposerScrapedAttachmentActions","ReactComposerTaggerActions","ReactComposerTaggerStore","ReactComposerTaggerType","XUICloseButton.react"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h;c=babelHelpers.inherits(a,b("React").Component);h=c&&c.prototype;function a(){var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=h.constructor).call.apply(a,[this].concat(e)),this.$1=null,this.$4=function(){b("ReactComposerTaggerActions").setTaggerData(this.context.composerID,b("ReactComposerLoggingName").FUN_FACT,b("ReactComposerTaggerType").FUN_FACT,null)}.bind(this),c}a.getStores=function(){return[b("ReactComposerAttachmentStore"),b("ReactComposerTaggerStore")]};a.calculateState=function(a,c,d){a=d.composerID;c=b("ReactComposerTaggerStore").getTaggerData(a,b("ReactComposerTaggerType").FUN_FACT);return{isAttached:c&&c.isAskPost,isDisabled:b("ReactComposerTaggerStore").isDisabled(a,b("ReactComposerTaggerType").FUN_FACT),taggerData:c}};a.prototype.componentDidMount=function(){b("Arbiter").inform("ReactComposerDialogLauncher/expandcomposer/"+this.context.composerID),this.state.isAttached&&b("ReactComposerFormattedTextActions").setSelectedIndex(this.context.composerID,0)};a.prototype.componentDidUpdate=function(a,c){__p&&__p();if(!this.state.isAttached){this.$1&&this.$1.unsubscribe();return}if(c.isAttached)return;this.$2("enter",this.state.taggerData.entryPoint||this.props.entryPoint);this.$1&&this.$1.unsubscribe();this.$1=b("Arbiter").subscribeOnce(b("ReactComposerEvents").POST_STARTED+this.context.composerID,function(){if(this.state.isAttached){var a=this.state.taggerData;this.$2("create",a.entryPoint||this.props.entryPoint)}}.bind(this));this.$3()};a.prototype.$3=function(){b("ReactComposerFormattedTextActions").setSelectedIndex(this.context.composerID,0),b("ReactComposerTaggerActions").setTaggerDataWithoutLogging(this.context.composerID,b("ReactComposerTaggerType").GIF,{gifData:null}),b("ReactComposerScrapedAttachmentActions").clearScrapedAttachment(this.context.composerID)};a.prototype.$2=function(a,c){c=new(b("ProfileEngagementTypedLogger"))().setProductBucket("fun_facts").setProfileIDDummy(b("CurrentUser").getID()).setSurface("unknown").setEngagementType(a).setEventMetadata({entry_point:c}).setAppID(b("FacebookAppIDs").WWW);a==="create"?c.setItemType("ask_post").log():a==="enter"&&c.setItemType("composer_page").setItemSubtype("ask_post").log()};a.prototype.render=function(){return!this.state.isAttached||this.state.isDisabled?null:b("React").createElement("div",{className:"_3nnr _3-8j"},b("ProfileFunFactsStrings").SINGLE_PROMPT_ASK_NOTICE,b("React").createElement(b("XUICloseButton.react"),{className:"_3nnv",onClick:this.$4,shade:"light"}))};a.defaultProps={entryPoint:b("ProfileFunFactsEntryPoint").UNKNOWN};a.contextTypes=b("ReactComposerContextTypes");e.exports=b("FluxContainer").create(a,{withContext:!0,withProps:!0})}),null);
__d("UFI2ReactionsMenu",["requireCond","cr:676979"],(function(a,b,c,d,e,f){"use strict";a=b("cr:676979").v;e.exports=a}),null);