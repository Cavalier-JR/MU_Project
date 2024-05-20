# from datetime import datetime, timedelta

# # 初始日期列表
# dates = ['4.1', '4.8', '4.15', '4.22', '5.6', '5.13', '5.20']

# # 将字符串日期转换为datetime对象
# date_objects = [datetime.strptime(date, "%m.%d") for date in dates]

# # 获取最后一个日期对象
# last_date = date_objects[-1]

# # 生成新的日期列表
# new_dates = []
# for i in range(7):
#     new_date = last_date + timedelta(days=7)
#     new_dates.append(new_date.strftime("%m.%d"))
#     last_date = new_date

# # 合并旧日期和新日期
# full_dates = dates + new_dates

# print(full_dates)



import random

# 生成14个范围从80到90的随机数
random_numbers = [random.randint(80, 100) for _ in range(14)]

print(random_numbers)