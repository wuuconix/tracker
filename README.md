从三个站点获得tracker站点，综合后返回结果

由于node-fetch 不支持系统代理，fetch了半天还不返回结果，完全比不上终端里的curl

那就转化一下思维嘛，写个shell脚本来获取数据，由于aria的tracker格式是需要用逗号隔开

我们再用js处理一下，顺便去个重，得到我们需要的结果。

用法: 

```bash
sh tracker.sh | node index.js
```

![image](https://tva2.sinaimg.cn/large/007YVyKcly1h3ocnt642lj318n0evqv5.jpg)

链接：https://url.wuuconix.link/tracker

每天凌晨定时更新