function getAllZipCodes(){
	client.query('SELECT * FROM ZIP_CODE', (err, res) => {
    if (err) {
        console.error(err);
        return;
    }
	return res;
    console.log('query run successful');
    client.end();
});
}