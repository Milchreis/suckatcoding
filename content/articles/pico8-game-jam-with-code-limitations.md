---
title: Creating a game with max. 1KB in Pico-8
description: I joined my first game jam and it was funny and tricky. A playable game included.
img: https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80
alt: retro consoles
author: 
  name: Nick
  bio: In my younger years I grew up with several GameBoys and a Sega Mega Drive. Today, I still really like the retro stuff.
  img: https://avatars1.githubusercontent.com/u/544436?s=460&u=f229b588fbb1b79aab2ab6f029cec5e6e7909af1&v=4
tags: 
  - Pico8
createdAt: 2022-10-10
---

## TL;DR

> For the Pico1k Game Jam I developed a small game in pico-8, which needs only 1024 compressed bytes. There were some challenges, but also a lot of fun.  <a href="#-the-game-and-some-links">Here is the game 🎮</a>

## 🕹️ What is pico-8?

You don't know whats pico-8 is? How dare you 😉 ... No, problem here is the catch-phrase from the [homepage](https://www.lexaloffle.com/pico-8.php).

<img src="https://www.lexaloffle.com/gfx/pico8_logo_vector.png" style="margin: auto; background-color:#263238; border-radius:8px; padding:1.5em;" />

> PICO-8 is a fantasy console for making, sharing and playing tiny games and other computer programs. It feels like a regular console, but runs on Windows / Mac / Linux. When you turn it on, the machine greets you with a commandline, a suite of cartridge creation tools, and an online cartridge browser called SPLORE. 

