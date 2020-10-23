---
title: Hacked Together Flight Yoke - Part 1
date: 2020-10-23T07:00:43.520Z
description: Too Much CAD
hero: /assets/images/3dprinter.jpg
---
# Gear Testing

I 3D printed a few test gears to see what makes sense to use for this project. Spur gears are simple, but a bit rough. I was surprised by how well my printer printed the [herringbone](https://en.wikipedia.org/wiki/Herringbone_gear) gears. To be honest, it's such a cheap printer I thought it would be too much overhang with a 45 degree tooth angle.

The herringbone gears were significantly smoother, and since my printer could do it, that seemed like the best option.

## Gearbox

After plugging in the joystick innards and looking at the raw output, I learned that the microcontroller is indeed clamping it to something far less than the physical range. I measured it and it was about 50 degrees, so with that and the herringbone choice, I redesigned the gearbox. I also modeled a frame with some slots for bearings. I chose to use 8mm brass rods, since they should fit the bearings and are easy-ish to cut.

[Here](https://streamable.com/f1mli4)'s a fun little exploded view animation.

I also designed a little linkage to the potentiometers, modeled them, and made a little carriage, that's actually feasible this time.

<lazy-image src="nearly-complete-design.png"></lazy-image>

## Carriage

For the carriage, I extruded some tabs that should (in theory) fit into an aluminum C channel that Home Depot sells. We'll see about that theory. I'm also not sure that it will be strong enough.

On the ends of these C channels, I made a silly little adapter that will in theory hold the linear bearing. This probably will take most of the stress of this whole design, so I probably need to print it with high infill, or maybe redesign it a bit beefier.

Lastly, I imported some of the stuff I already modeled, and made some brackets to hold the roll axis.

## Next Steps
1. I need some plastic to hold the potentiometers. I messed with a few designs, but wasn't happy with any.
2. The brackets for the roll axis interfere with the brass rods, so I need to either make the gearbox longer, or cut out a channel for the brass rod to sit in.
3. I'm concerned about a big wooden yoke sitting on the front of a 300mm rod creating a big moment on weak 3D printed parts. I'm considering putting a counterweight on the other end of the carriage.
4. The roll axis needs stops so it's not easy to break the potentiometer while vigorously doing barrel rolls.
5. I need to figure out a way to secure the roll rod so it can't slide in and out of the bearings. I'm not interested in drilling hardened steel, so for the main yoke shaft I need to use either another material, or use a collar and set screw, or something comparable.
6. I'm thinking of using some small (maybe M4) machine screws to hold some of these 3D printed parts to the aluminum channel a bit more securely.
7. It'd be good to go through this design and add tasteful chamfers and fillets where necessary.
8. Print a few gears and see where we're at!
