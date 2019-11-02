<script>
var N=5;
var users= [2,1,2,6,2,4,3,3];
var tempUser= [];
document.write(solution(N,users));

function solution(N,users){
	//number of player of each stage
	for(var i = 0; i < N; i++){
		tempUser[i]=0;
		for(var j = 0; j < users.length; j++){
			if(users[j]==i+1){
				tempUser[i]+=1;
			}
		}	
	}

	//failure rate
	var a = users.length;
	var answer= [];
	for(var j = 0; j < tempUser.length; j++){
		answer.push(j+1);
		var b=tempUser[j];
		tempUser[j]=b/a;
		a=a-b;		
	}

	//descending
	for(var i = tempUser.length; i >= 0 ; i--){
		for(var j = tempUser.length-1; j >= 0 ; j--){
			if (tempUser[j]>tempUser[i]){
				var temp1 = tempUser[i];
				tempUser[i]=tempUser[j];
				tempUser[j]=temp1;
				
				var temp2 = answer[i];
				answer[i]=answer[j];
				answer[j]=temp2;
			}
		}
	}
	return answer;
}
</script>