# Algorithms & Data Structures in JavaScript

> **Target:** Interview preparation + practical development skills
> **Language:** JavaScript (ES6+)
> **Total:** 15 Sections · 72 Lessons · ~350 Issues

---

## 🔹 Section 1: Complexity Analysis & Big O Notation (3 Lessons)

**🎯 Purpose:** Every algorithm decision depends on understanding time/space trade-offs. This section builds the analytical foundation you'll use in every subsequent section.

**🧠 Skills acquired:** Evaluate any code's time and space complexity; compare algorithmic approaches; reason about scalability in real systems.

| # | Lesson | Problems | Focus |
|---|--------|----------|-------|
| 1.1 | Time Complexity & Big O Basics | 5 | Counting operations, O(1)/O(n)/O(n²), loops analysis |
| 1.2 | Space Complexity | 4 | Memory usage, auxiliary vs input space, stack frames |
| 1.3 | Logarithmic & Linearithmic Complexity | 4 | O(log n), O(n log n), recognizing divide-and-conquer patterns |

---

## 🔹 Section 2: Arrays — Fundamentals & Techniques (6 Lessons)

**🎯 Purpose:** Arrays are the most common data structure in interviews and production code. Mastering array manipulation patterns covers ~40% of interview questions.

**🧠 Skills acquired:** Two-pointer technique, sliding window, prefix sums, in-place manipulation, matrix traversal.

| # | Lesson | Problems | Focus |
|---|--------|----------|-------|
| 2.1 | Array Basics & In-Place Operations | 5 | Remove duplicates, rotate, move zeros |
| 2.2 | Two Pointers | 6 | Pair sum, container with most water, three sum |
| 2.3 | Sliding Window | 6 | Max subarray, longest substring, minimum window |
| 2.4 | Prefix Sum & Difference Arrays | 5 | Range sum queries, subarray sum equals K, product of array except self |
| 2.5 | Sorting-Based Array Problems | 5 | Merge intervals, meeting rooms, array intersection |
| 2.6 | Matrix (2D Array) Traversal | 5 | Spiral order, rotate image, search in sorted matrix |

---

## 🔹 Section 3: Strings (4 Lessons)

**🎯 Purpose:** String problems are among the most frequently asked in interviews. They test precision with indices, edge cases, and character encoding awareness.

**🧠 Skills acquired:** Pattern matching, anagram detection, palindrome checks, string building optimization, basic regex reasoning.

| # | Lesson | Problems | Focus |
|---|--------|----------|-------|
| 3.1 | String Fundamentals & Manipulation | 5 | Reverse, compression, valid palindrome |
| 3.2 | Anagrams & Character Frequency | 5 | Group anagrams, minimum window substring, frequency sort |
| 3.3 | Substring & Pattern Problems | 5 | Longest common prefix, KMP basics, repeated substring |
| 3.4 | String ↔ Number Conversions & Parsing | 4 | atoi implementation, valid number, roman to integer |

---

## 🔹 Section 4: Hash Tables — Maps & Sets (4 Lessons)

**🎯 Purpose:** Hash tables provide O(1) average lookup and are used in nearly every real-world system — caching, indexing, deduplication. This is the #1 "unlock" data structure for solving problems efficiently.

**🧠 Skills acquired:** Trading space for speed, frequency counting, grouping, caching patterns, collision reasoning.

| # | Lesson | Problems | Focus |
|---|--------|----------|-------|
| 4.1 | Map & Set Fundamentals | 5 | Two sum, contains duplicate, isomorphic strings |
| 4.2 | Frequency Counting Patterns | 5 | Top K frequent elements, first unique character, sort by frequency |
| 4.3 | Grouping & Bucketing | 4 | Group anagrams by hash, bucket sort pattern, time-based key-value store |
| 4.4 | Designing a Hash Table from Scratch | 3 | Build hash map, handle collisions (chaining/open addressing), resize logic |

---

## 🔹 Section 5: Linked Lists (4 Lessons)

