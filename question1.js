<script>
var record= ["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"];
document.write(solution(record));

//make limit char at ID and Username
for(var i = 0; i < record.length; i++){
	var temp = record[i].split(" ");
	temp[1]= temp[1].slice(0,10);
	if (temp[2]!=null){
		temp[2]= temp[2].slice(0,10);
	}
	record[i]=temp.join(" ");
}

function cek(a, b){
	for(var j = 0; j < a.length-1; j++){
		var temp = a[j].split(" ");
		if(b[1]==temp[1]){
			temp = temp.join(" ").replace(temp[2],b[2]);
			a[j]=temp;			
		}
	}
}

function solution(record){
	var tempRec =[];
	var answer= [];
	for(var i = 0; i < record.length; i++){
		var act = record[i].split(" ");
		
		//check if Enter
		if(act[0].toLowerCase()=="enter"){
			tempRec.push(record[i]);
			cek(tempRec,act);
		}
		
		//Check if Change Nickname
		if(act[0].toLowerCase()=="change"){
			var skip=1;
			//check already enter or haven't
			for(var j = tempRec.length-1; j >0 ; j--){
				temp=tempRec[j].split(" ");
				if(temp[1]==act[1]){
					
					if(temp[0].toLowerCase()=="enter"){
						skip=0;
						break;
					}
				}
			}
			if(skip==0){
				cek(tempRec,act);
			}else{
				tempRec.push(act[1]+" login first!!!");
			}
			
		}
		
		//Check if Leave Chat
		if(act[0].toLowerCase()=="leave"){
			var skip=1;
			//check already enter or haven't
			for(var j = 0; j < tempRec.length; j++){
				temp=tempRec[j].split(" ");
				if(temp[1]==act[1]){
					skip=0;
					break;
				}
			}
			if(skip==0){
				tempRec.push(record[i]+" "+temp[2]);
			}else{
				tempRec.push(act[1]+" havent login");
			}
		}
	}
	
	//answer
	for(var i = 0; i < tempRec.length; i++){
	act = tempRec[i].split(" ");
	if(act[0].toLowerCase()=="enter"){
		answer.push(act[2]+" came in.");
	}
	else if(act[0].toLowerCase()=="leave"){
		answer.push(act[2]+" has left.");
	}else{
		answer.push(tempRec[i]);
	}
	}

	return answer;
}

</script>