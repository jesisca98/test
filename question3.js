<script>
var relation=[["100","ryan","music","2"],["200","apeach","math","2"],["300","tube","computer","3"],
["400","con","computer","4"],["500","muzi","music","3"],["600","apeach","music","2"]];

//limit row
relation=relation.slice(0,20);

var pk = [];
var candidate=[];
document.write(solution(relation));

function check(a,b){
	for(var i = 0; i < a; i++){
		var rslt=1;
		for(var j = 0; j < b.length-1; j++){
			for(var k = j+1; k < b.length; k++){
				if(b[j][i]==b[k][i]){
					rslt=0;		
					break;
				}
			}
			if(rslt==0){ break; }
		}
		if(rslt!=0){
			pk.push(1);
		}else{
			pk.push(0);
		}
	}
}

function solution(relation){
	//limit the column
	relation[0]=relation[0].slice(0,8);

	//check primary key
	var row = relation[0].length;
	check(row,relation);

	//initialization candidate length
	for(var j = 0; j < relation.length; j++){
		candidate.push([]);
	}
	
	//input candidate key
	for(var i = 0; i < row; i++){
		while(pk[i]==1){
			i+=1;
		}
		for(var k = i+1; k < row; k++){
			while(pk[k]==1){
				k+=1;
			}
			var a=0;
			for(var j = 0; j < relation.length; j++){
				candidate[a].push(relation[j][i]+relation[j][k]);
				a+=1;
			}
		}
	}

	//check created candidate key
	check(candidate[0].length,candidate);
	
	//answer
	var answer = 0;
	for(var i = 0; i < pk.length; i++){
		answer+=pk[i];
	}
	return answer;
}

</script>