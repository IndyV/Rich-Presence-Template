# Rich Presence JavaScript example
> Template code to use Rich Presence on Discord.

Discord recently added [Rich Presence](https://discordapp.com/developers/docs/rich-presence/best-practices) for game developers but it can also be used by regular users.

![](https://i.imgur.com/p6WUZoi.png)

## Disclaimer
I don't claim to be good at JavaScript and this code is probably not optimized.
Feel free to contribute any optimization.

> Discord Rich Presence itself isn't that stable either so that may affect performance.

## Requirements

- `git` command line ([Windows](https://git-scm.com/download/win)|[Linux](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)|[MacOS](https://git-scm.com/download/mac)) installed
- `node` [Version 8.4.0 or higher](https://nodejs.org)
- [Discord Application](https://discordapp.com/developers/applications/me)

> NOTE: You can't use a VPS for hosting unless you implement it in something like a selfbot.

## Downloading

In a command prompt in your projects folder (wherever that may be) run the following:

`git clone https://github.com/IndyV/Rich-Presence-Template.git`

Once finished: 

- Navigate to your projects folder
- Edit `config.json` and set it to your personal preferences. See [Configuration](#config).


## <a name="config"></a>Configuration

```json
{
    "Client_Id": "See step 5 of Creating your RPC application",

    "Rich_Presence":{
        "details": "[0]",
        "state": "[1]",
        "username": "[2]",
        "file_username": "[3]",
        "bannername": "[4]",
        "file_bannername": "[5]",
        "maxpartysize": [6],
        "countdown_start": [7],
        "Refresh": [8],
        "Refresh_time": [9]
    },
    
    "Dont_Touch":{
        "updatecounter": 0
    }
}
```

0. `String` The text under your Application name.
1. `String` Game state which will be placed on the left of your party information.
2. `String` Text that will appear if mouse hovers over the small icon.
3. `String` Filename of small asset you uploaded to your application. [See step 4 of Creating your RPC application](#createrpc).
4. `String` Text that will appear if mouse hovers over the large icon.
5. `String` Filename of large asset you uploaded to your application. [See step 4 of Creating your RPC application](#createrpc).
6. `Int` Max party size `X` e.g. `(Y of X)` (Y will be randomly generated for now).
7. `Int` Start time of the countdown in [Epochs](https://www.epochconverter.com/).
8. `Bool` If you want the RPC to update or not.
9. `Int` The time in seconds you want it to refresh. ***Must be >= 15***


## <a name="createrpc"></a>Creating your RPC application

0. [Create your application](https://discordapp.com/developers/applications/me).
1. Press **New app**.
2. Give your application an **App Name**. This will also be the main title of your Rich Presence and cannot be changed in config.json.
3. Press **Create App**. Scroll down and press **Enable Rich Presence**. 
> ***DON'T CREATE A BOT USER!***
4. Upload a large and/or small asset and name it to something easy to remember.
5. Copy the Client Id and paste it in `config.json` in `Client_Id`.

> **You can safely share the application ID with others.**

## Starting the Rich Presence

To start the Rich Presence, in the command prompt, run the following command:
`node app.js`

> If it doesn't set immediately please wait for it to refresh (if set) or just re-node `app.js`

If you need help or have questions add `Indy#6602` on Discord.

## Release History

* 0.1.1
    * Improved user friendliness.
    * ADD: `readme.md` for instructions.
    * ADD: `config.json` for the people that don't want to touch the code.
* 0.1.0
    * Custom RPC.
    * CHANGE: `app.js` now has more comments which is good.. I guess.
* 0.0.1
    * Functional performance. Very important.

## Contributing

1. Fork it (https://github.com/IndyV/Rich-Presence-Template/fork)
2. Create your feature branch (`git checkout -b feature/fooBar`).
3. Commit your changes (`git commit -am 'Add some fooBar'`).
4. Push to the branch (`git push origin feature/fooBar`).
5. Create a new Pull Request.

## Contact

Add `Indy#6602` on Discord!

Distributed under the MIT license. See ``LICENSE`` for more information.

## Thanks to

* Jackz#7627
* [devsnek](https://github.com/devsnek)