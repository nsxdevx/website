# 写一个聊天机器人吧

## 创建项目
```bash
mkdir nsxai
cd ./nsxai
go mod init nsxai
```
## 添加依赖
```bash
go get -u github.com/nsxdevx/nsxbot
```
## 连接到OneBot
这里采用的是将OneBot实现作为WServer, 我们主动去连接.
```go
package main

import (
	"context"
	"time"

	nsx "github.com/nsxdevx/nsxbot"
	"github.com/nsxdevx/nsxbot/driver"
)

func main() {
	driver := driver.NewWSClient(1*time.Second, driver.WSnode{
		Url: "localhost:4000",
	})
	bot := nsx.Default(driver)
	bot.Run(context.Background())
}
```
运行，你应该在控制台看到如下输出
![](../images/code1.png)
## 测试消息交互
```go
func main() {
	driver := driver.NewWSClient(1*time.Second, driver.WSnode{
		Url: "localhost:4000",
	})
	bot := nsx.Default(driver)
	pvt := nsx.OnEvent[types.EventPvtMsg](bot)

	adminuin, _ := strconv.ParseInt(os.Getenv("ADMIN_UIN"), 10, 64)
	pvt.Handle(func(ctx *nsx.Context[types.EventPvtMsg]) {
		ctx.Msg.Reply(ctx, "测试")
	}, filter.OnlyUsers(adminuin))

	bot.Run(context.Background())
}
```
现在尝试使用admin的qq发送一条消息到你的Bot，应该会收到“测试”回复