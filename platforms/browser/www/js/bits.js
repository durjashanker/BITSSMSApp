		
		function showAlert(msg,dismissfunc,title,btnName){
    navigator.notification.alert(
            msg,  // message
            dismissfunc,         // callback
            title,            // title
            btnName                  // buttonName
        ); 
  }
    function showuNameuPwdAlert() {
        navigator.notification.alert(
            'Username & Password are required !',  // message
             alertDismissed,         // callback
            'User credentials missing',            // title
            'OK'                  // buttonName
        ); 
       }
	   
       function showinvalidCredentials(){
        navigator.notification.alert(
            'Invalid Username !',  // message
             alertDismissed,         // callback
            'User credentials invalid',            // title
            'OK'                  // buttonName
        ); 
       }
	   
       function showExit(){
        navigator.notification.confirm(
            'Will disconnect you from SMS Server',  // message
             onConfirm,         // callback
            'Close BITS-SMS App',            // title
            ['OK','Cancel']                   // buttonName
        ); 
		
        function onConfirm(buttonIndex) {
          //alert('You selected button ' + buttonIndex);  1= Cancel; 2 = Exit
           if(buttonIndex == 1){
            localStorage.setItem("uName",'');
            localStorage.setItem("uType",'');
            localStorage.setItem("uCode",'');
            localStorage.setItem("numDays","0");
            localStorage.setItem("pType","ALL");
            navigator.app.exitApp();
           }
        }
       }
      // alert dialog dismissed
        function alertDismissed() {
            // do something
        }