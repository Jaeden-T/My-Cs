
---
sidebar_position: 5
description: Functions!!
title: Functions!
id: python-functions
---
# Arguments:
Information can be passed into functions as arguments.

Arguments are specified after the function name, inside the parentheses. You can add as many arguments as you want, just separate them with a comma.


Example:
```py
Def my_function(fname):
  print(fname + " Refsnes")

my_function("Emil")
my_function("Tobias")
my_function("Linus") 
````

Functions are basically a block of code that can be reused over and over

More examples of usage:
```py
def area(l, w, h):
  area = l * w * h
  return area

length = int(input("Input the length: "))
width = int(input("Input the width: "))
height= int(input("Input the height: "))

print(area(length, width, height))
```

