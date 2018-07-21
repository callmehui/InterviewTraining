<template>
    <div class="css">
        <h3>Css篇</h3>
        <hr>

        <!-- 1. css盒模型 -->
        <div class="css-box">
            <b>1. css盒模型</b>
            <p>css中有2种盒模型：w3c盒模型和IE盒模型，可以通过css属性box-sizing来切换这2种盒模型。</p>
            <p>box-sizing: content-box | border-box，其中content-box是默认值，指代W3c盒模型，该模式下区块的宽度和高度不包括padding、border和margin；
                border-box指代IE盒模型，容器的宽高包括内容区域+padding+border+margin。 </p>  
            <p>盒模型图例：</p>     
            <img class="css-box-img" src="../../assets/image/css-box.png" alt="css盒模型图例">
            <p>所以，content-box = content， 而border-box = content+padding+border+margin。</p>
        </div>

        <!-- 画一条0.5px的线 -->
        <div class="css-line">
            <b>2. 画一条0.5 px高的线</b>
            <p>0.5px粗的线 </p>
            <div class="scale-half"></div>
            <pre>
                对应的css代码为：
                {
                    height: 1px;
                    background-color: #000;
                    transform: scaleY(0.5);
                    transform-origin: 50% 100%;
                }
            </pre>

            <p>1px粗的线</p>
            <div class="height-1px"></div>
            <pre>
                对应的css代码为：
                {
                    height: 1px;
                    background-color: #000;
                }
            </pre>
            <b>实际原理是：让原本高度为1px的线变模糊了，因为有部分浏览器宽高最小单位为1px（比如chrome）</b>
        </div>

    </div>  
</template>

<script>
export default {
    
}
</script>

<style scoped>
.css-box-img {
    width: 60%;
    max-width: 600px;
}
.css-line .scale-half {
    height: 1px;
    transform: scaleY(0.5);
    transform-origin: 50% 100%;
    background-color: #000;
    margin: 20px 0;
}
.css-line .height-1px {
    height: 1px;
    background-color: #000;
    margin: 20px 0;
}
</style>
