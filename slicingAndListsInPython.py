#iterating through a file
# log_file = open("myfile.txt")

# for line in log_file:
#     print(line)

#some lists
order_numbers = [4108, 4102, 4114]

ingredients = ["mozzarella", "basil", "tomatoes"]

stuff = [1, None, "pretzel", [1, 2], "pretzel"]   

animals = ["aardvark", "bear", "cow"]
#             0           1       2
#             -3          -2      -1
#getting the number of elements in a list
# print(len(animals))

#checking if the list contains a particular value
# print("cow" in animals)
# print("deer" in animals)
animals = ["aardvark", "bear", "cow"]
#indexing into a list
# print(animals[0])
# print(animals[1])
# #negative indexing into a list
# print(animals[-1])
# print(animals[-2])

# #reassigning a value in a list
# animals[1] = "baboon"
# print(animals)

#unpacking lists
# a1, a2, a3 = animals
# print(f"The value of a1 is {a1}")
# print(a2)
# print(a3)

#adding items to a list
# animals.append("deer")
# animals.append(["frog", "gerbil"])

# print(animals)

animals.extend(["frog", "gerbil"])

# print(animals)

# animals = ["aardvark", "bear", "cow"]
# animals.extend(["frog", "gerbil"])
# print(animals)

# animals = ["aardvark", "bear", "cow"]
# animals.extend("hamster")
# print(animals)

# #removing items from a list
# #comment out previous 3 lines before running this
# print(animals)
# print(animals.pop())
# print(animals)

# print(animals.pop(0))
# print(animals)

# del animals
# print(animals)

# animals.append("cow")
# print(animals)
# animals.remove("cow")
# print(animals)

#sorting
# fruits = ["cherry", "pear", "lychee", "durian", "berry", "apple"]
# fruits.sort()
# print(fruits)

# veggies = ["artichoke", "romanesco", "kale", "yam", "cauliflower", "beet"]
# sorted_veggies = sorted(veggies)

# print("this is the type")
# print(type(sorted_veggies))
# reversed_list = reversed(sorted_veggies)

# print(list(reversed_list))
# print("this is the type")
# print(type(reversed_list))
# # sorted(veggies)
# print(sorted_veggies)
# print(veggies)

# animals = ["zebra", "giraffe", "aardvark", "bear", "puma", "cow"]
# animals = animals.sort()
# print(animals)

# animals.sort()
# print(animals)
# new_animals_list = sorted(animals)

# #slice time

# nums = [10, 20, 30, 40, 50, 60]
# #        0   1   2   3   4   5
# #        -6  -5 -4  -3   -2 -1

# print(nums[3:1:-1])
# print(nums[::-1])
# print(nums[3:5])
# print(nums[3:])
# print(nums[:2])
# print(nums[0:4:2])
# print(nums[::2])
# print(nums[-5:4])
# #this will error
# print(nums[99])
# #this will not error
# print(nums[99:])

# print(nums[-2:])
# print(nums[:-2])


# #list slice assignment
# animals = ["aardvark", "bear", "cow"]
# animals[1:3] = ["moose"]
# print(animals)

# animals = ["aardvark", "bear", "cow", "deer"]
# animals[1:-1] = []
# print(animals)

# #iterating
# yay = ["kittens", "tea", "tiny ice cream cones"]

# for idx in range(len(yay)):
#     print("I love", yay[idx])
# for adorable in yay:
#     print("I love", adorable)

# #this will error
# for number in 5:
#     print(f"{number} is my favorite number")

# for number in range(5):
#     print(f"{number} is my favorite number")

# print(list(range(5)))

# print(list(range(2, 8)))
# print(list(range(2, 8, 2)))
# print(list(range(5, 0, -1)))

# #more loops
fruits = ["cherry", "pear", "lychee", "durian", "berry", "apple", ["grape"]]
# for fruit in fruits:
#     print(fruit)

# for i in range(len(fruits)):
#     print(f"fruit #{i} is {fruits[i]}")

for i, fruit in enumerate(fruits):
    print(i)
    print(f"i is a {type(i)}")
    print(fruit)
    print(f"fruit is a {type(fruit)}")

# #giving enumerate one variable name
for skjhdfgfgfxdsdjci in enumerate(fruits):
    print(skjhdfgfgfxdsdjci)
