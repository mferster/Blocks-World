# Blocks-World
I parse a series of commands that instruct a robot arm how to manipulate blocks that lie on a flat table. Initially there are always n blocks on the table, laid flat and numbered from 0 to n-1.


0
1
2
3
4
5
6
7
...
n-1
 
The commands for the robot arm that manipulates blocks take this form:
MOVE a ONTO b
Where a and b are block numbers. This puts block a onto block b after “clearing” any blocks that are stacked on top of blocks a and b to their initial positions.
Any command in which a = b or in which a and b are in the same stack of blocks is an illegal command. All illegal commands should be ignored and should have no effect on the configuration of blocks. You may also ignore the scenario in which a block that needs to be cleared to its initial position would get in the way of either the source or the target.

Example:
TABLE STATE BEFORE:
0
1
2
3
4
5
6
7
...
n-1

COMMAND>>> MOVE 4 ONTO 1
TABLE STATE AFTER:

4
0
1
2
3
5
6
7
...
n-1

Another Example, with “Clearing”:
TABLE STATE BEFORE:
3
6
8
4
1
2
9
7
5
0

COMMAND>>> MOVE 4 ONTO 1
TABLE STATE AFTER MOVE:
4
3
1
2
9
7
5
0
6
8

Note how 3, 6, and 8 were slotted at the top of the stacks in their original table positions. Then 4 was dropped on top of 1.
Run this sequence of commands for a blocks world of size 10:
move 1 onto 2
move 5 onto 1
move 9 onto 5
move 8 onto 9
move 6 onto 1
move 2 onto 4
Print some representation of the state of the world at the end, and share your code for getting there. We just want to see clean & readable code with this; it is not an algorithmic runtime question.
