# 换肤方案 - SCSS 变量实现换肤方案

缺点：

皮肤样式在一个css文件中

疑问：

如何实现的过包多套样式

### 实现步骤

**步骤1 定义不同皮肤的颜色变量**

```css
// 浅色
$colors-light: (
  fill-1: #fff,
  text: #3c3c3c,
  text-1: #757575,
  text-2: #222,
);

// 深色
$colors-dark: (
  fill-1: #222,
  text: #fff,
  text-1: rgba(255, 255, 255, 0.3),
  text-2: #ffcd32,
);
```

**步骤2 创建 Sass @mixin, 需要根据皮肤变化的颜色 使用 Sass 的 @include 实现**

定义 Sass 的 @mixin

```css
// 背景色
@mixin bg-color($key) {
  background-color: map-get($colors-light, $key);
  [data-theme="dark"] & {
    background-color: map-get($colors-dark, $key);
  }
}
// text色
@mixin text-color($key) {
  color: map-get($colors-light, $key);
  [data-theme="dark"] & {
    color: map-get($colors-dark, $key);
  }
}
```

使用 Sass 的 @include

```css
  .text {
    display: inline-block;
    line-height: 70px;
    @include text-color(text-2);
  }
```


**步骤3 切换操作**

```js
onThemeChange(e) {
    this.theme = e.target.value
    document.documentElement.setAttribute('data-theme', this.theme);
},
```