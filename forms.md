# 纯html表单
1.显示表单项
2.校验用户输入
3.提交表单数据

#  模板式变单---FormsModule

> 模板指令:NgForm,NgModel,NgModelGroup
1.ngForm可以用在其他标签上
2.不让angular接管表单ngNoForm

```
#username="ngForm"  //模板本地变量,只能在模板中操作
```

> 简单场景

#  响应式表单---ReactiveFormsModule
> 模板指令：FormControl,FormGroup,FormArray
> FormsGroup是多个FormControl的组合对象
> FormArray是多个FormControl的组合数组

> 第二列需要属性绑定，第三列不需要

名字 | 指令 | 
- | :-: | -: 
FormGroup | formgroup | formGroupName |
FormControl | formControl | formControlName |
FormArray |  | formArrayName |



> 共同点：数据模型，由angular/forms特定的类，FormControl,FormGroup,FormArray等组成，模板式不能访问这些东西


