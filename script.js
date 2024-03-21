//your JS code here. If required.

 document.getElementById('userForm').addEventListener('submit', function(event) {
	 event.preventDefault();
	const age = parseInt(document.getElementById('age').value);
	const name = document.getElementById('name').value;
	 
      if (!name || !age) {
                alert('Please fill in all fields.');
                return;
      }
	 
	const prom = new Promise((resolve,reject) =>{
		setTimeout(() => {
			if(age >= 18){
				resolve(`Welcome, ${name}. You can vote.`);
			}else{
			reject(`Oh sorry ${name}. You aren't old enough.`);
		     }
		},4000);
		
	});

	 prom.then((data) =>{
	     alert(data);
	}).catch((err) => {
		alert(err);
	});
});


