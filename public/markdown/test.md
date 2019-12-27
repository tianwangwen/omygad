搭建个人网站知识储备：

- 服务器
- 域名
- 后台
- 前端
- 数据库
- 命令

正式开始：

## 一. 购买服务器和域名
目前市场上比较出名的有阿里云、腾讯云。

[腾讯云学生套餐链接](https://cloud.tencent.com/act/campus)


![avatar](https://staticdaily.zhongan.com/website/paas/public/markdown/test_1.png)


10块钱一个月 + 16送一个 .cn 域名

>推荐node服务端装 CentOS 系统

## 二. 域名实名认证、备案和解析
##### 1. 在域名管理后台根据提示进行实名认证和备案
实名认证: 24小时之内
备案: 腾讯内部认证3天 + 管理局认证30天之内（不同地点时间不同）
##### 2. 域名解析
![avatar](https://staticdaily.zhongan.com/website/paas/public/markdown/test_2.png)

添加记录: 每一部分都有很详细的说明。

（1）主机记录：要解析 www.omygad.cn, 请填写 www。主机记录就是域名前缀(三级域名)，默认选@

（2）记录类型：如果要指定IP地址，添加A记录

（3）线路类型：默认

（4）记录值：域名指向的IP地址，也可以关联云资源

（5）其他选项：默认值即可

等实名认证、备案完毕访问域名即可访问指定的IP地址

## 三. 服务器
在终端登录服务器：
```
ssh root@106.54.91.74 // 自己的IP地址在服务器管理后台有
password: 
```
接下来就可以部署环境。
我用nodejs做后台。数据库可能用到多个，这里以mysql为例。

（1）安装node

一般系统会自带node，所以不需要安装。

如果没有：
```
yum install -y epel-release // 安装附加包
yum install -y nodejs // 安装node
node -v // 查看版本
```
如果版本较低需要升级
```
npm install -g n // node的版本管理模块
n stable // 安装最新稳定版本
// n latest // 安装最新版本
```

（2）安装mysql

系统自动安装的有mariadb，可以卸载掉
```
yum list installed | grep mariadb // 检查是否安装 mariadb
```
如果列出的有，卸载
```
yum -y remove mariadb*    #全部卸载
```
卸载完成之后，可以再检查一次

通过yum下载mysql

下载mysql的yum源
```
wget -P /home/lisonglin http://dev.mysql.com/get/mysql57-community-release-el7-11.noarch.rpm // 如果没有wget命令，自行搜索安装
```
切换目录
```
cd /home/lisonglin // 上一步下载的目录
rpm -ivh mysql57-community-release-el7-11.noarch.rpm // 安装源
yum repolist enabled | grep "mysql.*-community.*"  // 之后检查是否安装成功
yum install mysql-community-server // 安装mysql，安装过程中需输入y
```
安装成功之后，测试
```
systemctl start mysqld // 启动 mysql
mysql -u root -p // 链接mysql，回车，再输入密码
```
默认安装时密码为空，直接回车即可。如果出现下面错误
```
ERROR 1045 (28000): Access denied for user 'root'@'localhost' (using password: NO)
```
查看默认密码
```
grep 'temporary password' /var/log/mysqld.log // RPM包默认在/var/log/mysqld.log 中
```
数据库可能用到命令
```
systemctl start mysqld // 启动mysqld
systemctl stop mysqld // 停止mysqld
systemctl restart mysqld // 重启mysqld
systemctl enable mysqld // 设置开机启动
systemctl status mysqld // 查看 MySQL Server 状态
```

创建用户
```
CREATE USER 'long'@'%' IDENTIFIED BY '123456'; // 创建一个long的用户密码 123456
GRANT SELECT,INSERT,UPDATE,DELETE ON *.* TO 'sa'@'%'; // 允许这个用户增删改查
// GRANT ALL PRIVILEGES  ON *.* TO 'admin'@'%'; // 允许所有操作

grant all privileges on *.* to root@"%" identified by "123456"; // 设置用户 root 可以在任意IP下被访问
grant all privileges on *.* to root@"xxx.xxx.xxx.xxx" identified by "123456"; // 设置用户 root 可以在xxxIP下被访问
grant all privileges on *.* to root@"localhost" identified by "123456"; // 设置用户 root 可以在本地被访问

flush privileges; // 立即生效
```
[更多操作链接](https://blog.csdn.net/bianchengxiaoma/article/details/80800622)

（3）上传代码

通过scp命令上传
```
scp -r 本地文件 root@106.54.91.74:~/服务器目录 // 需要输入密码
```
通过FTP上传，待补充

（4）开始搭建框架

本人使用：node + webpack + react

[仓库链接](https://github.com/tianwangwen/omygad)

本地build完成，将代码之后上传代码到服务器

（5）启动项目

正常本地启动项目时用npm启动。

但是在服务器我们不能一直保持终端启动，所以需要在后台启动服务。

node服务推荐 pm2 命令。

安装：
```
npm install -g pm2
```
pm2常用命令：
```
pm2 start app.js // 在后台执行app.js
pm2 list // 查看正在运行的进程
pm2 stop <app_name|namespace|id|'all'|json_conf> // 停止进程
pm2 restart <app_name|namespace|id|'all'|json_conf> // 重启
pm2 delete <app_name|namespace|id|'all'|json_conf> // 删除
pm2 monit // 实时监控
pm2 logs // 日志
```
如果要运行 npm 命令
```
pm2 start npm -- run start // 后台运行 npm run start
pm2 start npm --name omygad --watch -- run start // 命名进程并监控
```
至此我们已经可以访问网站，如果域名还没有备案，可以通过IP地址访问

（6）多项目

可以通过域名解析，绑定多个域名到服务器，这样就可以建多个项目(test.omygad.cn、www.omygad.cn、m.omygad.cn、console.omygad.cn)等等。

这样就会有新的问题： 我们只有一个服务器，通过不同域名访问的都是同一个ip地址的80端口，也就是只能访问同一个项目，怎么能访问不同项目呢？

思路：在80端口开一个转发服务，通过不同域名，转发到对应的端口。

反向代理nginx是专业的。

（7）nginx

nginx忘完啦！！！

暂时先在80端口开一个项目，之后补充nginx相关配置。

（8）代码仓库

代码仓库选择git、github、码云、svn

选免费私有版！！！码云