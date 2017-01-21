﻿$(function () {

    $("#types").change(function () {
        var a = $("#types").val();
        if (a == "透视") {
            $("#head").html("新增透视检查报告单");
        } else if (a == "摄片") {
            $("#head").html("新增摄片检查报告单");
        } else if (a == "造影") {
            $("#head").html("新增造影检查报告单");
        } else {
            $("#head").html("新增检查报告单");
        }
    });

    $("#form1").ajaxForm({
        success: function (msgs) {
            var start = msgs.indexOf(">");
            if (start != -1) {
                var end = msgs.indexOf("<", start + 1);
                if (end != -1) {
                    msgs = msgs.substring(start + 1, end);
                }
            }
            var msg = msgs.split(',');
            alert(msg[0]);
            window.close();
        }
    });
    $("#save").click(function () {
        if ($("#name").val() == "") {
            alert("姓名不能为空！");
            return false;
        }
        if ($("#id_card_number").val() == "") {
            alert("身份证号码不能为空！");
            return false;
        }
        if ($("#ddlCommunity").val() == "") {
            alert("常住地址必须填写到社区、村或者居委会！");
            return false;
        }
        if ($("#phone").val() == "") {
            alert("手机号码不能为空！");
            return false;
        }
        if ($("#sjtime").val() == "") {
            alert("送检日期不能为空！");
            return false;
        }
        if ($("#bgtime").val() == "") {
            alert("报告日期不能为空！");
            return false;
        }
    })
})