# 变量实现换肤-Css变量实现换肤



### 实现步骤

**步骤1 定义不同皮肤的颜色变量, 并全局引入**

```css
// 默认变量
:root {
  --fill-1: #eee;
  --text: #f10808;
  --text-1: #aa4c0b;
  --text-2: #622909;
}
// 深色变量
[data-theme="dark"] {
  --fill-1: #222;
  --text: #ffcd32;
  --text-1: #aaaa28;
  --text-2: #e9e974;
}
```

**步骤2 对于需要根据皮肤变化颜色的地方使用 css 变量实现**

```css
.text {
    line-height: 70px;
    font-size: var(--font-size-large);
    color: var(--text-2);
}
```

**步骤3 当触发切换触发切换皮肤的时候改变 body 的属性** 

```js
onThemeChange(e) {
    this.theme = e.target.value
    document.documentElement.setAttribute("data-theme", this.theme);
}
```
