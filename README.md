![](media/discordian-logo.png)

![GitHub release (latest SemVer)](https://img.shields.io/badge/dynamic/json?style=for-the-badge&color=6f5dc8&label=Release&query=version&url=https%3A%2F%2Fraw.githubusercontent.com%2Fradekkozak%2Fdiscordian%2Fmaster%2Fpackage.json%3Ftoken%3DAAU6DK7SNRKSVY6LXG7OLS274EOXA)

## beautiful Obsidian dark theme inspired by Discord 

Discordian is a dark theme designed to give all [Obsidian](https://obsidian.md) power users visuals they recognize and appreciate 
when gathering on Discord servers to discuss all things Obsidian. **Seamless Discord experience right back in Obsidian** 
is the keyword here. We, Obsidianites, PKM & Zettelkasten lovers, spend there so much time it's almost logical 
to have the same visual experience extended to our beloved app ([see screenshots](#screenshots))   

Theme, apart from deriving its visuals from Discord app, strives to serve as solid dark theme. An honest default. 
This means it offers an unobtrusive, minimal and easy on the eyes experience with a hint of subtle changes in 
Discord's color palette like muting and pastelizing some colors. Theme uses free fonts that closely resemble those in 
Discord app. **For best experience possible**, please [download the fonts](https://github.com/radekkozak/discordian/raw/master/media/fonts.zip) 
and **install them in your system before using the theme.**

Discordian, of course, fully supports [popular Obsidian's community plugins](#plugin-support) but also has its own 
[Discordian Plugin](https://github.com/radekkozak/discordian-plugin) going on which is very much recommended. 
If you like to have more fine-grained control over some aspects of the theme go ahead and download it. 
You will be so much happier with the **additions of Writer Mode, Paragraph Focus, Flat Andy's Mode**, controllable 
line length and other things.

## Disclaimer

Discordian theme is provided *as is*, meaning it is a product of my own personal experience, and shows the theme as I 
use it in Obsidian app on daily basis within macOS environment. Please bear in mind that even though i did my best to polish it 
enough to be used with the latest version of Obsidian some quirks and visual discrepancies may (or not) occur 
as I had no means of testing it on other platforms. 
  
As this theme modifies many parts of Obsidian UI it's given that it might break some things with future 
app updates or with your own css snippets. However, I do plan to earnestly support it so as Obsidian app 
will progress so it will Discordian theme. I am also open to any [contributions](#contribute) : 
be it a simple suggestion, bug report or your fix via PR.    

## Features and goals

- Easy on the eyes, lean design with focus on clean visuals 
- Promotes writing experience first (Writer's mode, Paragraph Focus Mode as seen in iaWriter and the like).  
- *Keyboard is an Obsidianite's best friend*. As Obsidian's power users we love us some keyboard shortcuts.
- **Settings panel as seen in Discord** (along with fancy toggle switches) 
- [Beautiful task list](#task-lists) - now also in editor's mode !
- **Beautiful graph view** (see [screenshots](#screenshots)) 
- **Seamless transclusions**
- Snappy performance (stripped out most animations) 
- Bullet points relationship lines extravaganza as default
- Graceful dark theme audio (styled) in place of ugly default 
- New and improved **codeblocks with delightful aesthetics**

## Plugin support

- [Sliding Panes](https://github.com/deathau/sliding-panes-obsidian) (aka Andy Mode)
- [Calendar Plugin](https://github.com/liamcain/obsidian-calendar-plugin)
- [Hider Plugin](https://github.com/kepano/obsidian-hider)

## Some additional remarks 

### Hidden things

To provide simple and clean UI that mimics Discord app Discordian theme hides top title bar and status bar as default. 
**You can however enable them and bring them back via accompanying** [Discordian plugin](https://github.com/radekkozak/discordian-plugin) 
(this is preferred way) or if you decide to go solo by commenting appropriate parts of CSS.

I could provide more user-controllable elements for hiding if requested but to not reinvent the wheel i sincerely recommend
excellent [Hider Plugin](https://github.com/kepano/obsidian-hider) by @kepano - i use it myself for simplifying UI
even more. Discordian of course is, as mentioned before, fully compatible with it.

### Task lists

The way the fancy task lists works in editor mode is via quite **hackish** means. Therefore, it's mandatory 
to have `Smart indent list` option enabled in Obsidian. From my own experience I would also recommend having 
`Toggle checklist status` under some hotkey. This would definitely make working with tasks / checklist list a blaze.
I know I love it that way! If needed one can also revert to defaults via plugin.  

## Screenshots

based on [Nick Milo](https://github.com/nickmilo) 's [LYT Kit](https://www.linkingyourthinking.com)

![](media/screenshots/discordian-graph-view.png)

### Discord experience 

![](media/screenshots/discordian-settings.png)

![](media/screenshots/discordian-commands.png)

![](media/screenshots/discordian-tables.png)

![](media/screenshots/discordian-tasks.png)

### Codeblocks

![](media/screenshots/discordian-codeblocks.png)

### Editor in Writer Mode

![](media/screenshots/discordian-editor-mode.png)

### Discordian in Full Mode

![](media/screenshots/discordian-full-mode.png)

### Other

![](media/screenshots/discordian-calendar.png)

![](media/screenshots/discordian-preview-popover.png)

## Contribute

Found some quirks? Want to propose some new functionality? 
You can easily follow these simple steps:

1. [File an issue](https://github.com/radekkozak/discordian/issues/new) discussing proposed changes or found bug
2. If you want to contribute solution on your own please
    - clone this repo
    - `npm i` to install dependencies
    - create `config.json` from `config.json.example` and set it accordingly
    - `npm run dev` to start compilation and development in watch mode
    - do your magic (all relevant css files are in `.theme` directory )
3. Commit your work
    - please run `npm run lint` before to spot any CSS issues 
    - use commit message that best describes changes you've just made. If possible, *link it to relevant issue*  
    - **DO NOT build or commit `obsidian.css` directly** ! It will be autogenerated and handled by CI server.  

Now sip your coffee and wait for my swift response or PR merge. Thanks !

## Credits

Many ideas and css solutions are inspired by or come from an amazing Obsidianites both on 
[Obsidian's Forum](http://forum.obsidian.md/) and Discord channel: @kepano @death_au @nickmilo @tallguyjenks 
to name a few. Thanks to all of you for an amazing shared knowledge and community.  

## License

[MIT License](./LICENSE)