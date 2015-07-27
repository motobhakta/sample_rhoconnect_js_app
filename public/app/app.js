var callRcController = function(){
	url = Rho.RhoConnectClient.syncServer+ '/app/v1/CustomRoutes/testpost';
	Rho.Network.post({url: url, body: "userName=TestRhoconnect&password=nothing"}, function(data){
		alert(JSON.stringify(data));
	});
}