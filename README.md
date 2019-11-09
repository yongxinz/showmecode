# Talk is cheap. Show me the code.

把平时开发过程中遇到的问题，所使用的解决方案，以及常用的一些公共方法，通过代码方式整理出来，具体请见下面更新过程。

## 2019-11-09 init webapp

前端使用 Vue + Element ui 开发。下载项目之后，安装所需的包。

运行项目：

```
npm run serve
```

## 2019-10-27 init djapi

初始化 Django 代码，具体版本，以及所用到的依赖库都在 requirements.txt 文件中，自行进行安装。

需要注意的是 `djapi/settings` 目录，里面有三个文件，分别解释一下：

1. `settings.py`：创建 Django 项目时自带的文件，不做更改；
2. `base.py`：通用配置都写在这个文件中，因为 Django 自带配置文件中信息较多，用这个文件，可以对自己的配置一目了然，很清晰；
3. `local_.py`：运行项目前，需要将这个文件名字改成 `local.py`，作用是保存本地配置。比如线上环境和本地测试环境数据库不同，可以用此文件来区分；再比如多名研发有多个测试环境，也可以用这个文件来配置自己的测试环境，避免频繁更改。

运行项目：

```python
python manage.py runserver 0.0.0.0:8810
```
