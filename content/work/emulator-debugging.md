+++
title = "Debugging and snapshots for a PowerPC emulator"
description = "Built a GDB stub so developers could debug programs inside a PowerPC emulator, then led three developers to add snapshots that skip hour-long startups."
weight = 2

[extra]
abstract = "No debugger could attach to programs running in a PowerPC emulator, and every session began with an hour-long startup. I built a GDB stub so developers could debug those programs with GDB, then led three developers to add one-file snapshots. The stub became a daily tool, and by our estimate snapshots saved hundreds of hours."
keywords = "GDB remote protocol, emulation, PowerPC, snapshots, developer tooling"
+++

## Problem

Developers on the team ran programs inside a PowerPC emulator. Two things slowed them down.

First, no debugger could attach to a program running in the emulator. Second, every session started over: getting a program back to the state you needed took an hour-long startup, and any progress was lost when the session ended.

## Approach

**Remote debugging.** I built a GDB stub for the emulator. It listens on a TCP port and speaks the GDB remote protocol, the same protocol GDB uses to debug programs on embedded boards. A developer points GDB at that port and debugs the program inside the emulator like any remote target.

**Snapshots.** I then led three developers to design and build snapshot and restore. A snapshot only works if it is complete, so it has to hold every device, not just the processor and memory. Ours saves the emulated program and all of its devices in a single file. Restoring that file puts the whole system back where it was, with no startup. I also wrote the user documentation for the feature.

## Result

The GDB stub became part of developers' daily workflow. Snapshots removed the hour-long startup and kept progress between sessions. By our estimate, they saved hundreds of hours.

Table 1: A working session, before and after.

| Task                     | Before            | After            |
|:-------------------------|:------------------|:-----------------|
| Debug a program          | No debugger       | GDB over TCP     |
| Return to a saved state  | Hour-long startup | Restore one file |
| End a session            | Progress lost     | Progress saved   |
