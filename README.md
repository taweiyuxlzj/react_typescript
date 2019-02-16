符#目录结构#  
dist **打包后存放文件目录**  
node_modules **项目运行所需要的nodejs模块**  
src **代码目录**  
  components **组件**  
index.html **启动html**  
package.json **项目包和基础配置**  
README.md  **项目文件了解信息**  
tsconfig.json **Typescript配置**  
webpack.common.config.js **webpack通用配置js**  
webpack.dev.config.js **webpack开发环境下配置js**  
  
  
#命令执行顺序#  
**创建并进入项目**  
mkdir demo && cd demo    

**初始化项目**  
npm init  

**安装webpack和webpack-dev-server(全局安装过的忽略)**  
npm i -D webpack@3.6.0   

**安装React和Types中的React声明文件,@types开头的包都是typescript声明文件，可以进入node_modules/@types/XX/index.d.ts**  
**[声明文件的具体介绍](https://github.com/DefinitelyTyped/DefinitelyTyped)**  
npm i --S react@15.5.4 react-dom@15.5.4 @types/react@15.6.0 @types/react-dom@15.5.0  

**安装TypeScript,ts-loader和source-map-loader**  
**source-map-loader使用任意来自Typescript的sourcemap输出，以此通知webpack何时生成自己的sourcemaps。 这让你在调试最终生成的文件时就好像在调试TypeScript源码一样。**
npm i -D typescript@2.5.3 ts-loader@2.3.7 source-map-loader@0.2.2

#添加TypeScript配置文件
**根目录创建**
```json 
{
  "compilerOptions": {
    "outDir": "./dist/",
    "sourceMap": true,
    "noImplicitAny": true,
    "module": "commonjs",
    "target": "es5",
    "jsx": "react"
  },
  "include": [
    "./src/**/*"
  ]
}
```
**进行安装热更新**
npm i -D webpack-dev-server@2.9.1

#相关错误提示
**NPM 出现提示警告,npm audit fix 检查只更新pkglock,不更新modules**
npm audit fix
**强制检查,并且更新漏洞**
npm audit fix --force

**出现错误 not models webpack问题**
npm link webpack

**常用的typescript配置**
*outDir：输出目录。*
*sourceMap：把 ts 文件编译成 js 文件的时候，同时生成对应的sourceMap文件。*
*noImplicitAny：如果为true的话，TypeScript 编译器无法推断出类型时，它仍然会生成 JavaScript 文件，但是它也会报告一个错误。为了找到错误还是设置为true比较好。*
*module：代码规范，也可以选amd。*
*target：转换成es5*
*jsx：TypeScript具有三种JSX模式：preserve，react和react-native。 这些模式只在代码生成阶段起作用 - 类型检查并不受影响。 在preserve模式下生成代码中会保留JSX以供后续的转换操作使用（比如：Babel）。另外，输出文件会带有.jsx扩展名。 react模式会生成React.createElement，在使用前不需要再进行转换操作了，输出文件的扩展名为.js。 react-native相当于preserve，它也保留了所有的JSX，但是输出文件的扩*展*名是.js。我们这里因为不会用babel再转，所以用react就行。*
*include：需要编译的目录。*


#对于配置webpack#
由于我们需要配置的是开发环境,所以对应的webpack.config.js文件可以根据需要的环境配置不同的js文件。  
例如现在配置的webpack.common.config.js是针对开发环境

#对于版本迭代更新问题#
**可以使用**
npm-check-updates  
**全局安装**  
npm install npm-check-updates -g 
**检查depedencies中的最新版本**  
npm-check-updates    
**更新dependencies到最新版本**  
ncu -u  
**如果想更新全部depedencies到最新版本（包括当前指定版本范围满足最新版本号)** 
ncu -a  
**由于国内墙问题。 在使用npm-check-updates速度很慢,可使用** 
**将当前NPM检查环境变量设置为CNPM,这个方法只针对当前会话,下次启动不会修改**  
set NPM_CHECK_INSTALLER=cnpm  
**package.json "nc-u":"set NPM_CHECK_INSTALLER=cnpm&& npm-check -u" //执行升级  添加到项目环境中,便于直接升级**  

#结合BootStrap  React开发#
**安装 file-loader url-loader**
npm install file-loader url url-loader --save-dev

#安装Grunt#
npm install -g grunt-cli

#快速删除node_models#
cnpm install rimraf -g
rimraf node_modules
