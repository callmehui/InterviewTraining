<template>
  <div class="javascript">
    <h3>JavaScript篇</h3>
    <hr>
    <h4>一、数据类型</h4>
    <p>JavaScript（ES2015）目前有7中数据类型:undefined、null、Boolean（布尔值，只包含true和false）、String（字符串）、Number（数字）、Object（对象）和Symbol（代表一个独一无二的值）。</p>
    <h4>**typeof操作符：用于变量检测数据类型。**</h4>
    <p>typeof操作符可以用来检测变量的数据类型，用法如下：</p>
    <pre>
      var num = 5;
      console.log( typeof num );   // "nummber"
    </pre>

    <ul>
      <li>
        <p>undefined类型：只包含一个特殊的值undefined，当变量被申明但是未被初始化时，它的值就是undefined。</p>
        <pre>
          let myName;
          console.log( myName );  // 输出undefined
        </pre>
        <p>一般来说，无需显式申明一个变量的值为undefined。undefined的主要作用是区分变量是未被定义（变量未被定义使用会直接产生语法错误）还是已经定义但未被初始化时。</p>
        <pre>
          let myName;
          console.log(myName);  // 输出undefined
          cnsole.log(myJob);    // myJob被被定义产生错误
          // 但是通过typeof操作符无法判断变量是未定义还是未被初始化
          console.log( typeof myName );   // undefined
          console.log( typeof myJob );    // undefined
        </pre>
        <p>如果想要通过typeof操作符显式地判断变量是未被初始化还是未定义，那么应该应该显示地初始化变量，那么剩余typeof myVar未"undefined"的变量就是未定义的。</p>
      </li>
      <li>
        <p>null类型：只包含一个特殊的值null，null值代表一个空指针对象，所以“typeof null”返回“object”。所以如果一个变量将用于保存对象，那么最好用null来初始化该变量，检测null值得方式如下：</p>
        <pre>
          if( typeof myVar == "object" && myVar != null ){
            // 是对象类型而且不是空对象，继续对myVar进行对象操作
          }
        </pre>
      </li>
      <li>
        <p>Boolean类型：Boolean类型只有2个字面值：true和false，区分大小写，所以类似True和False都不是Boolean类型。但是其它数据类型可以通过Boolean()函数来转换为一个Boolean值。</p>
        <pre>
          var myVar;
          // 对myVar进行赋值操作
          Boolean(myVar)
          string： myVar为任何非空字符串，Boolean(myVar)返回true，""（空字符串）会被转换为false。
          Number：myVar为任何非零数字值（包括无穷大），Boolean(myVar)返回true，0和NaN（非数字）会返回false。
          Object：myVar为任何对象，Boolean(myVar)返回true，null返回false。
          undefined：只能被转换为false。
        </pre>
      </li>
      <li>
        <p>Number类型：Number类型支持整数、浮点数，还支持十进制、八进制和十六进制等；NaN：非数值，表示非数字，可以通过函数isNaN()来判断一个数据是否是NaN</p>
        <pre>
          <p>对于数字（number）类型（出去NaN本身）、可以被转换为数字类型的（true（可被转换为1）、false（可被转换为0）、数字字符串（"10"）等），isNan()都会返回true，表明该变量是一个NaN。</p>
          <p>可以通过函数Number()将一些非数字类型数据转换为数字类型，例如：</p>
          Number(true);   // 1
          Number("Hello world!");   // NaN
          Number("");   //0
          Number("0000000112");  // 112
        </pre>
        <p>通过函数parseInt()、parseFloat()可以将数字类型和非数字类型转换为对应的整数或者浮点数或者NaN。</p>
      </li>
      <li>
        <p>String类型: 后续再加补充…… </p>
      </li>
      <li>
        <p>Object类型：后续再加补充……</p>
      </li>
      <li>
        <p>symbol类型：后续再加补充……</p>
      </li>
    </ul>
    <hr>

    <h3>二、变量声明（var、let和const）</h3>
    <p>javascript（ES2015）目前有三种方式声明变量：分别是使用关键字var、let和const。</p>
    <h3>** 变量提升：简而言之，变量在被声明时，浏览器对JavaScript代码的处理逻辑是，把变量的声明提到当前作用域的最前面（对于var而言是函数作用于的最前面，而let和const不允许在被定义前使用）。 **</h3>
    <pre>
      实例说明：

      console.log(myVar1);        // 输出undefined
      var myVar1 = "apple";
      function func(){
        console.log(myVar2);      // 输出undefined
        var myVar2 = "orange";
      }
      func();

      上面的代码会被浏览器解析为：
      var myVar1;
      console.log(myVar1);        // 输出undefined
      myVar1 = "apple";
      function func(){
        console.log(myVar2);      // 输出undefined
        myVar2 = "orange";
      }
      func();

    </pre>

    <ul>
      <li>
        <p>var: 用来定义变量，作用域是函数级作用域，存在“变量提升”。</p>
      </li>
      <li>
        <p>let: 用来定义变量，作用域是块级作用域，不存在“变量提升”，在被定义前不能被访问（所以不存在“变量提升”），同一个作用域内不能被重新定义，只能被重新赋值。</p>
      </li>
      <li>
        <p>const：用来定义常量，作用域是会计作用域，不存在“变量提升”，在被定义前不能被访问（所以不存在“变量提升”），同一个作用域内不能被重新定义，也不能被重新赋值（常量）。</p>
      </li>
    </ul>
    <hr>

    <h3>三、函数</h3>
    <p>JavaScript的函数没有函数签名，所以就没有重载。</p>
    <b>函数签名：由函数名、参数列表组成，来代表该函数的唯一性，从而实现重载。重载：即具有相同函数名，但是参数不同的函数被视为不同的函数。</b>
    <p>javascript中，函数的参数被存储在arguments对象中，它可以向数组一样通过下表来访问函数的参数（从0开始），arguments.length属性代表了函数的参数个数。同时，也正因为函数的参数被存储在arguments对象中，类似于一个数组，所以在调用函数时几遍传入的参数与函数声明的参数不一致（参数个数不一致，弱类型不需要考虑参数类型），JavaScript也不会报错；同时，传入的参数可以使任何类型的数据，包括：数字、字符串、对象等。</p>
    <pre>
      通过实例来使用一下arguments对象：

      function howManyArguments(){
        console.log(arguments.length);
      }
      howManyArguments();     // 0
      howManyArguments([],{},null);     // 3
      howManyArguments(1,"zoo","",undefined);   // 4

      // 通过arguments对象实现类似于重载的效果
      function doAdd(){
        if( arguments.length >= 1 ){
          let sum=0;
          for(let i=0; i &lt; arguments.length; i++){
            sum += Number( arguments[i] ) ;
          }
          console.log(sum);
        } else {
          console.log(0);
        }
      }
      doAdd();          // 0
      doAdd(5);         // 5
      doAdd(1,5,7);     // 13
      doAdd("5",true);  // 6
      doAdd(5,"10",false);   // 15
      doAdd("game",10,5);    //NaN, "game"通过Number()函数被转换为NaN，NaN加上任何数字或者NaN，结果还是NaN

    </pre>

    <h3>四、变量和作用域</h3>
    <p>把一个任意类型的数据赋值给一个变量，若数据类型为基本类型，变量实际上操作的就是变量的值，比如把变量的值赋值到另一个变量：</p>
    <pre>
      var num1 = 20;
      num2 = num1;    //num2 = 20
      // 此时num2 = num1;  //这一行赋值操作实际上是把变量num1存储的值传递给了num2，所以后续对num1或者num2的操作都不会影响到彼此，因为num1和num2存储的值分配了不同的内存空间，互不干扰
      num2 += 10;   //num2等于30，num1等于20，两者互不相干
    </pre>
    <p>若数据类型为引用类型，那么变量存储的实际上是存储变量对象（引用类型都是对象）的内存地址的引用，该引用指向该内存（JavaScript不允许操作内存，所以只能操作引用），比如下面引用类型的复制</p>
    <pre>
      var customer1 = new Object();
      customer1.name = "老夫子";
      var customer2 = customer1;
      console.log(customer1.name);    // 老夫子
      console.log(customer2.name);    // 老夫子
      customer2.name = "大番薯";      // customer2和customer1作为引用类型，实际上的赋值是把customer1的引用赋值给了customer2，所以两者指向了同一个内存空间，故而对customer2的属性值得重新赋值实际上是对内存空间中变量重新赋值，同样会影响到customer1
      console.log(customer1.name);    // 大番薯
      console.log(customer2.name);    // 大番薯
    </pre>
    <br>
     <p>函数的参数只能是按值传递，无论参数是基本类型还是引用类型都只能是值传递。这说明，<b>对于引用类型而言，传入参数不是对象的引用而是引用指向的内存存储的数据，在函数体内操作引用类型的参数会直接修改内存中存储的值，从而影响到传入的实参。</b></p>
      <pre>
        function setName( obj ){
          obj.name = "大番薯";
          obj = new Object();     //此时新建了一个对象并赋值给obj，若按照引用传值此时对象obj应该重新指向该新建的对象，则person.name应该为“老夫子”；但实际上person.name并没有改变，说明此时传递的不是对象的引用而是按照值传递，只有对obj.name重新赋值才能改变person.name的值，从头到尾操作的是同一个对象
          obj.name = "老夫子";    //此时的对象obj是新建在函数体内，对于外部而言是一个局部对象，这个局部对象在函数执行完毕后就会被销毁，外部是无法访问到的，所以person.name还是“大番薯”。
        }
        var person = new Object();
        setName(person);
        console.log(person.name);     // 大番薯
      </pre>

      <p>检测引用类型：instanceof操作符</p>
      <p>instanceof操作符用法：variable instanceof constructor,如果变量是该类型的对象实例则返回true</p>
      <pre>
        instanceof操作符用法示例
        console.log( person instanceof Object );    // 如果person是Object类型的实例，则返回true，Object是基础类型，所以此处一定是true
        console.log( colors of Array );
      </pre>
      <hr>

      <h3>五、引用类型</h3>
      <p>引用类型类似于其他面向对象编程语言（c++、Java等）中的类的概念，但是JavaScript本身并没有类的概念（ES2015引入了类（class）这个语法糖）,对象就是引用类型的一个实例。</p>
      <p>系统内置了许多的引用类型，比如：Object、Array、Date、RegExp、Function等，还可以自定义引用类型，通过引用类型创建该引用类型的实例的方式是通过new关键字跟上引用类型的构造函数。</p>
      <b>Object类型</b>
      <pre>
        实例如下：
        var obj = new Object();  // 通过构造函数来创建引用类型的实例
        obj.name = "老夫子";     // 为Obj实例添加属性
        // 还可以通过字面量表示法创建Object类型的实例，作用相当于使用Object构造函数创建实例
        var obj = {};     // 创建一个空对象，等价于 new Object()
        var Obj = {
          name: "钟辉",
          age: 24,
          gender: male
        };              // 创建一个对象实例并且附加了3个属性
      </pre>
      <b>Array类型</b>
      <pre>
        实例化Array类型
        var arr = new Array();  // 实例化Array类型，得到实例arr
        arr[0] = "大头儿子";
        arr[1] = "小头爸爸";
        arr[2] = "隔壁王叔";  // 为arr数组添加数组元素
        actors = new Array("大头儿子","小头爸爸","隔壁王叔");
        通过数组字面量表示法实例化Array类型
        colors = ["红","橙","黄","绿","蓝","靛","紫"];

        通过数组的length属性对数组进行增删
        arr[2] = "围裙妈妈";  // 修改arr第三项为“围裙妈妈”
        arr[3] = "隔壁王叔";  // 添加第四项
        arr[5] = "小芳";      // 添加第五项为“小芳”，那么第四项为empty(空，不同于"")
        // arr : ["大头儿子","小头爸爸","围裙妈妈","隔壁王叔", ,"小芳"]
        arr.length: arr数组的长度，可以通过修改该值增删数组
        console.log(arr.length);  // 6
        arr.length = 7; // 向数组arr新增一项但是值为empty，arr:  ["大头儿子","小头爸爸","围裙妈妈","隔壁王叔", ,"小芳", ]
        arr.length = 4; // 设置数组长度为4，第四项之后的数组元素都被删除， arr:  ["大头儿子","小头爸爸","围裙妈妈","隔壁王叔"]
      </pre>
      <p>通过isArray()方法来判断变量是否为数组</p>
      <pre>
        用法实例：
        Array.isArray( variable ) : 变量为数组类型的实例则返回true否则返回false
        var data = [];
        if( Array.isArray( data ) ){
          console.log( "该变量是数组" );
        }
      </pre>
      <h3>操作数组的内置方法</h3>
      <p>栈方法push()和pop()：栈方法把数组看成是类似于栈的数据结构，栈顶对应于数组的尾部，所以栈方法都是对数组的尾部进行操作的。</p>
      <b>push(): 可以接受任意数量的参数，将它们逐个添加到数组末尾；pop(): 从数组末尾移除最后一项，同时数组的length也会对应减1,并返回移除的项。</b>
      <pre>
          var colors = ["红","橙","黄"];
          colors.push("绿","蓝","靛","紫","黑","白");   // 使用栈方法push()向数组尾部插入4项，color: ["红","橙","黄","绿","蓝","靛","紫","黑","白"]
          var item = colors.pop(); //使用栈方法pop()删除最后一项，并返回被删除的那一项，item: "白"，color: ["红","橙","黄","绿","蓝","靛","紫","黑"]
          var item = colors.pop(); //使用栈方法pop()删除最后一项，并返回被删除的那一项，item: "黑"，color: ["红","橙","黄","绿","蓝","靛","紫"]
      </pre>
      <p>队列方法shift()和unshift()：队列方法把数组看作是队列的数据结构，“先进先出”，所以队列方法是从数组的头部进行操作的。</p>
      <b>shift()：从数组头部删除一项（删除当前的第一项），并返回第一项；unshift()：从头部添加任意数量的元素，并返回数组的长度</b>
      <pre>
        var boys = new Array("王小雷","张二蛋","吴三省");
        boys.shift(); // 返回： "王小雷"
        boys // ["张二蛋", "吴三省"]
        boys.unshift("李三枣","孙小婵");  // 返回数组长度4
      </pre>
      <p>重新排序方法reverse()和sort()</p>
      <p>reverse(): 会反转整个数组，并返回反转后的数组，操作的数组本身而不是数组的副本；sort(): 会按照一定的规则对数组进行排序，并返回排序过后的数组，操作的数组本身而不是数组的副本。</p>
      <pre>
        var calabashBrothers = ["红娃","橙娃","黄娃","绿娃","青娃","蓝娃","紫娃"];
        calabashBrothers.reverse();  // 返回：["紫娃", "蓝娃", "青娃", "绿娃", "黄娃", "橙娃", "红娃"]
        var nums = [15,7,4,1,89,23,45,12,76];
        // sort()方法默认会对数组的每一项调用toString方法，再进行比较，
        nums.sort(); // 返回：[1, 12, 15, 23, 4, 45, 7, 76, 89]
        // 为sort方法定义排序规则：排序规则是由一个特定的函数定义: 比较函数接受2个参数（a、b），根据返回值对2个参数进行比较
        nums.sort( (a,b) =>  a-b );  // 此处返回: [1, 4, 7, 12, 15, 23, 45, 76, 89]，注意：使用了箭头函数来定义匿名的排序规则函数
        // 从大到小排序
        nums.sort((a,b) => a-b ).reverse();   // 对排序后的数组进行反转，即可得到
      </pre>

      <p>数组操作方法concat()、slice()和splice()</p>
      <p>concat: 对数组进行拼接，接受一个到多个参数,参数可以是任意类型的数据：包括数字、字符串、数组和对象等。用法：array.concat(arguments)</p>
      <pre>
        var arr = [1,2,3];
        arr.concat();   // 参数为空，返回数组本身[1,2,3]
        arr.concat("王二狗");  // 返回 [1,2,3,"王二狗"]
        arr.concat([7,8,9]);  // 返回 [1,2,3,7,8,9]
        arr.concat({name: "老夫子"});   // 返回 [1,2,3,"老夫子"]
        // 多个参数时
        arr.concat("张三", [4,5,6]);   // 返回 [1,2,3,"张三",4,5,6]
      </pre>
      <hr>
      <pre>
        // 自定义cancat函数: 只对数组进行拼接
        function concat_self() {
            let result = new Array();
            // 判断参数个数
            if (arguments.length > 0) {
                // 判断所有参数是否都为数组类型
                for (let i = 0; i &lt; arguments.length; i++) {
                    if (!Array.isArray(arguments[i])) {
                        return "语法错误，存在参数不是Array类型的实例";
                    }
                }
                // 参数个数为1直接返回原数组
                if (arguments.length == 1) {
                    return arguments[0];
                } else {
                    // 参数个数大于1，进行拼接
                    for (let i = 0; i &lt; arguments.length; i++) {
                        for (let j = 0; j &lt; arguments[i].length; j++) {
                            result.push(arguments[i][j]);
                        }
                    }
                    return result;
                }

            }
            return "语法错误，函数至少需要一个参数";

        }
      </pre>

      <p>slice: 切割数组，接受0个到2个参数，参数为空时返回数组本身，一个参数时返回指定位置到数组末尾之间的所有项；2个参数是返回起始位置到结束为止之间的所有项，但不包括结束位置。</p>
      <pre>
        var arr = [1,2,3,4,5,6,7];
        arr.slice();  // 返回 [1,2,3,4,5,6,7]
        arr.slice(0); // 返回 [1,2,3,4,5,6,7]
        arr.slice(2); // 返回 [3,4,5,6,7]
        arr.slice(1,5); // 返回 [2,3,4,5]
        // 下表为负数时，会加上数组长度，所以 arr.slice(-6,-2)相当于 arr.slice(1,5)
        arr.slice(-6,-2);  // 返回 [2,3,4,5]
      </pre>

      <p>splice(): 拼接数组，concat的终极无敌加强版。有多种用法：<b>删除</b>、<b>插入</b>和 <b>替换</b></p>
      <p><b>删除</b>: 可删除任意数量的项，需要指定2个参数，第一项的位置和要删除的项数,例如</p>
      <pre>
        var arr = [1,2,3,4];
        arr.splice(0,2);   // 返回被删除的项组成的数组，返回[1,2]，原数组本身为：arr: [3,4]
      </pre>
      <p><b>插入</b>: 可向指定位置插入任意数量的项，第一个参数为起始位置，第二个为0（表明不删除任何一项），后续的所有参数将从起始位置插入</p>
      <pre>
        var arr = [1,2,3,4];
        arr.splice(2,0,"老夫子",1,4);  // 返回一个空数组（因为没有删除任何一项），原数组本身：[1, 2, "老夫子", 1, 4, 3, 4]
      </pre>
      <p><b>删除</b>: 可向指定位置插入任意数量的项，第一个参数为起始位置，第二个为删除的项数，后续的所有参数将从起始位置插入</p>
      <pre>
        var arr = [1,2,3,4];
        arr.splice(2,1,"老夫子",1,4);  // 返回一个[3] ，原数组本身：[1, 2, "老夫子", 1, 4, 4]
        // 其中被插入的项可以使任意数据类型，包括：数字、字符串、数组、对象等等
        arr.splice(2,1,"老夫子",1,[7,8,9],{name:"大番薯"});
      </pre>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>
