module.exports = {
    killKCP: function (port,handle) {
        var cmd = process.platform == 'win32' ? 'netstat -ano' : 'ps aux';
        var exec = require('child_process').exec;
        //var port = '28989';
        exec(cmd, function (err, stdout, stderr) {
            if (err) {
                return console.log(err);
            }
            stdout.split('\n').filter(function (line) {
                var p = line.trim().split(/\s+/);
                var address = p[1];
                if (address != undefined) {
                    if (address.split(':')[1] == port) {
                        exec('taskkill /F /pid ' + p[4], function (err, stdout, stderr) {
                            if (err) { return console.log('释放指定端口失败！！'); }
                            console.log('占用指定端口的程序被成功杀掉！');
                            handle();
                            return;
                        });
                    }
                }
                
            });
        });
        handle();
    },
    SetKCP: function (handle) {
        var exec = require('child_process').spawn;
        var e = "cmd.exe";
        var cmdStr = 'client_windows_amd64.exe -l :28989 -r 103.219.192.8:38989 --crypt aes --key 19850620wj --mtu 1350 --sndwnd 128 --rcvwnd 1024 --mode fast2';

        s = exec(e, ['/c', cmdStr]);

        s.stdout.on('data', function (data) {
            console.log('标准输出：\n' + data);
        });

        // 捕获标准错误输出并将其打印到控制台
        s.stderr.on('data', function (data) {
            console.log('标准错误输出：\n' + data);
            handle(data);
        });

        // 注册子进程关闭事件
        s.on('exit', function (code, signal) {
            console.log('子进程已退出，代码：' + signal);
        });
    }
}