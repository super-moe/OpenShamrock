import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o as i,c,a,d as t,b as n,w as d,e as r}from"./app-7d3bcdc5.js";const l={},u={class:"hint-container warning"},h=a("p",{class:"hint-container-title"},"注意",-1),b=r('<h2 id="发送私聊消息" tabindex="-1"><a class="header-anchor" href="#发送私聊消息" aria-hidden="true">#</a> 发送私聊消息</h2><p>该接口用于发送私聊消息。</p><h3 id="api-端点" tabindex="-1"><a class="header-anchor" href="#api-端点" aria-hidden="true">#</a> API 端点</h3><p><code>/send_private_msg</code></p><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><table><thead><tr><th>字段</th><th>类型</th><th>必须</th><th>说明</th></tr></thead><tbody><tr><td>user_id</td><td>int64</td><td>是</td><td>QQ 号</td></tr><tr><td>message</td><td><code>string</code> / <code>object</code> / <code>array</code></td><td>是</td><td>消息内容</td></tr><tr><td>auto_escape</td><td>bool</td><td>否</td><td>是否解析 CQ 码（true为不解析）。</td></tr><tr><td>recall_duration</td><td>int64</td><td>否</td><td>自动撤回时间间隔（毫秒）</td></tr></tbody></table>',6),k=r(`<h3 id="响应" tabindex="-1"><a class="header-anchor" href="#响应" aria-hidden="true">#</a> 响应</h3><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>message_id</td><td>int32</td><td>消息 ID</td></tr><tr><td>time</td><td>int64</td><td>时间戳</td></tr></tbody></table><h2 id="发送群聊消息" tabindex="-1"><a class="header-anchor" href="#发送群聊消息" aria-hidden="true">#</a> 发送群聊消息</h2><p>该接口用于发送群聊消息。</p><h3 id="api-端点-1" tabindex="-1"><a class="header-anchor" href="#api-端点-1" aria-hidden="true">#</a> API 端点</h3><p><code>/send_group_msg</code></p><h3 id="参数-1" tabindex="-1"><a class="header-anchor" href="#参数-1" aria-hidden="true">#</a> 参数</h3><table><thead><tr><th>字段</th><th>类型</th><th>必须</th><th>说明</th></tr></thead><tbody><tr><td>group_id</td><td>int64</td><td>是</td><td>群号</td></tr><tr><td>message</td><td><code>string</code> / <code>object</code> / <code>array</code></td><td>是</td><td>消息内容</td></tr><tr><td>auto_escape</td><td>bool</td><td>否</td><td>是否解析 CQ 码（true为不解析）。</td></tr><tr><td>recall_duration</td><td>int64</td><td>否</td><td>自动撤回时间间隔（毫秒）</td></tr></tbody></table><p>message格式同<code>/send_private_msg</code></p><h3 id="响应-1" tabindex="-1"><a class="header-anchor" href="#响应-1" aria-hidden="true">#</a> 响应</h3><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>message_id</td><td>int32</td><td>消息 ID</td></tr><tr><td>time</td><td>int64</td><td>时间戳</td></tr></tbody></table><h2 id="发送消息" tabindex="-1"><a class="header-anchor" href="#发送消息" aria-hidden="true">#</a> 发送消息</h2><p>该接口用于发送消息。</p><h3 id="api-端点-2" tabindex="-1"><a class="header-anchor" href="#api-端点-2" aria-hidden="true">#</a> API 端点</h3><p><code>/send_msg</code></p><h3 id="参数-2" tabindex="-1"><a class="header-anchor" href="#参数-2" aria-hidden="true">#</a> 参数</h3><table><thead><tr><th>字段</th><th>类型</th><th>必须</th><th>说明</th></tr></thead><tbody><tr><td>message_type</td><td>string</td><td>是</td><td>消息类型</td></tr><tr><td>user_id</td><td>int64</td><td>是</td><td>QQ 号</td></tr><tr><td>group_id</td><td>int64</td><td>是</td><td>群号</td></tr><tr><td>discuss_id</td><td>int64</td><td>是</td><td>讨论组号</td></tr><tr><td>message</td><td><code>string</code> / <code>object</code> / <code>array</code></td><td>是</td><td>消息内容</td></tr><tr><td>auto_escape</td><td>bool</td><td>否</td><td>是否解析 CQ 码（true为不解析）。</td></tr><tr><td>recall_duration</td><td>int64</td><td>否</td><td>自动撤回时间间隔（毫秒）</td></tr></tbody></table><p>message格式同<code>/send_private_msg</code></p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>当前发送消息的 API 暂不支持发送讨论组消息。</p></div><h3 id="响应-2" tabindex="-1"><a class="header-anchor" href="#响应-2" aria-hidden="true">#</a> 响应</h3><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>message_id</td><td>int32</td><td>消息 ID</td></tr><tr><td>time</td><td>int64</td><td>时间戳</td></tr></tbody></table><h2 id="获取消息" tabindex="-1"><a class="header-anchor" href="#获取消息" aria-hidden="true">#</a> 获取消息</h2><h3 id="api-端点-3" tabindex="-1"><a class="header-anchor" href="#api-端点-3" aria-hidden="true">#</a> API 端点</h3><p><code>/get_msg</code></p><h3 id="参数-3" tabindex="-1"><a class="header-anchor" href="#参数-3" aria-hidden="true">#</a> 参数</h3><table><thead><tr><th>字段</th><th>类型</th><th>必须</th><th>说明</th></tr></thead><tbody><tr><td>message_id</td><td>int32</td><td>是</td><td>消息 ID</td></tr></tbody></table><h3 id="响应-3" tabindex="-1"><a class="header-anchor" href="#响应-3" aria-hidden="true">#</a> 响应</h3><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>time</td><td>int64</td><td>时间戳</td></tr><tr><td>message_type</td><td>string</td><td>消息类型</td></tr><tr><td>message_id</td><td>int32</td><td>消息 ID</td></tr><tr><td>real_id</td><td>int32</td><td>真实 ID</td></tr><tr><td>sender</td><td>Object&lt;<a href="#sender">Sender</a>&gt;</td><td>发送人信息</td></tr><tr><td>message</td><td>object</td><td>消息体</td></tr><tr><td>group_id</td><td>int64</td><td>群号</td></tr><tr><td>target_id</td><td>int64</td><td>消息目标（私聊）</td></tr><tr><td>peer_id</td><td>int64</td><td>消息接收者，群聊是群号，私聊时是目标QQ</td></tr></tbody></table><blockquote><p><code>peer_id</code>是其他同类框架所表达的<code>target_id</code>!</p></blockquote><h4 id="sender" tabindex="-1"><a class="header-anchor" href="#sender" aria-hidden="true">#</a> Sender</h4><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>user_id</td><td>int64</td><td>QQ 号</td></tr><tr><td>nickname</td><td>string</td><td>昵称</td></tr><tr><td>sex</td><td>string</td><td>性别</td></tr><tr><td>age</td><td>int32</td><td>年龄</td></tr><tr><td>uid</td><td>string</td><td>UID</td></tr></tbody></table><h2 id="撤回消息" tabindex="-1"><a class="header-anchor" href="#撤回消息" aria-hidden="true">#</a> 撤回消息</h2><p>该接口用于撤回消息。</p><h3 id="api-端点-4" tabindex="-1"><a class="header-anchor" href="#api-端点-4" aria-hidden="true">#</a> API 端点</h3><p><code>/delete_msg</code></p><h3 id="参数-4" tabindex="-1"><a class="header-anchor" href="#参数-4" aria-hidden="true">#</a> 参数</h3><table><thead><tr><th>字段</th><th>类型</th><th>必须</th><th>说明</th></tr></thead><tbody><tr><td>message_id</td><td>int32</td><td>是</td><td>消息 ID</td></tr></tbody></table><h3 id="响应-4" tabindex="-1"><a class="header-anchor" href="#响应-4" aria-hidden="true">#</a> 响应</h3><p>该接口将返回处理结果，其中 <code>data</code> 字段无数据。。</p><h2 id="获取历史消息" tabindex="-1"><a class="header-anchor" href="#获取历史消息" aria-hidden="true">#</a> 获取历史消息</h2><h3 id="api-端点-5" tabindex="-1"><a class="header-anchor" href="#api-端点-5" aria-hidden="true">#</a> API 端点</h3><p><code>/get_history_msg</code></p><h3 id="参数-5" tabindex="-1"><a class="header-anchor" href="#参数-5" aria-hidden="true">#</a> 参数</h3><table><thead><tr><th>字段</th><th>类型</th><th>必须</th><th>说明</th></tr></thead><tbody><tr><td>message_type</td><td>string</td><td>是</td><td>消息 类型</td></tr><tr><td>user_id</td><td>int64</td><td>否</td><td>私聊QQ</td></tr><tr><td>group_id</td><td>int64</td><td>否</td><td>群号</td></tr><tr><td>count</td><td>int32</td><td>否</td><td>获取的消息数量（默认为20）</td></tr><tr><td>message_seq</td><td>int32</td><td>否</td><td>起始消息的message_id（默认为0，表示从最后一条发言往前）</td></tr></tbody></table><h3 id="响应-5" tabindex="-1"><a class="header-anchor" href="#响应-5" aria-hidden="true">#</a> 响应</h3><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>messages</td><td>Message[]</td><td>消息集</td></tr></tbody></table><h4 id="message" tabindex="-1"><a class="header-anchor" href="#message" aria-hidden="true">#</a> Message</h4><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>time</td><td>int64</td><td>时间戳</td></tr><tr><td>message_type</td><td>string</td><td>消息类型</td></tr><tr><td>message_id</td><td>int32</td><td>消息 ID</td></tr><tr><td>real_id</td><td>int32</td><td>真实 ID</td></tr><tr><td>sender</td><td>Object&lt;<a href="#sender">Sender</a>&gt;</td><td>发送人信息</td></tr><tr><td>message</td><td>object</td><td>消息体</td></tr><tr><td>group_id</td><td>int64</td><td>群号</td></tr><tr><td>target_id</td><td>int64</td><td>消息目标（私聊）</td></tr><tr><td>peer_id</td><td>int64</td><td>消息接收者，群聊是群号，私聊时是目标QQ</td></tr></tbody></table><blockquote><p><code>peer_id</code>是其他同类框架所表达的<code>target_id</code>!</p></blockquote><h2 id="获取群聊历史消息" tabindex="-1"><a class="header-anchor" href="#获取群聊历史消息" aria-hidden="true">#</a> 获取群聊历史消息</h2><h3 id="api-端点-6" tabindex="-1"><a class="header-anchor" href="#api-端点-6" aria-hidden="true">#</a> API 端点</h3><p><code>/get_group_msg_history</code></p><h3 id="参数-6" tabindex="-1"><a class="header-anchor" href="#参数-6" aria-hidden="true">#</a> 参数</h3><table><thead><tr><th>字段</th><th>类型</th><th>必须</th><th>说明</th></tr></thead><tbody><tr><td>group_id</td><td>int64</td><td>是</td><td>群号</td></tr><tr><td>count</td><td>int32</td><td>否</td><td>获取的消息数量（默认为20）</td></tr><tr><td>message_seq</td><td>int32</td><td>否</td><td>起始消息的message_id（默认为0，表示从最后一条发言往前）</td></tr></tbody></table><h3 id="响应-6" tabindex="-1"><a class="header-anchor" href="#响应-6" aria-hidden="true">#</a> 响应</h3><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>messages</td><td>Message[]</td><td>消息集</td></tr></tbody></table><h2 id="清除本地缓存消息" tabindex="-1"><a class="header-anchor" href="#清除本地缓存消息" aria-hidden="true">#</a> 清除本地缓存消息</h2><p>该接口用于清除本地消息缓存。</p><h3 id="api-端点-7" tabindex="-1"><a class="header-anchor" href="#api-端点-7" aria-hidden="true">#</a> API 端点</h3><p><code>/clear_msgs</code></p><h3 id="参数-7" tabindex="-1"><a class="header-anchor" href="#参数-7" aria-hidden="true">#</a> 参数</h3><table><thead><tr><th>字段</th><th>类型</th><th>必须</th><th>说明</th></tr></thead><tbody><tr><td>message_type</td><td>string</td><td>是</td><td>消息 类型</td></tr><tr><td>user_id</td><td>int64</td><td>否</td><td>私聊QQ</td></tr><tr><td>group_id</td><td>int64</td><td>否</td><td>群号</td></tr></tbody></table><h3 id="响应-7" tabindex="-1"><a class="header-anchor" href="#响应-7" aria-hidden="true">#</a> 响应</h3><p>该接口将返回处理结果，其中 <code>data</code> 字段无数据。</p><h2 id="获取合并转发消息内容" tabindex="-1"><a class="header-anchor" href="#获取合并转发消息内容" aria-hidden="true">#</a> 获取合并转发消息内容</h2><p>获取合并转发内容</p><h3 id="api-端点-8" tabindex="-1"><a class="header-anchor" href="#api-端点-8" aria-hidden="true">#</a> API 端点</h3><p><code>/get_forward_msg</code></p><h3 id="参数-8" tabindex="-1"><a class="header-anchor" href="#参数-8" aria-hidden="true">#</a> 参数</h3><table><thead><tr><th>字段</th><th>类型</th><th>必须</th><th>说明</th></tr></thead><tbody><tr><td>id</td><td>string</td><td>是</td><td>消息资源ID（卡片消息里面的resId）</td></tr></tbody></table><blockquote><p>由于QQ内部错误，该接口可能导致闪退等问题的出现！一般是闪退一次后再次重新启动便不再闪退，但是可能无法获取合并转发的内容！</p></blockquote><h3 id="响应-8" tabindex="-1"><a class="header-anchor" href="#响应-8" aria-hidden="true">#</a> 响应</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ok&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;retcode&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;messages&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;time&quot;</span><span class="token operator">:</span> <span class="token number">1699375697</span><span class="token punctuation">,</span>
        <span class="token property">&quot;message_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;private&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;message_id&quot;</span><span class="token operator">:</span> <span class="token number">123456</span><span class="token punctuation">,</span>
        <span class="token property">&quot;real_id&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;sender&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;user_id&quot;</span><span class="token operator">:</span> <span class="token number">114514</span><span class="token punctuation">,</span>
          <span class="token property">&quot;nickname&quot;</span><span class="token operator">:</span> <span class="token string">&quot;伏秋洛~&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;sex&quot;</span><span class="token operator">:</span> <span class="token string">&quot;unknown&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;age&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
          <span class="token property">&quot;uid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;u_xxxx&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;aaaaaaaaaa&quot;</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;peer_id&quot;</span><span class="token operator">:</span> <span class="token number">114514</span><span class="token punctuation">,</span>
        <span class="token property">&quot;target_id&quot;</span><span class="token operator">:</span> <span class="token number">114514</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;echo&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="发送群聊合并转发" tabindex="-1"><a class="header-anchor" href="#发送群聊合并转发" aria-hidden="true">#</a> 发送群聊合并转发</h2><p>发送群聊合并转发。</p><h3 id="api-端点-9" tabindex="-1"><a class="header-anchor" href="#api-端点-9" aria-hidden="true">#</a> API 端点</h3><p><code>/send_group_forward_msg</code></p><h3 id="参数-9" tabindex="-1"><a class="header-anchor" href="#参数-9" aria-hidden="true">#</a> 参数</h3><table><thead><tr><th>字段</th><th>类型</th><th>必须</th><th>说明</th></tr></thead><tbody><tr><td>group_id</td><td>int64</td><td>是</td><td>发送到的目标群号</td></tr><tr><td>messages</td><td>foward message[]</td><td>合并转发消息集</td><td></td></tr></tbody></table><h3 id="响应-9" tabindex="-1"><a class="header-anchor" href="#响应-9" aria-hidden="true">#</a> 响应</h3><blockquote><p>由于QQ限制，该接口的响应结果暂不具备意义，其中：message_id不匹配、forward_id为空。</p></blockquote><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>message_id</td><td>int32</td><td>消息 ID</td></tr><tr><td>forward_id</td><td>int32</td><td>转发 ID</td></tr></tbody></table><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ok&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;retcode&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;message_id&quot;</span><span class="token operator">:</span> <span class="token number">251425915</span><span class="token punctuation">,</span>
    <span class="token property">&quot;forward_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h3><p>直接引用消息的合并转发，id为<code>消息id</code>：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;123&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;456&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>Shamrock 不同于 <code>go-cqhttp</code> ，消息节点无法自定义发送者QQ号（设置头像）与昵称。</p></div><p>自定义消息合并转发：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;测试消息1&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token string">&quot;[CQ:image,file=xxxxx]测试消息2&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>引用自定义混合合并转发:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token string">&quot;我是自定义消息&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;123&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="发送私聊合并转发" tabindex="-1"><a class="header-anchor" href="#发送私聊合并转发" aria-hidden="true">#</a> 发送私聊合并转发</h2><p>发送私聊合并转发。</p><h3 id="api-端点-10" tabindex="-1"><a class="header-anchor" href="#api-端点-10" aria-hidden="true">#</a> API 端点</h3><p><code>/send_private_forward_msg</code></p><h3 id="参数-10" tabindex="-1"><a class="header-anchor" href="#参数-10" aria-hidden="true">#</a> 参数</h3><table><thead><tr><th>字段</th><th>类型</th><th>必须</th><th>说明</th></tr></thead><tbody><tr><td>user_id</td><td>int64</td><td>是</td><td>发送到的目标QQ</td></tr><tr><td>messages</td><td>foward message[]</td><td>合并转发消息集</td><td></td></tr></tbody></table><h3 id="响应-10" tabindex="-1"><a class="header-anchor" href="#响应-10" aria-hidden="true">#</a> 响应</h3><p>同 <a href="#%E5%8F%91%E9%80%81%E7%BE%A4%E8%81%8A%E5%90%88%E5%B9%B6%E8%BD%AC%E5%8F%91">/send_private_forward_msg</a></p>`,99);function v(m,q){const o=e("Badge"),s=e("RouterLink");return i(),c("div",null,[a("div",u,[h,a("p",null,[t("对于 Shamrock 尚未实现的 API，会在标题添加标记 "),n(o,{text:"未实现",type:"danger",vertical:"baseline"})])]),b,a("p",null,[t("message格式可为"),n(s,{to:"/message/format.html#%E6%B6%88%E6%81%AF%E6%AE%B5"},{default:d(()=>[t("消息段")]),_:1}),t("object，或"),n(s,{to:"/message/format.html#%E7%BB%84%E5%90%88"},{default:d(()=>[t("消息段组合")]),_:1}),t("array")]),k])}const y=p(l,[["render",v],["__file","message.html.vue"]]);export{y as default};
