#Write a program that takes a score (0-100) as input and outputs the grade based on the following rules:
#90-100: A
#80-89: B
#70-79: C
#60-69: D
#Below 60: F

score = int(input("Enter number: "))
if score >= 90 : print("A")
elif score >= 80 : print("B")
elif score >= 70 : print("C")
elif score >= 60 : print("D")
else: print("F")