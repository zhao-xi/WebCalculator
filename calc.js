function init() {
	// 初始化数字显示文本框
	var num = document.getElementById("num");
	num.value = 0;
	num.disabled = "disabled"

	// 为按钮添加onclick事件
	var oButton = document.getElementsByTagName("input");
	var btn_num1;
	var fh;
	for(var i = 0; i < oButton.length; i++) {
		oButton[i].onclick = function() {
			if(isNumber(this.value)) {
				num.value = Number(num.value + this.value);
			} else {
				var btn_num = this.value;
				switch(btn_num) {
					case "+":
						btn_num1 = Number(num.value);
						fh = "+";
						num.value = 0;
						break;
					case "-":
						btn_num1 = Number(num.value);
						fh = "-";
						num.value = 0;
						break;
					case "*":
						btn_num1 = Number(num.value);
						fh = "*";
						num.value = 0;
						break;
					case "/":
						btn_num1 = Number(num.value);
						fh = "/";
						num.value = 0;
						break;
					case ".":
						num.value = dec_number(num.value);
						break;
					case "←":
						num.value = back(num.value);
						break;
					case "c":
						num.value = "0";
						break;
					case "+/-":
						num.value = sign(num.value);
						break;
					case "=":
						switch(fh) {
							case "+":
								num.value = btn_num1 + Number(num.value);
								break;
							case "-":
								num.value = btn_num1 - Number(num.value);
								break;
							case "*":
								num.value = btn_num1 * Number(num.value);
								break;
							case "/":
								if(num.value == "0") alert("除数不能为0");
								else num.value = btn_num1 / Number(num.value);
								break;
						}
						break;
				}
			}
		}
	}

	// 初始化g按钮
	document.getElementById("gbtn").onclick = function() {
		window.location.href="https://github.com/zhao-xi/WebCalculator";
	}
}

/* 正负号 */
function sign(n) {
	n = Number(n) * -1;
	return n;
}

/* 退格键 */
function back(n) {
	if(!isNull(n) && n.length > 1) n = n.substr(0, n.length - 1);
	else n = 0;
	return n;
}

/* 处理小数点 */
function dec_number(n) {
	if(n.indexOf(".") == -1) {
		n = n + ".";
	}
	return n;
}

/* 判断文本框是否为0或空 */
function isNull(n) {
	return n == "0" || n.length == 0;
}

/* 判断一个文本是否是数字 */
function isNumber(n) {
	return !isNaN(n);
}