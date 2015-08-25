function usernameValidate() {
  var username = $('#inputUsername').val();
  var arr = username.split('');
  var flag = true;
  console.log(arr[0].charCodeAt());
  arr.forEach(function(val) {
    if (!((val.charCodeAt() >= 48 && val.charCodeAt() <= 57) || (val.charCodeAt() >= 96 && val.charCodeAt() <= 105))) {
      flag = false;
    }
  });
  console.log(flag);
  return flag;
}


$(function() {
  $('#submit').on('click', function() {
    var username = $('#inputUsername').val();
    // var password = $.md5($('#inputPassword').val());
    var password = $('#inputPassword').val();
    if (username === '') {
      $('.label-username').html('用户名不能为空!');
      $('#inputPassword').val('');
      $('.label-username').focus();
    } else if (usernameValidate()) {
      $('.label-username').html('用户名不合法!请重新输入...');
      $('#inputPassword').val('');
      $('#inputUsername').val('');
      $('.label-username').focus();
    } else if (password === '') {
      $('.label-username').html('密码不能为空!');
      $('#inputUsername').val('');
      $('.label-username').focus();
    } else if (password.length < 6 || password.length > 12) {
      $('.label-username').html('用户名或密码错误!请重新输入...');
      $('#inputPassword').val('');
      $('#inputUsername').val('');
      $('.label-username').focus();
    } else {
      $.post('/student-validate', {
        username: username,
        password: password
      }, function(resq) {
        if (resq.obj.status === 200) {
          $.cookie('username', resq.obj.data.stu_num, {
            expires: 1,
            path: '/'
          });
          $.cookie('password', resq.obj.data.stu_pwd, {
            expires: 1,
            path: '/'
          });
          $.cookie('userid', resq.obj.data.stu_id, {
            expires: 1,
            path: '/'
          });
          location.href = "teacher";
        } else {
          $('.label-username').html('用户名或密码错误!请重新输入...');
          $('#inputPassword').val('');
          $('#inputUsername').val('');
          $('.label-username').focus();
        }
      });
    }
  });
});
