# 两端对齐的三种方式

### flex实现
```$xslt
        .body {
             /*flex 使用*/
            display: flex;
            justify-content: space-between;
        }
```

### 内联元素方式实现
```$xslt
        .body4{
            /* 内联元素*/
            text-align: justify;
        }
        .body4:after{
            /* 内联元素*/
            /* text-align-last:justify只有IE支持，标准浏览器需要使用 .demo:after 伪类模拟类似效果 */
            display:inline-block;
            overflow:hidden;
            width:100%;
            height:0;
            content:'';
            vertical-align:top;/* opera浏览器解决底部多余的空白 */
        }
        .area4 {
            width: 100px;
            height: 200px;
            text-align: center;
            line-height: 200px;
            /* 内联元素*/
            display: inline-block;
        }
```
```$xslt
        <div class="body4">
            <div class="left area4">left4</div>
            <div class="right area4">right4</div>
        </div>
```

### column 方式 
```$xslt
        .body1{
            /* column 方式 */
            column-count: 2;
            column-gap: 79%;
        }
```

### 文字的两端对齐
```$xslt
        <div class="text-justify">
            <div class="text">我想要两端对齐</div>
        </div>
        .text{
            text-align:justify;
            text-justify:distribute-all-lines;/*ie6-8*/
            text-align-last:justify;/* ie9*/
            -moz-text-align-last:justify;/*ff*/
            -webkit-text-align-last:justify;/*chrome 20+*/
        }
```