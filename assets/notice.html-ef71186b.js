import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as h,o as n,c,a as t,d,b as e,w as s,e as a}from"./app-7d3bcdc5.js";const _={},b={class:"hint-container warning"},l=t("p",{class:"hint-container-title"},"注意",-1),p={class:"hint-container tip"},u=t("p",{class:"hint-container-title"},"提示",-1),y=t("br",null,null,-1),g=a('<h2 id="私聊消息撤回" tabindex="-1"><a class="header-anchor" href="#私聊消息撤回" aria-hidden="true">#</a> 私聊消息撤回</h2><p>当 <code>notice_type</code> 为 <code>friend_recall</code> 时，表示收到了私聊消息撤回事件。</p><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>user_id</td><td>int64</td><td>好友 QQ 号</td></tr><tr><td>operator_id</td><td>int64</td><td>操作者 QQ 号</td></tr><tr><td>message_id</td><td>int64</td><td>消息 ID</td></tr></tbody></table><h2 id="群聊消息撤回" tabindex="-1"><a class="header-anchor" href="#群聊消息撤回" aria-hidden="true">#</a> 群聊消息撤回</h2><p>当 <code>notice_type</code> 为 <code>group_recall</code> 时，表示收到了群聊消息撤回事件。</p><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>group_id</td><td>int64</td><td>群号</td></tr><tr><td>user_id</td><td>int64</td><td>发送者 QQ 号</td></tr><tr><td>operator_id</td><td>int64</td><td>操作者 QQ 号</td></tr><tr><td>message_id</td><td>int64</td><td>消息 ID</td></tr></tbody></table><h2 id="群组成员增加" tabindex="-1"><a class="header-anchor" href="#群组成员增加" aria-hidden="true">#</a> 群组成员增加</h2><p>当 <code>notice_type</code> 为 <code>group_increase</code> 时，表示收到了群组成员增加事件。</p><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>group_id</td><td>int64</td><td>群号</td></tr><tr><td>user_id</td><td>int64</td><td>新增成员 QQ</td></tr><tr><td>operator_id</td><td>int64</td><td>操作者 QQ 号</td></tr><tr><td>operator_uid</td><td>string</td><td>操作者 UID</td></tr><tr><td>user_uid</td><td>string</td><td>新成员 UID</td></tr><tr><td>sub_type</td><td>string</td><td>子类型(approve/invite)</td></tr></tbody></table><h2 id="群组成员减少" tabindex="-1"><a class="header-anchor" href="#群组成员减少" aria-hidden="true">#</a> 群组成员减少</h2><p>当 <code>notice_type</code> 为 <code>group_decrease</code> 时，表示收到了群组成员减少事件。</p><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>group_id</td><td>int64</td><td>群号</td></tr><tr><td>user_id</td><td>int64</td><td>减少成员 QQ</td></tr><tr><td>operator_id</td><td>int64</td><td>操作者 QQ 号</td></tr><tr><td>operator_uid</td><td>string</td><td>操作者 UID</td></tr><tr><td>user_uid</td><td>string</td><td>新成员 UID</td></tr><tr><td>sub_type</td><td>string</td><td>子类型(leave/kick/kick_me)</td></tr></tbody></table><h2 id="群组管理员变动" tabindex="-1"><a class="header-anchor" href="#群组管理员变动" aria-hidden="true">#</a> 群组管理员变动</h2><p>当 <code>notice_type</code> 为 <code>group_admin</code> 时，表示收到了群组管理员变动事件。</p><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>group_id</td><td>int64</td><td>群号</td></tr><tr><td>user_id</td><td>int64</td><td>变动成员 QQ</td></tr><tr><td>sub_type</td><td>string</td><td>子类型(set/unset)</td></tr></tbody></table><h2 id="群文件上传" tabindex="-1"><a class="header-anchor" href="#群文件上传" aria-hidden="true">#</a> 群文件上传</h2><p>当 <code>notice_type</code> 为 <code>group_upload</code> 时，表示收到了群文件上传事件。</p><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>group_id</td><td>int64</td><td>群号</td></tr><tr><td>user_id</td><td>int64</td><td>上传者 QQ</td></tr><tr><td>file</td><td>object</td><td>群文件信息</td></tr></tbody></table><h3 id="群文件信息结构体" tabindex="-1"><a class="header-anchor" href="#群文件信息结构体" aria-hidden="true">#</a> 群文件信息结构体</h3><table><thead><tr><th>字段名</th><th>数据类型</th><th>说明</th></tr></thead><tbody><tr><td>id</td><td>string</td><td>文件 ID</td></tr><tr><td>name</td><td>string</td><td>文件名</td></tr><tr><td>size</td><td>int64</td><td>文件大小 ( 字节数 )</td></tr><tr><td>busid</td><td>int64</td><td>busid ( 目前不清楚有什么作用 )</td></tr><tr><td>url</td><td>string</td><td>下载地址</td></tr></tbody></table><h2 id="私聊文件上传" tabindex="-1"><a class="header-anchor" href="#私聊文件上传" aria-hidden="true">#</a> 私聊文件上传</h2><p>当 <code>notice_type</code> 为 <code>private_upload</code> 时，表示收到了群文件上传事件。</p><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>user_id</td><td>int64</td><td>上传者 QQ</td></tr><tr><td>sender</td><td>int64</td><td>上传者 QQ</td></tr><tr><td>private_file</td><td>object</td><td>私聊文件信息</td></tr></tbody></table><h3 id="私聊文件信息结构体" tabindex="-1"><a class="header-anchor" href="#私聊文件信息结构体" aria-hidden="true">#</a> 私聊文件信息结构体</h3><table><thead><tr><th>字段名</th><th>数据类型</th><th>说明</th></tr></thead><tbody><tr><td>id</td><td>string</td><td>文件 ID</td></tr><tr><td>name</td><td>string</td><td>文件名</td></tr><tr><td>size</td><td>int64</td><td>文件大小 ( 字节数 )</td></tr><tr><td>url</td><td>string</td><td>下载地址</td></tr><tr><td>sub_id</td><td>string</td><td>子文件ID</td></tr><tr><td>exppire</td><td>int64</td><td>文件过期时间</td></tr></tbody></table><h2 id="群禁言" tabindex="-1"><a class="header-anchor" href="#群禁言" aria-hidden="true">#</a> 群禁言</h2><p>当 <code>notice_type</code> 为 <code>group_ban</code> 时，表示收到了群禁言事件。</p><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>group_id</td><td>int64</td><td>群号</td></tr><tr><td>user_id</td><td>int64</td><td>被禁言成员 QQ</td></tr><tr><td>operator_id</td><td>int64</td><td>操作者 QQ</td></tr><tr><td>duration</td><td>int64</td><td>禁言时长(秒)</td></tr><tr><td>sub_type</td><td>string</td><td>子类型(ban/lift_ban)</td></tr></tbody></table><h2 id="群成员名片变动" tabindex="-1"><a class="header-anchor" href="#群成员名片变动" aria-hidden="true">#</a> 群成员名片变动</h2><p>当 <code>notice_type</code> 为 <code>group_card</code> 时，表示收到了群成员名片变动事件。</p><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>group_id</td><td>int64</td><td>群号</td></tr><tr><td>user_id</td><td>int64</td><td>变动成员 QQ</td></tr><tr><td>card_new</td><td>string</td><td>新名片</td></tr><tr><td>card_old</td><td>string</td><td>旧名片</td></tr></tbody></table>',31),f={id:"好友添加",tabindex:"-1"},Q=t("a",{class:"header-anchor",href:"#好友添加","aria-hidden":"true"},"#",-1),x=a("<p>当 <code>notice_type</code> 为 <code>friend_add</code> 时，表示收到了好友添加事件。</p><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>user_id</td><td>int64</td><td>新添加好友 QQ 号</td></tr></tbody></table>",2),m={id:"收到离线文件",tabindex:"-1"},k=t("a",{class:"header-anchor",href:"#收到离线文件","aria-hidden":"true"},"#",-1),D=a('<p>当 <code>notice_type</code> 为 <code>offline_file</code> 时，表示收到了离线文件事件。</p><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>user_id</td><td>int64</td><td>发送者 QQ</td></tr><tr><td>file</td><td>object</td><td>文件信息</td></tr></tbody></table><h3 id="文件信息" tabindex="-1"><a class="header-anchor" href="#文件信息" aria-hidden="true">#</a> 文件信息</h3><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>name</td><td>string</td><td>文件名</td></tr><tr><td>size</td><td>int64</td><td>文件大小</td></tr><tr><td>url</td><td>string</td><td>下载链接</td></tr></tbody></table><h2 id="精华消息" tabindex="-1"><a class="header-anchor" href="#精华消息" aria-hidden="true">#</a> 精华消息</h2><p>当 <code>notice_type</code> 为 <code>essence</code> 时，表示收到了精华消息事件。</p><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>group_id</td><td>int64</td><td>群号</td></tr><tr><td>sender_id</td><td>int64</td><td>发送者 QQ</td></tr><tr><td>operator_id</td><td>int64</td><td>操作者 QQ</td></tr><tr><td>message_id</td><td>int64</td><td>消息 ID</td></tr><tr><td>sub_type</td><td>string</td><td>子类型(add/delete)</td></tr></tbody></table>',7),v={id:"客户端状态",tabindex:"-1"},I=t("a",{class:"header-anchor",href:"#客户端状态","aria-hidden":"true"},"#",-1),B=a('<p>当 <code>notice_type</code> 为 <code>client_status</code> 时，表示收到了客户端状态事件。</p><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>client</td><td>object</td><td>客户端信息</td></tr><tr><td>online</td><td>bool</td><td>在线状态</td></tr></tbody></table><h2 id="头像戳一戳" tabindex="-1"><a class="header-anchor" href="#头像戳一戳" aria-hidden="true">#</a> 头像戳一戳</h2><p>当 <code>notice_type</code> 为 <code>notify</code> 且 <code>sub_type</code> 为 <code>poke</code> 时，表示收到了头像戳一戳事件。</p><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>user_id</td><td>int64</td><td>发送者 QQ</td></tr><tr><td>sender_id</td><td>int64</td><td>好友 QQ (仅私聊)</td></tr><tr><td>group_id</td><td>int64</td><td>群号(仅群聊)</td></tr><tr><td>target_id</td><td>int64</td><td>被戳者 QQ</td></tr><tr><td>poke_detail</td><td>PokeDetail</td><td>戳一戳的详细信息</td></tr></tbody></table><h3 id="pokedetail" tabindex="-1"><a class="header-anchor" href="#pokedetail" aria-hidden="true">#</a> PokeDetail</h3><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>action</td><td>string</td><td>操作名称，如“戳了戳”</td></tr><tr><td>suffix</td><td>string</td><td>后缀，未设置则未空</td></tr><tr><td>action_img_url</td><td>string</td><td>操作图标</td></tr></tbody></table>',7),j={id:"群红包运气王",tabindex:"-1"},w=t("a",{class:"header-anchor",href:"#群红包运气王","aria-hidden":"true"},"#",-1),N=a("<p>当 <code>notice_type</code> 为 <code>notify</code> 且 <code>sub_type</code> 为 <code>lucky_king</code> 时，表示收到了群红包运气王事件。</p><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>group_id</td><td>int64</td><td>群号</td></tr><tr><td>user_id</td><td>int64</td><td>发送者</td></tr><tr><td>target_id</td><td>int64</td><td>运气王</td></tr></tbody></table>",2),U={id:"群荣誉变更",tabindex:"-1"},V=t("a",{class:"header-anchor",href:"#群荣誉变更","aria-hidden":"true"},"#",-1),z=a('<p>当 <code>notice_type</code> 为 <code>notify</code> 且 <code>sub_type</code> 为 <code>honor</code> 时，表示收到了群荣誉变更事件。</p><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>group_id</td><td>int64</td><td>群号</td></tr><tr><td>user_id</td><td>int64</td><td>操作者</td></tr><tr><td>honor_type</td><td>string</td><td>荣誉类型</td></tr></tbody></table><h2 id="群头衔变更" tabindex="-1"><a class="header-anchor" href="#群头衔变更" aria-hidden="true">#</a> 群头衔变更</h2><p>当 <code>notice_type</code> 为 <code>notify</code> 且 <code>sub_type</code> 为 <code>title</code> 时，表示收到了群头衔变更事件。</p><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>group_id</td><td>int64</td><td>群号</td></tr><tr><td>user_id</td><td>int64</td><td>操作者</td></tr><tr><td>title</td><td>string</td><td>获得头衔</td></tr></tbody></table>',5);function C(L,P){const r=h("Badge"),i=h("RouterLink");return n(),c("div",null,[t("div",b,[l,t("p",null,[d("对于 Shamrock 未实现的事件，会在标题添加标记 "),e(r,{text:"未实现",type:"danger",vertical:"baseline"})])]),t("div",p,[u,t("p",null,[d("所有上报事件都包含通用数据，详见 "),e(i,{to:"/general-data.html"},{default:s(()=>[d("通用数据")]),_:1}),d("。"),y,d(" 包含在通用数据中的字段不会在下面的表格中重复出现。")])]),g,t("h2",f,[Q,d(" 好友添加 "),e(r,{text:"未实现",type:"danger"})]),x,t("h2",m,[k,d(" 收到离线文件 "),e(r,{text:"未实现",type:"danger"})]),D,t("h2",v,[I,d(" 客户端状态 "),e(r,{text:"未实现",type:"danger"})]),B,t("h2",j,[w,d(" 群红包运气王 "),e(r,{text:"未实现",type:"danger"})]),N,t("h2",U,[V,d(" 群荣誉变更 "),e(r,{text:"未实现",type:"danger"})]),z])}const E=o(_,[["render",C],["__file","notice.html.vue"]]);export{E as default};
