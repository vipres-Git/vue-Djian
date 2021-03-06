/**
 校验规则
 zhangbin
 zhangbin-dc@139.com
 */

const validator = {
  digits: [/^\d+$/, '请填写数字'],
  letters: [/^[a-z]+$/i, '请填写字母'],
  date: [/^\d{4}-\d{2}-\d{2}$/, '请填写有效的日期，格式:yyyy-mm-dd'],
  time: [/^([01]\d|2[0-3])(:[0-5]\d){1,2}$/, '请填写有效的时间，00:00到23:59之间'],
  email: [/^[\w\+\-]+(\.[\w\+\-]+)*@[a-z\d\-]+(\.[a-z\d\-]+)*\.([a-z]{2,4})$/i, '请填写有效的邮箱'],
  url: [/^(https?|s?ftp):\/\/\S+$/i, '请填写有效的网址'],
  qq: [/^[1-9]\d{4,}$/, '请填写有效的QQ号'],
  idCard: [/^\d{6}(19|2\d)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)?$/, '请填写正确的身份证号码'],
  tel: [/^(?:(?:0\d{2,3}[\- ]?[1-9]\d{6,7})|(?:[48]00[\- ]?[1-9]\d{6}))$/, '请填写有效的电话号码'],
  mobile: [/^1[3-9]\d{9}$/, '请填写有效的手机号'],
  zipCode: [/^\d{6}$/, '请检查邮政编码格式'],
  chinese: [/^[\u0391-\uFFE5]+$/, '请填写中文字符'],
  str2to20: [/^.{2,20}$/, '请填写2-20位字符'],
  str2to50: [/^.{2,50}$/, '请填写2-50位字符'],
  str2to30: [/^.{2,30}$/, '请填写2-30位字符'],
  str16to18: [/^[1-9]{16,18}$/, '请填写16-18位字符'],
  str10to30: [/^[0-9]{10,30}$/, '请填写10-30位字符'],
  taxNum: [/^[A-Za-z0-9]+$/, '请输入正确的纳税人识别号'],
  bankAccount: [/^([1-9]{1})(\d{15}|\d{18})$/, '请填写16到18位数字'],
  letterNum: [/^[0-9a-zA-Z]*$/g, '只能输入字母，数字或字母数字组合'],
  username: [/^[a-zA-Z0-9]{8,20}$/, '请填写8-20位字符，并且包含数字，字母'],
  password: [/^[a-zA-Z0-9]{6,20}$/, '请填写6-20位字符'],
  decimal2: [/^[0-9]+([.]{1}[0-9]{1,2})?$/, '请填写整数，或1-2位小数'],
  carNumber: [/^[A-Za-z0-9]{1}[A-Za-z0-9]{4}[A-Za-z0-9挂学警港澳]{1}$/, '请填写正确的车牌号码'],
  space: [/(\{\s*)/ig, '请勿填写空格'],
  numberSpace:[/^\d+(,\d+)*$/ig,'格式错误']
}

export default validator