**🎯 Purpose:** Linked lists test pointer manipulation and edge-case handling. They're foundational to understanding trees, graphs, and memory management.

**🧠 Skills acquired:** Node-based thinking, pointer manipulation, cycle detection, merge operations, dummy node technique.

| # | Lesson | Problems | Focus |
|---|--------|----------|-------|
| 5.1 | Singly Linked List Operations | 5 | Reverse, detect cycle, find middle |
| 5.2 | Two-Pointer Technique in Lists | 5 | Remove Nth from end, intersection point, palindrome list |
| 5.3 | Merge & Sort Operations | 4 | Merge two sorted lists, merge K sorted lists, sort a linked list |
| 5.4 | Advanced: Doubly Linked List & LRU Cache | 4 | Design LRU cache, flatten multilevel list, copy list with random pointer |

---

## 🔹 Section 6: Stacks & Queues (4 Lessons)

**🎯 Purpose:** Stacks and queues model real-world processing orders (undo systems, task scheduling, expression evaluation). They're building blocks for BFS/DFS and many system design patterns.

**🧠 Skills acquired:** LIFO/FIFO reasoning, monotonic stack patterns, expression parsing, queue-based processing.

| # | Lesson | Problems | Focus |
|---|--------|----------|-------|
| 6.1 | Stack Fundamentals | 5 | Valid parentheses, min stack, evaluate reverse polish notation |
| 6.2 | Monotonic Stack | 5 | Next greater element, daily temperatures, largest rectangle in histogram |
| 6.3 | Queue Fundamentals & Circular Queue | 4 | Implement queue with stacks, moving average, design circular queue |
| 6.4 | Deque & Priority Applications | 4 | Sliding window maximum, task scheduler simulation |

---

## 🔹 Section 7: Recursion & Backtracking (5 Lessons)

**🎯 Purpose:** Recursion is the foundation of tree/graph algorithms and many optimization problems. Backtracking builds on it to solve combinatorial problems efficiently.

**🧠 Skills acquired:** Recursive thinking, base case design, memoization, backtracking pruning, generating permutations/combinations.

| # | Lesson | Problems | Focus |
|---|--------|----------|-------|
| 7.1 | Recursion Fundamentals | 5 | Factorial, Fibonacci, power of a number, flatten nested array |
| 7.2 | Recursion with Data Structures | 5 | Reverse linked list recursively, merge sort, tree height |
| 7.3 | Backtracking — Permutations & Combinations | 6 | Permutations, combinations, combination sum, letter combinations of phone number |
| 7.4 | Backtracking — Constraint Satisfaction | 5 | N-Queens, Sudoku solver, word search |
| 7.5 | Recursion Optimization & Tail Calls | 3 | Memoization patterns, iterative conversion, trampoline technique |

---

## 🔹 Section 8: Sorting Algorithms (4 Lessons)

**🎯 Purpose:** Sorting is a prerequisite for binary search, greedy, and many optimization problems. Understanding sorting internals helps you choose the right algorithm for production data pipelines.

**🧠 Skills acquired:** Implement and analyze all major sorts, recognize when custom sorting solves a problem, stability awareness.

| # | Lesson | Problems | Focus |
|---|--------|----------|-------|
| 8.1 | Elementary Sorts: Bubble, Selection, Insertion | 4 | Implementation, comparison counting, nearly sorted detection |
| 8.2 | Efficient Sorts: Merge Sort & Quick Sort | 5 | Implementation, partition schemes, kth largest element |
| 8.3 | Non-Comparison Sorts: Counting, Radix, Bucket | 4 | When integers matter, maximum gap, sort colors |
| 8.4 | Custom Comparators & Real-World Sorting | 5 | Sort by custom criteria, largest number, meeting rooms scheduling |

---

## 🔹 Section 9: Searching Algorithms (3 Lessons)

**🎯 Purpose:** Binary search is one of the most powerful patterns in interviews — it applies far beyond sorted arrays. This section trains you to recognize "searchable" problem spaces.

**🧠 Skills acquired:** Binary search on arrays and answer spaces, search in rotated arrays, boundary finding.

