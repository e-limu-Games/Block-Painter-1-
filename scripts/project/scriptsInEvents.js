


const scriptsInEvents = {

	async Functions_es_Event3_Act1(runtime, localVars)
	{
		window.addEventListener("message", event=>{
			const obj = event.data;
			if(obj && obj.action && obj.payload)
			{
				if(obj.action === "sign_in")
				{
					runtime.globalVars.GameAction = obj.action;
				//alert(runtime.globalVars.GameAction);
				
				runtime.globalVars.GameKey = obj.payload.app_key;
				//alert(runtime.globalVars.GameKey);
				
				runtime.globalVars.UserEmail = obj.payload.user.email;
				//alert(runtime.globalVars.UserEmail);
				
				runtime.globalVars.UserFirstname = obj.payload.user.firstName;
				//alert(runtime.globalVars.UserFirstname);
				
				runtime.globalVars.UserLastname = obj.payload.user.lastName;
				//alert(runtime.globalVars.UserLastname);
				
				runtime.globalVars.Username = obj.payload.user.username;
				//alert(runtime.globalVars.Username);
				}
				
				else if(obj.action === "retrieve_user_data")
				{
					runtime.globalVars.Level = obj.payload.BP_Level;
					runtime.globalVars.Money = obj.payload.BP_Money;
					
				runtime.globalVars.OwnedBuildings_Data = obj.payload.BP_OwnedBuildings_Data;
						
					runtime.globalVars.BuildedBuildings_Data = obj.payload.BP_BuildedBuildings;
				
					if (typeof obj.payload.BP_Level === 'undefined'){
				runtime.globalVars.Level = 1;
				}
				
				if (typeof obj.payload.BP_Money === 'undefined'){
				runtime.globalVars.Money = 0;
				}
				
				if (typeof obj.payload.BP_OwnedBuildings_Data === 'undefined'){
			 runtime.globalVars.OwnedBuildings_Data = ({"c2array":true,"size":[1,1,1],"data":[[[7]]]});}
				 
					if (typeof obj.payload.BP_BuildedBuildings === 'undefined'){
			 runtime.globalVars.BuildedBuildings_Data = ({"c2array":true,"size":[1,3,1],"data":[[["22"],[2],[0]]]});}  
				
					}
			}
		})
	},

	async Functions_es_Event5_Act1(runtime, localVars)
	{
		window.parent.postMessage(
		{
		    "action": "close_app"
		},"*");
	},

	async Functions_es_Event7_Act1(runtime, localVars)
	{
		window.parent.postMessage(
		{
		    "action": "game_loaded",
			"payload": {
				"orientation": "landscape"
			}
		},"*");
	},

	async Functions_es_Event9_Act1(runtime, localVars)
	{
		window.parent.postMessage(
		{
		     "action": "open_game",
		     "payload": {
		         "app_key": localVars.GameToOpen,
		     }
		 },"*");
		//alert("Posted " + localVars.GameToOpen);
	},

	async Functions_es_Event11_Act1(runtime, localVars)
	{
		window.parent.postMessage(
		{
		    "action": "open_activity",
			"payload": {
				"app_key": "block-painter"
			}
		},"*");
		//alert("Posted")
	},

	async Functions_es_Event13_Act1(runtime, localVars)
	{
		window.parent.postMessage(
		{
		    "action": "open_feedback",
			"payload": {
				"app_id": runtime.globalVars.AppId
			}
		},"*");
		//alert("Posted")
	},

	async Functions_es_Event15_Act1(runtime, localVars)
	{
		window.parent.postMessage(
		{
		    "action": "update_user_data",
			"payload": {
				"dataKey": localVars.dataKey,
				"value" : localVars.value
			}
		},"*");
		//alert("Posted")
	},

	async Functions_es_Event17_Act1(runtime, localVars)
	{
		window.parent.postMessage(
		{
		    "action": "update_user_data",
			"payload": {
				"dataKey": localVars.dataKey,
				"value" : localVars.value
			}
		},"*");
		//alert("Posted")
	},

	async Functions_es_Event19_Act1(runtime, localVars)
	{
		window.parent.postMessage(
		{
		    "action": "retrieve_user_data",
			"payload": {
				"app_key": "block-painter"
			}
		},"*");
		//alert("Posted")
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

