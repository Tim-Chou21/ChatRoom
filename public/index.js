var firebase;

document.addEventListener('DOMContentLoaded', function () {
  if (!Notification) {
      alert('Desktop notifications not available in your browser. Try Chromium.');
      return;
  }

  if (Notification.permission !== "granted")
      Notification.requestPermission();
});




$(function(){
 
  var $name = $('#name'),
      $content = $('#content'),
      $btn = $('#btn'),
      $show = $('#show'),
      ms = new Date().getTime();
  var config = {
    apiKey: "AIzaSyB5e45GgZCH0wuDrHHGJPzYyiQenm15DsY",
    authDomain: "chatroom-732a8.firebaseapp.com",
    databaseURL: "https://chatroom-732a8.firebaseio.com",
    projectId: "chatroom-732a8",
    storageBucket: "chatroom-732a8.appspot.com",
    messagingSenderId: "718030489886"
  };
  firebase.initializeApp(config);
  var database = firebase.database().ref();
  
  $btn.on('click',function(){
      write();
      notifyMe();
  });

  $content.on('keydown', function(e){
    if(e.keyCode == 13){
      write();
      notifyMe();
    }
  });
  
  function write(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    if(h<10){
      h = '0'+h;
    }
    if(m<10){
      m = '0' + m;
    }
    if(s<10){
      s = '0' + s;
    }
    var now = h+':'+m+':'+s;
    var postData = {
      name:$('#name').val(),
      content:$('#content').val(),
      time:now,
      id:'id'+ms
    };
    database.push(postData);
    $content.val('');
  }
  
  database.once('value', function(snapshot) {
    $show.html('');
    for(var i in snapshot.val()){
       $show.append('<div><div class="time">'+snapshot.val()[i].time+'</div><div class="name">'+snapshot.val()[i].name+' 說</div><div class="content">'+snapshot.val()[i].content+'</div>');
    }
    $show.scrollTop($show[0].scrollHeight);
  });

  database.limitToLast(1).on('value', function(snapshot) {
    for(var i in snapshot.val()){
       $show.append('<div class="'+snapshot.val()[i].id+'"><div class="time">'+snapshot.val()[i].time+'</div><div class="name">'+snapshot.val()[i].name+' 說</div><div class="content">'+snapshot.val()[i].content+'</div>');
    }
    $show.scrollTop($show[0].scrollHeight);
    $show.find('.id'+ms+' .name').css({
      'float':'right',
      'padding-top':'12px',
      'color':'#fc0'
    });
    $show.find('.id'+ms+' .content').css({
      'float':'right',
      'margin-right':'10px'
    });
    $show.find('.id'+ms+' .time').css({
      'right':'0',
      'color':'#777'
    });
  });
  
  firebase.auth().onAuthStateChanged(function (user) {
    var menu = document.getElementById('dynamic-menu');
    // Check user login
    if (user) {
        menu.innerHTML = "<span class='dropdown-item'>" + user.email + "</span><span class='dropdown-item' id='logout-btn'>Logout</span>";
        /// TODO 5: Complete logout button event
        ///         1. Add a listener to logout button 
        ///         2. Show alert when logout success or error (use "then & catch" syntex)
        var btnLogout = document.getElementById('logout-btn');
        btnLogout.addEventListener('click', e => {
            firebase.auth().signOut().then(function(result){
                alert("success");
            }).catch(function(error){
                alert("error");
            });
        });
    } else {
        // It won't show any post if not login
        menu.innerHTML = "<a class='dropdown-item' href='signin.html'>Login</a>";
        
    }
});

function notifyMe() {
  if (Notification.permission !== "granted")
      Notification.requestPermission();
  else {
      var notification = new Notification('Chatroom', {
          icon: 'warn.png',
          body: "有人傳送了新訊息！",
      });
      notification.onclick = function () {
          window.location.replace('index.html');
      };
  }
}  



});