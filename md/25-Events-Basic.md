# EVENTS BASIC
[JS-FILE](../js/25-Events-Basic.js)
---
>we use event tag for give clicks on event like single click to show file double click to show right click so the table is

|EVENTS|HOW TO USE|
|------|----------|
|click -> |onclick|
|double click ->|ondoubleclick|
|right click ->|oncontextmenue|
|mouse hover ->|onmouseout|
|mouse out ->|onmousedown|
|mouse down ->|onmouseupdown|
|mouse up ->|onmouseup|
|key press ->|onkeypress|
|key up ->|onkeyup|
|load ->|onload|
|un load ->|onunload|
|resize ->|onresize|
|scroll ->|onscroll|
>so patten -> for events

```javascript
function hello(){
    alert("hello everyone");
}
<body>
<script src="./js/25-Events-Basic.js"></script>
<button onclick="hello()">click me</button>
<button ondblclick="hello()">on click me</button>
<button oncontextmenu="hello()">Right click</buttton>
<button onmouseenter="hello()">mouse hover</button>
<button onmouseout="hello()">mouse out</button>
<button onmousedown="hello()"> mouse down</button> 
<button onmouseup="hello()">mouse up</button>
<button onkeypress="hello()">key press</button>
<button onkeyup="hello()">key up</button>
</body>
```
## the and
