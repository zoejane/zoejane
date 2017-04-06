# Issue 踩坑故事集

一起分享和搜集在 GitHub Issues 使用过程中的经历的踩坑故事。  
欢迎你在 [Wiki](https://github.com/DebugUself/du4proto/wiki) 里，共享你的经历与经验。  
也许你也曾遇到过下面的场景，也许你也曾有过相似的困惑，就在这样的体验里，共同成长起来吧。  


## 故事一：迷之问题

### 场景

为什么想在 Issue 上提个问还总被念叨那么多条条框框，要写那么多前因后果，比写作文还累？  
小A遇到了麻烦，心情焦虑，他决定不管那么多，先发个 Issue 求助好了。  
热心的同学们，请快点帮帮我吧。他暗暗祈求。  

[问题关于git status, and git clone command? · Issue #162 · AIMinder/Py103](https://github.com/AIMinder/Py103/issues/162)

![](http://i1.piimg.com/567571/1eabc040256139ac.png)

小B正好路过这里，正准备帮忙。  
他把问题标题读了三遍，一头雾水。他把正文读了三遍，还是没太弄明白小A到底想干什么。他只能努力去猜测，并且想办法和小A又沟通了几轮。  
了解个问题都得像解谜，小B感慨，累啊，真是累。  


### 关键点：如何写 Issue 正文？

在一篇文中表述清楚来龙去脉。  
这可以帮助你减少许多没有必要的来回沟通，能节约所有人的时间。  
不然， Issue 发出来，因为一些信息的缺失，又要通过几个来回进一步沟通了解 ，又要额外添加内容，光了解事情的过程就花费不少时间啦。  

- [大妈建议](http://blog.zhgdg.org/2014-09/gdg-writer-guider/)，尽可能的包含足够的信息，比如
	- 缘起 ~ 背景历史 
	- 现象 ~ 问题描述 
	- 尝试 ~ 自个儿探索过程/思路/关键代码... 
	- 分析 ~ 将问题分析为几个关键子问题,进行逐一分析,解释 
	- 解决 ~ 最终方案的具体实施过程 
	- 要点 ~ 过程中,必须注意的操作,容易出错的地方 
	- 总结 ~ 从整体上回顾问题/解决/思路,对同类问题进行建议 
	- 参考 ~ 收集过程中各种给予自个儿有力帮助的资源/文章/代码
- 关于提问，可以参考 [提问的智慧](http://wiki.woodpecker.org.cn/moin/AskForHelp)  
- 关于格式，可以参考 [Mastering Markdown - GitHub Guides](Mastering Markdown - GitHub Guides)

![](http://i2.muimg.com/567571/059763f36c34348b.png)


## 故事二：然后，就没有然后了

### 场景

小A在 Issue 上发起了一个问题 [问题关于git status, and git clone command? · Issue #162 · AIMinder/Py103](https://github.com/AIMinder/Py103/issues/162)

小B尝试着进行了回答。之后，也不见小A的回音。小B心想，不知道小A最后解决了没有。  
过了几天，路遇的小C，又热心的再问起了这件事，并给出了自己的建议。后来才知道，原来小A还是卡在这里。  
只是，小C的建议有用吗？问题到底解决了没，小A也没再提起过。  
然后，就没有然后了。  

![](http://i1.piimg.com/567571/0c7fa3c456340c76.png)

### 关键点：及时跟进 Issue

作为 Issue 的发起人，别忘了及时跟进 Issue 的进展，更新状况喔。  
可以将这个任务指派给自己，或者指派给你觉得更合适的人选，由 TA 来跟进。  
Issue 界面的  Assignee 显示的就是负责每个 Issue 对应的人啦。  

![](http://i4.buimg.com/567571/2bf0a02978822faa.png)


# 故事三：不想被关闭的 Issue

### 场景

小A热情的发了一个 Issue ，经过一番讨论后，大家也达成共识。小A很开心。    
不过，过了一阵子后，他收到消息，Issue 被关闭了。    
小A心想，不要啊，那可是我辛辛苦苦写的文字啊，就这么消失了多可惜啊，多打击我的积极性啊。    
请再把我的 Issue 打开吧。 

### 关键点：Issue 永远只是暂时性任务的追踪/提醒/讨论

讨论总是简单的，行动总是困难的。  
Issue 热情的讨论过后，更重要的，是把它化为 行动／作品／决议。  
一个没完没了的讨论，是无法推进事情的真正的发展的。  

所以大妈才会说 `Issue 是过程讨论，尽量消灭 Issue` 

完成一个 Issue 的推进后，也记得及时落地行动，并点击 Close issue。
在 close 的同时，记得也在 comment 中附上相关说明或链接，这样任何人看到这个 Issue ，都能明白当前的进展啦。

![](http://i2.muimg.com/567571/00a3a02d9b84ad79.png)

## 小结：如何创建和使用 Issue

- 写下简洁的标题
- 写下尽量包含完整信息的 Issue 正文
- 根据 Issue 的实际情况，指派对应的 `Assignee`
- 选择合适的 `Labels` / `Project` / `Milestone`
- `Assignee` 跟进并推进 Issue 解决，同时根据实际情况对 Issue 进行维护和调整
- 讨论/行动 后形成新的 决议/作品/代码
- 将 Issue 的 解决情况/链接 以 `Comment` 的形式写在 Issue 下方，并 `Close issue`

## Changelog

- 170406 zoejane 二稿文字修订 20 mins
- 170406 zoejane 二稿完成，增补了一个故事 60 mins
- 170405 zoejane 二稿尝试，改成案例故事的形式 40 mins
- 170405 zoejane 完成全文初稿，对文字进行了进一修订 50 mins
- 170405 zoejane 主体部分初稿，根据大妈的建议和框架重写，并附上相关图片  70 mins
- 170403 zoejane 草稿，列出初步提纲 20 mins

## References

- [Mastering Issues · GitHub Guides](https://guides.github.com/features/issues/)
- [Issues · DebugUself/du4proto](https://github.com/DebugUself/du4proto/issues)
- [珠海GDG 社区知识管理 指南](http://blog.zhgdg.org/2014-09/km4gdg-guider/)
- [珠海GDG 社区文章 撰写指南](http://blog.zhgdg.org/2014-09/gdg-writer-guider/)
