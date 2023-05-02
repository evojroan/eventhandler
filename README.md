# 這是什麼？

本專案解說並示範 React 中的事件處理器如何以 prop 的方式從父元件傳到子元件，子元件執行該事件處理器，使父元件得以取得子元件的資料。

# 父元件如何取得子元件的資料？

Parent 元件首先傳遞 prop 一路從 Child 元件再到 Grandchild 元件。流程說明如下：

1.  Parent 元件傳遞名為 "propToChild" 的 prop 給 Child 元件。propToChild 就是事件處理器 parentHandler。
2.  Child 元件傳遞名為 "propToGrandChild" 的 prop 給 Grandchild 元件。propToGrandChild 就是事件處理器 childHandler，並含有 propToChild，也就是 callback function。
3.  Grandchild 元件輸入數字、執行事件處理器 grandChildHandler 時，也同時執行了 propToGrandChild(value)。
4.  被執行過的 propToGrandChild 取得了輸入的數字 value，也執行了 propToChild(value)，所以 propToChild 也取得了數字 value。
5.  因為 propToChild 就是 parentHandler，所以執行 parentHandler(value) 就能讓 Parent 元件得到數字 value。

# 詳細圖文說明

https://tinyurl.com/4at4c2f6
