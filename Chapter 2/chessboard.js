(function() {
	var board_size = 8;
	var acumulator = '';
	for (row_count=1; row_count<=board_size; row_count++) {
		for (column_count=1; column_count<=board_size; column_count++) {
			if (column_count%2==0 && row_count%2==0) {
				acumulator += ' ';
			}
			else if (column_count%2 != 0 && row_count%2==0) {
				acumulator += '#';  
			}
			else if (column_count%2 == 0 && row_count%2!=0) {
				acumulator += '#';
			}
			else if (column_count%2 != 0 && row_count%2!=0) {
				acumulator += ' ';	
			}
		}	 		
		acumulator += '\n'; 	
	}
	console.log(acumulator);
}) ();
