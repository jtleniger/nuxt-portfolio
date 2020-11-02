---
title: Hacked Together Flight Yoke - Part 3
date: 2020-11-02T05:20:16.873Z
description: Parts, Problems, and Perseverance
hero: joystick-electronics.jpg
---
# Parts!

Over the past week I've printed lots of parts (shown above) and ordered a few. The current state of the design is roughly this:

<lazy-image src="design-11-1.png"></lazy-image>

I made some changes, I like some things, and I don't like others.

## Gears

I printed a full set of herringbone gears, gave them a test fit, and they didn't work very well. I didn't add a tolerance along the rotational axis, so with inaccuracies from the 3D printer, there was a lot of friction between the gears.

I couldn't think of a good way to add that tolerance, either, because herringbone gears mate very precisely, and it gets tricky to add it with these compound gears. My solution (frustration growing) was: forget it! I just remade the gears as spur gears with some slop on the smaller part of the compound gear.

I also modeled another gear train for the roll axis. It's geared down so the yoke has about 180 degrees of range, but otherwise is roughly the same design as the first gear train.

Last, I modeled some cutouts for an M3 screw and nut in the final gear in the gear train. I messed this design up a few times and didn't leave enough room to actually get the screw in, which resulted in a few throwaway prints, but I finally got it working.

Here's a test fit of just the pitch gear train:

<lazy-image src="IMG_1831.jpg"></lazy-image>

## Potentiometers

I modeled a nice slot for the potentiometers to sit in, which should be a fairly tight friction fit. Instead of adding a linkage that goes on the end of the axles (red in the screenshot from the [last post](https://justinleniger.com/posts/2020-10-23-hacked-together-flight-yoke-part-2)), I modeled one that fits inside the axle, and used an M3 screw to lock it in place.

<lazy-image src="linkage.png"></lazy-image>

## Mounting

I bought some nice-ish looking wood to mount this ridiculous thing in, and then realized that it's incredibly frustrating to drill square, accurate holes without a drill press. My first plan was to just drill an 8mm hole for the steel rods to sit in, but through a test fit, I learned this was not going to work.

The holes were far enough out of square that the linear bearings binded completely, and their locations on the wood were off enough that both ends couldn't fit at the same time. I filled the holes with some dowel and then slept on it (for a few days).

My next approach, effectiveness TBD, is 3d printing some flanges. I ordered some flexible filament for another part of this design, so for the flanges, I also printed some "bushings", to hopefully allow some tolerance with respect to "squareness" and position. They're the orange parts in the part layout photo.

## Roll Limiter

I'm still not happy with anything I've designed for the roll limiter. It needs something, otherwise it could theoretically damage the potentiometer, but I'm not sure the best way to do it. The pictured current iteration has a collar on the main yoke shaft, and then another part below it that has stops.

I'd like to make some "bumpers" with the flexible filament so the stop is smooth, but I'm not sure how to incorporate that.

## Yoke Shaft

Haven't printed anything for the shaft itself yet either, but I decided on a 15mm alumninum tube. Tube is light, and aluminum is easy to drill, and 15mm bearings are cheap. 

I modeled a collar that can be held in place with an M4 screw and nut to prevent the shaft from slipping out of the bearings:

<lazy-image src="collar.png"></lazy-image>

## Test Fit

Here's a test fit of the parts I've printed or purchased so far:

<lazy-image src="IMG_1833.jpg"></lazy-image>

## Next Steps

1. Figure out whether the "flange" strategy will work for mounting the rods.
2. Print the rack.
3. Print the roll gear train.
4. Settle on a design for the roll limiter.
5. Test fit everything.
6. Figure out something for "returning to center". I think I'll probably just use some weak springs for this, but I'm not sure whether that's the best option or how it will work.
