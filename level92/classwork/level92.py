# Alternate capitalization
def capitalize(s):
    even = [s[i].upper() if i % 2 == 0 else s[i] for i in range(len(s))  ]
    odd = [s[i].upper() if i % 2 != 0 else s[i] for i in range(len(s))  ]
    return ["".join(even),"".join(odd)]

# No oddities here
def no_odds(values):
    return [x for x in values if x % 2 == 0]


# Check the exam
def check_exam(arr1, arr2):
    score = 0
    for correct, student in zip(arr1, arr2):
        if student == "":
            continue
        elif student == correct:
            score += 4
        else:
            score -= 1
    return max(score, 0)

# Fix string case
def solve(s):
    upper = sum(1 for c in s if c.isupper())
    lower = sum(1 for c in s if c.islower())
    return s.upper() if upper > lower else s.lower()


# Number of Decimal Digits
def digits(n):
    return len(str(n))