| # | Lesson | Problems | Focus |
|---|--------|----------|-------|
| 9.1 | Linear & Binary Search Fundamentals | 5 | Classic binary search, first/last position, search insert position |
| 9.2 | Binary Search on Rotated & Modified Arrays | 5 | Search in rotated array, find minimum, peak element |
| 9.3 | Binary Search on Answer Space | 5 | Koko eating bananas, split array largest sum, capacity to ship packages |

---

## 🔹 Section 10: Trees (6 Lessons)

**🎯 Purpose:** Trees appear in ~25% of interview questions. They test recursive thinking and are fundamental to databases (B-trees), UI frameworks (DOM), and file systems.

**🧠 Skills acquired:** Tree traversals, BST operations, tree construction, lowest common ancestor, balanced tree reasoning.

| # | Lesson | Problems | Focus |
|---|--------|----------|-------|
| 10.1 | Binary Tree Fundamentals & Traversals | 6 | Inorder, preorder, postorder (recursive + iterative), level-order |
| 10.2 | Binary Tree Properties & Checks | 5 | Max depth, symmetric tree, balanced check, diameter |
| 10.3 | Binary Search Tree (BST) Operations | 5 | Validate BST, insert, delete, kth smallest, inorder successor |
| 10.4 | Tree Construction & Serialization | 4 | Build from traversals, serialize/deserialize, flatten to linked list |
| 10.5 | Lowest Common Ancestor & Path Problems | 5 | LCA, root-to-leaf paths, path sum variations, max path sum |
| 10.6 | Advanced Trees: AVL Concepts & Segment Trees Intro | 4 | Rotation concepts, range queries, understanding self-balancing |

---

## 🔹 Section 11: Heaps & Priority Queues (3 Lessons)

**🎯 Purpose:** Heaps efficiently solve "top K" and streaming problems — common in data processing, event scheduling, and system design.

**🧠 Skills acquired:** Heap implementation, priority queue usage, streaming median, merge K sorted inputs.

| # | Lesson | Problems | Focus |
|---|--------|----------|-------|
| 11.1 | Heap Fundamentals & Implementation | 5 | Build min/max heap, heapify, kth largest in stream |
| 11.2 | Top K Pattern | 5 | Top K frequent words, K closest points, sort nearly sorted array |
| 11.3 | Two-Heap & Merge Patterns | 4 | Find median from data stream, merge K sorted lists, IPO problem |

---

## 🔹 Section 12: Graphs (6 Lessons)

**🎯 Purpose:** Graphs model networks, dependencies, maps, and relationships. They appear in system design (social networks, routing) and are a core interview topic.

**🧠 Skills acquired:** Graph representation, BFS/DFS, cycle detection, topological sort, shortest path, union-find.

| # | Lesson | Problems | Focus |
|---|--------|----------|-------|
| 12.1 | Graph Representation & Traversal Basics | 5 | Adjacency list/matrix, BFS, DFS, connected components |
| 12.2 | BFS Applications | 5 | Shortest path unweighted, word ladder, rotting oranges, 01 matrix |
| 12.3 | DFS Applications | 5 | Number of islands, clone graph, course schedule (cycle detection) |
| 12.4 | Topological Sort | 4 | Course schedule ordering, alien dictionary, task dependencies |
| 12.5 | Shortest Path: Dijkstra & Bellman-Ford | 5 | Network delay time, cheapest flights, path with minimum effort |
| 12.6 | Union-Find (Disjoint Set) | 5 | Number of provinces, redundant connection, accounts merge |

---

## 🔹 Section 13: Dynamic Programming (7 Lessons)

**🎯 Purpose:** DP is the most feared interview topic — and the most rewarding to master. It trains you to decompose complex problems into overlapping subproblems.

**🧠 Skills acquired:** Top-down/bottom-up DP, state design, 1D/2D DP, sequence alignment, knapsack variations.

