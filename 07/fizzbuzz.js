function fizzbuzz(num){

	var res;
    if((num%3==0)&&(num%5==0))
{
	res='fizzbuzz';
	return(res);
}

	else if(num%5==0)
{
	res='buzz';
	return(res);
}
	else if(num%3==0)
{
	res='fizz';
	return(res);
}


    else{
}
    return(num);

}