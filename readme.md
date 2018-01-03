## rtsp流格式，采用谷歌浏览器插件开发
```
本demo依赖chrome以及VXG Media Player插件

1.安装扩展程序到谷歌浏览器，直接拖动.crx文件安装即可 这种方法失效，提示程序只能通过谷歌应用商店安装,这种方式安装失败

2.解压VXG-Media-Player_v1.8.42.rar文件。进入谷歌浏览器扩展程序，勾选开发模式，点击加载已解压的扩展程序选择刚刚解压的文件夹。便能成功安装。

3.插件官网 https://www.videoexpertsgroup.com/vxg-chrome-plugin/  可能需要翻墙
4.插件下载地址 https://chrome.google.com/webstore/detail/vxg-media-player/hncknjnnbahamgpjoafdebabmoamcnni
5.插件github地址 https://github.com/VideoExpertsGroup/VXG.Chrome-RTSP-Player
6.运行 npm install
7.运行 node index.js
8.打开 http://localhost:3078/index

RTSP地址说明
海康：
rtsp://[username]:[password]@[ip]:[port]/[codec]/[channel]/[subtype]/av_stream
说明：
username: 用户名。例如admin。
password: 密码。例如12345。
ip: 为设备IP。例如 192.0.0.64。
port: 端口号默认为554，若为默认可不填写。
codec：有h264、MPEG-4、mpeg4这几种。
channel: 通道号，起始为1。例如通道1，则为ch1。
subtype: 码流类型，主码流为main，辅码流为sub。


例如，请求海康摄像机通道1的主码流，Url如下
主码流：
rtsp://admin:12345@192.0.0.64:554/h264/ch1/main/av_stream
rtsp://admin:12345@192.0.0.64:554/MPEG-4/ch1/main/av_stream


子码流：
rtsp://admin:12345@192.0.0.64/mpeg4/ch1/sub/av_stream
rtsp://admin:12345@192.0.0.64/h264/ch1/sub/av_stream


大华：
rtsp://username:password@ip:port/cam/realmonitor?channel=1&subtype=0
说明:
username: 用户名。例如admin。
password: 密码。例如admin。
ip: 为设备IP。例如 10.7.8.122。
port: 端口号默认为554，若为默认可不填写。
channel: 通道号，起始为1。例如通道2，则为channel=2。
subtype: 码流类型，主码流为0（即subtype=0），辅码流为1（即subtype=1）。


例如，请求某设备的通道2的辅码流，Url如下
rtsp://admin:admin@10.12.4.84:554/cam/realmonitor?channel=2&subtype=1

```