If this is new to you, then I highly recommend trying out the games on the website. The games are free and some of them are in astonishingly good quality. For research and teaching purposes, there is now even a [free version online](https://www.pico-8-edu.com/). With this you can jump right in and try everything. Otherwise, a license is required for development, which costs a one-time fee of 10-15 dollars.

## ⚔️ The game jam

By chance I stumbled across a tweet about the [Pico1k-jam](https://itch.io/jam/pico-1k-2022). I found the concept very interesting: develop a game, demo or tool with a maximum of 1024 bytes in one month. Also, I found the logo pretty cool 😂

<img src="https://img.itch.zone/aW1hZ2UyL2phbS8zMjM5MTkvOTY1OTE5Mi5wbmc=/original/J2AEEl.png" style="margin: auto; width: 400px;" />

I read through the rule and was surprised. There is no set theme, no winner and no prizes. Instead, it's much more about building something for yourself, getting by with the code length limit, and sharing your progress with others via Twitter and the like. I also really liked this very informal approach.

September began and it was time to start.

## ✒️ The game concept

Fortunately, I did not have to think long and I quickly came up with an idea what could be developed. Some years ago I played the game ["Osmos"](http://osmos-game.com/). The basic idea was to survive as a cell. Smaller cells could be eaten or absorbed and bigger cells had to be avoided, because they would resorb you. Maybe you know this little indie game.

<img src="/articles/osmos.png" style="margin: auto; border-radius:8px; width: 400px;" />

The gameplay is simple and the game doesn't require complex graphics, because sprites are not allowed in this jam. I was only a bit afraid of the spongy controls. After all, I have to imitate the somewhat sluggish behavior of a cell.

There wasn't much more preparation or thinking to do, really. So now the fun could begin 😎

## 🎮 The beginning

After a few hours, the first playable version was ready. Randomly, a few enemies were spread  on the map. To get something moving, all cells moved rigidly to the bottom left or right of the screen. The enemies themselves were only circles in different sizes. Everything was quite simple. The player (a blue circle) had to be equipped with the dreaded controls. After a bit of research and trial and error, that was done and it wasn't that bad actually 😊 

For all interested here is the code:
```lua
function move(i)
  -- i.v[1] is x-velocity of the cell i
  -- i.v[2] is y-velocity of the cell i
  -- the velocity is increased or decreased by the direction and speed
  -- the *.98 decreased the velocity in each frame to let the cell slip without any key press
	i.v[1]=(i.v[1]+i.d[1]*i.s)*.98
	i.v[2]=(i.v[2]+i.d[2]*i.s)*.98
  -- update the position by the velocity
	i.x+=i.v[1]
	i.y+=i.v[2]
end
```

However, during test play it quickly became clear how boring the game was in this state. Therefore, I decided to color a few of the enemies red. These enemies must not be touched, because regardless of the size you will always be resorbed. Then quickly added the change of size and then the whole thing already looks like this:

<video autoplay loop style="margin: auto; border-radius:8px;" width="320" height="240" type="video/mp4">
 <source src="https://video.twimg.com/tweet_video/Fb3jYZ1XgAEKBiL.mp4" >
</video>

Unfortunately, it was still a bit boring. On top of that, the game already required 960 bytes. That's when I realized for the first time what the real challenge in this jam was. But anyway, for now it was time to continue. After all, the cells haven't really moved dangerously yet and I still had some ideas...

## ⚙️ The improvements

In the meantime, there were a few things on the list. I skillfully ignored the pursuit movement of the opponents for the time being. It was much more exciting to open the boundary of the map. I wanted to be able to literally move beyond the edge with the cell. To do this, the spawn area of the enemies had to be enlarged and a camera tracking of the player had to be integrated. Fortunately, both of these were quite simple. For the camera tracking I found a very helpful code snippet in the pico board.

```lua
-- calculate the camera position by player p and the map dimension w and h with some padding
cam_x=mid(p.x-64, w-128)
cam_y=mid(p.y-64, h-128)
-- set the new camera position
camera(cmx,cmy)
```

In the meantime I learned that the code limit for a kilobyte no longer refers to the source code, but to the compressed bytes in the cardrigde. Pico-8 can display these directly in the editor. This info was like a little Christmas for me, because it made more code possible. So with a state of 699 bytes I had much more room for improvement. 

I was so happy that I jumped right into the cosmetic things afterwards:
  * Small static particles in the background for a better feeling when moving.
  * Different fill effects and customized colors for the cells
  * Effect when accelerating the player

As required by the Jam, the current status was announced with the appropriate hashtags on Twitter.

<blockquote class="twitter-tweet" data-dnt="true"><p lang="en" dir="ltr"><a href="https://twitter.com/hashtag/pico1k?src=hash&amp;ref_src=twsrc%5Etfw">#pico1k</a> update: more variety and a much bigger space to move. only 54 compressed bytes left and so many ideas 😅<a href="https://twitter.com/hashtag/pico8?src=hash&amp;ref_src=twsrc%5Etfw">#pico8</a> <a href="https://t.co/HKXTzNFMZJ">pic.twitter.com/HKXTzNFMZJ</a></p>&mdash; Nick (@milchreisjunkie) <a href="https://twitter.com/milchreisjunkie/status/1567930793153921031?ref_src=twsrc%5Etfw">September 8, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 

## 💎 The polish 

One of the most beautiful tasks in game development is the fine tuning. I think it's great how much you can get out of a game with small things. Well, and this game still had a lot of potential 😁

The first thing I took care of was tracking the generic cells. In a previous game with P5js ([Flashy on Github](https://github.com/Milchreis/Flashy)) I already implemented a steering behavior. This I actually had to translate into Lua.

```lua
-- for each enemy
for t in all(e) do
  -- if it is not a white one (it has to be a red one)
  if t.c!=6 then
    -- calculate the distance to player
    d=dst(t,p)
    -- update the direction vector:
    -- x-direction: x-distance divided by distance
    -- y-direction: y-distance divided by distance
    t.d={(p.x-t.x)/d,(p.y-t.y)/d}
  end
  -- ...
end
```

In principle, the direction vector of the cell is reoriented to the players position in each frame. This causes the cell to track the player.

Next, I added a little camera shake that is triggered fairly subtly upon contact with an enemy cell. This gives you much better feedback that something is happening. 
The implementation of this is cakewalk. As long as there is contact between the cells, the camera receives a random offset:

```lua
camera(cam_x+rnd(3), cam_y+rnd(3))
```

To increase the replay value a bit, I added a highscore. It is displayed at the end of a run and shows how old the cell has become. I also saw in the links to the jam that it is possible to create [sounds via commands](https://www.lexaloffle.com/dl/docs/pico-8_manual.html#Audio_). I had to have that too, so I did some digging through the pico-8 documentation. Unfortunately I didn't really get along with it. So in the end it was only enough for a few simple sounds.

At this point the game was actually finished. But I still had a few bytes left and somehow I wasn't satisfied with the acceleration animation. So I experimented a bit. Well, that's how I came up with one of the most visually beautiful features of the game: the trails.

![screencast](https://user-images.githubusercontent.com/544436/189496187-091f3262-a6a4-4e5e-9d23-74f55272b5ec.gif)

This is basically just a few noted position points that get smaller as time goes on. The effect only really came out when I replaced the fill with a pattern. A bit of optimization was necessary, though, because otherwise pico-8 started to shutter.

```lua
function move(i)
  -- add a latest position only if the cell is near and it has less than 50 elements
  -- moreover the position will added only in each 8.-frame (this is a hack: each frame has
  -- mem-issues and less frames the trail is interupted)
	if(dst(i,p)<200 and #i.t<50 and f%8==0) add(i.t,{x=i.x,y=i.y,r=i.r})
	
  -- known movment code from capter '🎮 The beginning'
  -- ...
end

function trace(o,c,s)
  -- for each latest position
	for l in all(o.t) do
    -- decrease the radius (s has to be smaller than 1)
		l.r*=s
    -- fill pattern
		fillp(░)
		circfill(l.x,l.y,l.r,c)
		-- delete latest position if the radius is to small
    -- and yes ... lua can delete an element while the loop 😉
    if(l.r<=1) del(o.t,l)
	end
end
```

At this point, everything I had planned was implemented. The game also made a good impression. Unfortunately I was already over the limit of 1024 bytes. Since I didn't want to cut any features I had to optimize the code.

## ✂️ The shrink

As a JavaScript developer, the first task was quite clear: find a minifier. Kindly, [Paul Hammond](https://twitter.com/paulhamx) provided his [minifier at itch.io](https://pahammond.itch.io/gem-minify).
So I packed the code into the tool and got a much shorter and unreadable version. Unfortunately, this shrinkage still wasn't enough. I was still over the 1024 byte limit. Once again, the material from the Jam helped me out. There was a really [great article](https://gist.github.com/kometbomb/7ab11b8383d3ac94cbfe1be5fb859785) there about making pico-8 code shorter. I'll briefly summarize which steps helped me well:

 * Check if constants like 1000 are not sufficient with 999
 * Check if really 3 decimal places are needed or if not 2 are enough
 * Write decimal values between 0 and 1 without leading 0 (e.g. 0.123 -> .123)
 * Some spaces can be omitted in IF statements in Lua (`if(_b(i,p)<200and#i.t<50and f%8==0)add(i.t,{x=i.x,y=i.y,r=i.r})`)
 * Use short variable and function names
 * Unknown fill patterns are interpreted as complete fill (fillp(nil) -> no pattern)
    * This saved me one character for the possible patterns and access simply went beyond the array size. Of course this only works because Lua allows this.

The joy was very big when I finally reached the limit of 1024 bytes after some optimizations.

![byte count](/articles/compressed_bytes_pico1k2022.png)


## 🎊 The game and some links

Lexaloffle also provides an HTML5 interpreter for pico-8 games, you can now play the game directly in the browser:

<iframe src="https://www.lexaloffle.com/bbs/widget.php?pid=absorb" allowfullscreen width="621" height="530" style=" margin: auto; margin-bottom: 10px; border:none; overflow:hidden"></iframe>

Here you can find a few more links, if the article was not enough for you 😉

 * [complete source code](https://github.com/Milchreis/pico8-1k-jam/blob/main/2022-09-absorb.p8)
 * [minified source code](https://github.com/Milchreis/pico8-1k-jam/blob/main/2022-09-absorb.min.p8)
 * [itch page (with binaries)](https://milchreiz.itch.io/absorb)