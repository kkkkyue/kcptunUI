var React = require('react');
var ReactDOM = require('react-dom');
var AMUIReact = require('amazeui-react');

var topbarInstance = (
  <AMUIReact.Topbar brand="KCPTUN 客户端" toggleNavKey="nav">
    <AMUIReact.CollapsibleNav eventKey="nav">
      <AMUIReact.Nav topbar>
        <AMUIReact.NavItem active href="http://www.amazeui.org">首页</AMUIReact.NavItem>
        <AMUIReact.NavItem href="http://www.amazeui.org">开始使用</AMUIReact.NavItem>
        <AMUIReact.NavItem href="http://www.amazeui.org">按需定制</AMUIReact.NavItem>
      </AMUIReact.Nav>
    </AMUIReact.CollapsibleNav>
  </AMUIReact.Topbar>
);

var button=(
    <AMUIReact.Button>关闭进程</AMUIReact.Button>
);

ReactDOM.render(topbarInstance, document.getElementById('header'));
ReactDOM.render(button, document.getElementById('Button'));