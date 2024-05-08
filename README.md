# 技术使用：Vue 3 + Vite+element-plus

# run
```
npm run dev
```

## 多人协作注意事项

项目开发中，每个开发者都有自己的分支，更新代码时，先拉取master上的代码到自己本地，进行运行，没问题的话，上传自己的代码到master分支上，看是否有冲突，没问题再推送到master分支上.

**保证main分支上的代码是没有bug的**

## 常用命令

```
1.拉去远程仓库的代码
git clone ...

2.拉去分支代码
git pull

3.拉去指定分支的代码
git pull origin 分支名

4.将内容从工作目录添加到暂存区
git add.

5.提交暂存区文件到本地仓库中,[msg]是上传备注信息
git commit -m [msg]

6.提交代码
git push
```



## 把自己子分支推送到远程的main分支

```
//1.克隆远程代码
git clone ...
 
//2.创建自己的子分支
git branch 分支名
 
//3. 切换分支
git checkout 分支名
 
//4.在自己的分支上修改后，操作步骤
    //1.先拉去远程分支的代码
    git pull origin master
 
    //2. 将自己的代码推送到自己的分支
    git add .
    git commit -m ' '
    git push origin 分支名
 
//5.代码运行自己分支没问题的话
    //1.切换到main分支
    git checkout main
 
    //2. 先拉取下
    git pull origin main
 
    //3. 合并分支代码
    git merge 分支名
 
    //4. 提交代码到 main
    git push origin main
 
    //5.切换到自己的分支
    git checkout 分支名
```

git 查看本地分支

```
git branch
```

更改master分支到main
```
git checkout -b main
```
将master分支合并到main
```
git merge master
```

重新拉取
```
git pull origin main --allow-unrelated-histories
```

```
git push origin main
```

