document.getElementById("bar").innerHTML=`
<div class="mdui-toolbar">
    <a href="javascript:;" class="mdui-btn mdui-btn-icon" id="cxkgames-drawer-openbutton">
        <i class="mdui-icon material-icons">menu</i>
    </a>
    <span class="mdui-typo-title">蔡徐坤小游戏鸡场</span>
    <div class="mdui-toolbar-spacer"></div>
    <a href="javascript:;" class="mdui-btn mdui-btn-icon">
        <i class="mdui-icon material-icons">more_vert</i>
    </a>
</div>
<div class="mdui-drawer" id="cxkgames-drawer">
    <div class="cxkgames-drawer-billboard">
        <img src="https://cdn-community.codemao.cn/47/community/d2ViXzEwMDFfMjYyMTgwOV8yNjIxODA5XzE2NDQ5NzQ5NTQ2MjdfNzQxNTgzYjU.png" class="description mdui-m-x-2 mdui-m-y-2 cxkgames_drawer_head" style="width:20%;border-radius:10%;"/>
        <div class="description mdui-m-x-2 mdui-text-color-white-text mdui-valign" style="padding-bottom:20px">MathCalculus</div>
    </div>
    <ul class="mdui-list">
        <li class="mdui-subheader">蔡徐坤小游戏鸡场</li>
        <li class="mdui-subheader">工具</li>
        <li class="mdui-subheader">小游戏</li>
        <li class="mdui-list-item mdui-ripple" onclick="location.href='/static/games/eatchicken/index.html'">
            <i class="mdui-list-item-icon mdui-icon material-icons">star</i>
            <div class="mdui-list-item-content">吃掉蔡徐坤</div>
        </li>
        <li class="mdui-subheader">其他</li>
        <li class="mdui-list-item mdui-ripple">
            <i class="mdui-list-item-icon mdui-icon material-icons">email</i>
            <div class="mdui-list-item-content">关于本站与作者</div>
        </li>
        <div class="copyright mdui-text-color-white-secondary">
            <p>© 2022 MathCalculus</p>
            <p>Powered by <a href="/" target="_blank">MathCalculus</a></p>
        </div>
    </ul>
</div>`

mdui.mutation()

document.getElementById("cxkgames-drawer-openbutton").onclick=function(){
    (new mdui.Drawer('#cxkgames-drawer')).toggle()
}