| # | Lesson | Problems | Focus |
|---|--------|----------|-------|
| 13.1 | DP Fundamentals & 1D Problems | 5 | Climbing stairs, house robber, decode ways |
| 13.2 | DP on Sequences | 5 | Longest increasing subsequence, longest common subsequence, edit distance |
| 13.3 | DP on Grid / 2D Problems | 5 | Unique paths, minimum path sum, maximal square |
| 13.4 | Knapsack Patterns | 5 | 0/1 knapsack, coin change, partition equal subset sum |
| 13.5 | Interval & String DP | 4 | Palindrome partitioning, longest palindromic substring, burst balloons |
| 13.6 | State Machine DP | 4 | Best time to buy and sell stock (all variations), paint house |
| 13.7 | DP Optimization & Recognizing DP Problems | 3 | Space optimization, when to use DP vs greedy, pattern recognition |

---

## 🔹 Section 14: Greedy Algorithms (3 Lessons)

**🎯 Purpose:** Greedy algorithms produce optimal solutions by making locally best choices. They're faster than DP when applicable and common in scheduling/optimization problems.

**🧠 Skills acquired:** Greedy choice property, interval scheduling, Huffman-like reasoning, proving greedy correctness.

| # | Lesson | Problems | Focus |
|---|--------|----------|-------|
| 14.1 | Greedy Fundamentals & Interval Problems | 5 | Activity selection, non-overlapping intervals, minimum platforms |
| 14.2 | Greedy on Arrays & Strings | 5 | Jump game, gas station, task scheduler, partition labels |
| 14.3 | Advanced Greedy | 4 | Candy distribution, minimum number of arrows, reorganize string |

---

## 🔹 Section 15: Tries, Bit Manipulation & Final Patterns (5 Lessons)

**🎯 Purpose:** These topics round out your toolkit with specialized but frequently tested patterns. Tries power autocomplete systems; bit manipulation appears in systems programming.

**🧠 Skills acquired:** Trie implementation, bitwise operations, common interview patterns synthesis.

| # | Lesson | Problems | Focus |
|---|--------|----------|-------|
| 15.1 | Trie (Prefix Tree) | 5 | Implement trie, word search II, autocomplete system, longest word |
| 15.2 | Bit Manipulation Fundamentals | 5 | Single number, counting bits, power of two, hamming distance |
| 15.3 | Bit Manipulation — Advanced | 4 | Subsets via bitmask, maximum XOR, missing number without extra space |
| 15.4 | Combined Patterns & Problem Classification | 5 | Mixed problems requiring pattern recognition across all sections |
| 15.5 | Mock Interview Simulation | 6 | Timed problems spanning arrays, trees, DP, graphs |

---

## 🔸 Course Summary

| Section | Lessons | Problems |
|---------|---------|----------|
| 1. Complexity Analysis | 3 | 13 |
| 2. Arrays | 6 | 32 |
| 3. Strings | 4 | 19 |
| 4. Hash Tables | 4 | 17 |
| 5. Linked Lists | 4 | 18 |
| 6. Stacks & Queues | 4 | 18 |
| 7. Recursion & Backtracking | 5 | 24 |
| 8. Sorting | 4 | 18 |
| 9. Searching | 3 | 15 |
| 10. Trees | 6 | 29 |
| 11. Heaps | 3 | 14 |
| 12. Graphs | 6 | 29 |
| 13. Dynamic Programming | 7 | 31 |
| 14. Greedy | 3 | 14 |
| 15. Tries, Bits & Final | 5 | 25 |
| **Total** | **72** | **~346** |

---

## How to Use This Course

1. **Go section by section** — each builds on the previous.
2. **For each lesson:** Read the brief theory → solve each problem yourself first → then review solutions.
3. **Multiple solutions per problem:** We'll discuss brute force → optimized, with trade-off analysis.
4. **Spaced repetition:** After finishing a section, revisit 2-3 hardest problems from previous sections.
5. **Interview readiness:** Sections 13-15 include timed mock problems for simulation practice.

---

*Ready to begin? Let's start with Section 1, Lesson 1.1: Time Complexity & Big O Basics.*
