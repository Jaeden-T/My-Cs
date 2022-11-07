---
sidebar_position: 2
description: Basic print functions
title: Print!
id: python-print
---

The print function prints stuff duh

Just printing plain text:
```py
 print("Hello World")
 ```

 Combining stuff in strings
 ```py
 x = 10
 print("Hello", x)
 ```
 The output would look like "Hello 10"

 or you could use 
 ```py
 x = 10
 print("Hello" + x)
 ```
 The output would look like "Hello10"

 Other useful thing for CS
 Normally python adds \n (stands for new line) at the end of a line and using end='' can force it to add something else.
 `end='`

 EG
 ```py
 print("Hello", "how are you?", end='a')

print("HELLO")
```
does this
```
Hello how are you?aHELLO
```

 and 
 `sep=`

 eg
 ```py
 print("Hello", "how are you?", sep="---")
```
Output:
`Hello---how are you?`