Procedures:
A procedure is a named block of code that performs a specific task, but does not return a value. The procedure can be called by another part of the program. 

Eg:
```py
def display_menu():
    print("1: Log in")
    print("2: Sign up")
    print("9: Quit")
```

Functions:
A function is a named block of code that has the purpose of returning a value (called the 'return value'). Like a procedure, a function can be called by another part of the program.
```py
def calculate_area(length):
    area = length * length
    return area

def main():
    length = 12
    result = calculate_area(length)
    print(result)
```

