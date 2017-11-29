const DiscordRPC = require('discord-rpc');
const config = require('./config.json');
const rpc = new DiscordRPC.Client({
	transport: 'ipc'
});
rpc.config = config;

//Creating a start- and endTimestamp for the initial timer
var d1 = new Date ();
var d2 = new Date(d1);
// Adding Epochs to set the timer
d2.setSeconds(d1.getSeconds() + config.Rich_Presence.countdown_start);

//Fancy banner for in the console...
var banner = `______ _                       _           ____________  _____ 
|  _  (_)                     | |          | ___ \\ ___ \\/  __ \\
| | | |_ ___  ___ ___  _ __ __| |  ______  | |_/ / |_/ /| /  \\/
| | | | / __|/ __/ _ \\| '__/ _\` | |______| |    /|  __/ | |    
| |/ /| \\__ \\ (_| (_) | | | (_| |          | |\\ \\| |    | \\__/\\
|___/ |_|___/\\___\\___/|_|  \\__,_|          \\_| \\_\\_|     \\____/
                                                               
                                                               `;


rpc.on('ready', () => {
	console.clear();
	console.log(banner);
	console.log("Setting RPC activity...");

	//TODO Probably add enable/disable options in config.json
	
	//Sets the initial Rich Presence
	rpc.setActivity({
		details: config.Rich_Presence.details,
		state: config.Rich_Presence.state,
		largeImageKey: config.Rich_Presence.file_bannername,
		largeImageText: config.Rich_Presence.bannername,
		smallImageKey: config.Rich_Presence.file_username,
		smallImageText: config.Rich_Presence.username,
		instance: false,
		partySize: 0,
		partyMax: config.Rich_Presence.maxpartysize,
		startTimestamp: d1,
		endTimestamp: d2
	}).then(console.clear(), console.log(banner), console.log(`RPC has been set! If it doesn’t set immediately please wait for it to refresh (if set) or just re-node app.js`)).catch(err => { });
	
	if (config.Rich_Presence.Refresh) {
		// Activity can only be set every 15 seconds
		setInterval(() => {
		//Create random party size every update
		var partysize = Math.floor(Math.random() * (config.Rich_Presence.maxpartysize - 0 + 1)) + 0;
		//Resetting the timer
		var t1 = new Date();
		var t2 = new Date ( t1 );
		t2.setSeconds(t1.getSeconds() + config.Rich_Presence.countdown_start);
		//Setting the activity again with updated values	
		rpc.setActivity({
			details: config.Rich_Presence.details,
			state: config.Rich_Presence.state,
			largeImageKey: config.Rich_Presence.file_bannername,
			largeImageText: config.Rich_Presence.bannername,
			smallImageKey: config.Rich_Presence.file_username,
			smallImageText: config.Rich_Presence.username,
			instance: false,
			partySize: partysize,
			partyMax: config.Rich_Presence.maxpartysize,
			startTimestamp: t1,
			endTimestamp: t2
		}).then(console.clear(), console.log(banner), console.log(`Updated the RPC ${++config.Dont_Touch.updatecounter} time(s)!`)).catch(err => {});
	  }, (config.Rich_Presence.Refresh_time * 1000));
	}
});
rpc.login(config.Client_Id).catch(console.error);