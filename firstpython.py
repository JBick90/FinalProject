import math
no_of_subChapters = 91
max_x = no_of_subChapters + 1
value_list = [x for x in range(0,max_x)]
print(value_list)
coeff = 1/(math.fsum(value_list))
print(coeff)
for x in range(max_x):
    value = coeff*(x)
    print(value)

