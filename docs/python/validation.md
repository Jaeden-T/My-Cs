---
sidebar_position: 10
description: Using Validation
title: Validation -\_(!-!)_/-
id: python-valid
---

#What is validatton?
"Data validation is when a program checks the data to make sure it meets some rules or restrictions." - study.com


Example issue:
```py
x = input("Input something 6 characters long: ")
print(x)
```

Since there is no if statment to check the length of the string it allows us to input any length
Example:
```sh
Input something 6 characters long: 1000000000
1000000000
```
it allows me to input "1000000000" which is longer then 6 characters.

This is where validaiton comes in to prevent this.
One could use a while length of x does not equal to 6

Example:
```py
x = "" 
while len(x) != 6: #Checks that the length of x does not equal 6
    x = input("Input something 6 characters long: ")


print(x)
```

The result:
```sh
Input something 6 characters long: 1000
Input something 6 characters long: 100000
100000
```
The code only accepts my input when the length of the string is equal to 6 characters