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

var handleClick = function() {
  
};

var button = (
  <AMUIReact.Button id="setKCPButton" onClick={handleClick}>关闭进程</AMUIReact.Button>
);

var formInstance = (
  <form className="am-form" target="_blank">
    <AMUIReact.Input type="file" label="尊容" id="doc-ipt-3" help="选择一个文件" />
  </form>
);

ReactDOM.render(topbarInstance, document.getElementById('header'));
ReactDOM.render(button, document.getElementById('Button'));
ReactDOM.render(formInstance, document.getElementById('form1'));