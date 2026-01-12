export type Concept = {
    heading: string;
    bullets: string[];
};

export type TutorialQuestion = {
    id: string;
    difficulty: "easy" | "medium" | "hard";
    prompt: string;
    hints: string[];
    sampleAnswer: string[];
};

export type WeekData = {
    week: number;
    title: string;
    tags: string[];
    mlo: string;
    overview: string;
    learningGoals: string[];
    keyTerms: string[];
    concepts: Concept[];
    tutorialQuestions: TutorialQuestion[];
};

const week1: WeekData = {
    week: 1,
    title: "Computer Architecture Fundamentals",
    mlo: "MLO1",
    tags: ["architecture", "organization", "von-neumann", "harvard", "cpu", "memory"],
    overview:
        "Introduction to computer architecture and organization, exploring the fundamental differences between Von Neumann and Harvard architectures, CPU components, and memory hierarchy.",
    learningGoals: [
        "Distinguish between computer architecture and organization",
        "Compare Von Neumann vs Harvard architectural models",
        "Identify CPU components: ALU, control unit, registers",
        "Understand memory hierarchy levels and characteristics",
    ],
    keyTerms: [
        "ISA (Instruction Set Architecture), Microarchitecture",
        "Von Neumann Architecture, Harvard Architecture", 
        "ALU, Control Unit, Registers, Cache",
        "Memory hierarchy, L1/L2/L3 Cache, Main Memory",
    ],
    concepts: [
        {
            heading: "Architecture vs Organization",
            bullets: [
                "Architecture is the interface - like a car's steering wheel and pedals that stay the same across models",
                "Organization is the implementation - like different engine types (V6 vs V8) under the hood",
                "Same architecture can have different organizations for better performance",
            ],
        },
        {
            heading: "Von Neumann vs Harvard Memory Models",
            bullets: [
                "Von Neumann: One unified memory for both instructions and data - flexible but can bottleneck",
                "Harvard: Separate memories for instructions and data - faster but more complex",
                "Modern CPUs use Modified Harvard - separate L1 caches, unified lower levels",
            ],
        },
        {
            heading: "CPU Core Components",
            bullets: [
                "ALU (Arithmetic Logic Unit): The calculator that performs math and logic operations",
                "Control Unit: The conductor that coordinates all CPU operations",
                "Registers: Fast temporary storage - the CPU's immediate workspace",
                "FPU: Specialized unit for floating-point (decimal) calculations",
            ],
        },
        {
            heading: "Memory Hierarchy",
            bullets: [
                "Registers: Fastest, smallest (32-64 entries), 1 cycle access",
                "L1 Cache: Very fast, small (32-64KB), 1-3 cycles",
                "L2/L3 Cache: Fast, medium size, 10-50 cycles", 
                "Main Memory: Large (GB), slower (100-300 cycles)",
                "Storage: Massive (TB), very slow (10K+ cycles)",
            ],
        },
    ],
    tutorialQuestions: [
        {
            id: "q1",
            difficulty: "medium",
            prompt: "Explain the difference between computer architecture and organization with examples.",
            hints: [
                "Think about what programmers see vs hardware implementation",
                "Consider x86 architecture across different Intel processors",
            ],
            sampleAnswer: [
                "Architecture is the programmer-visible interface (ISA, registers, instructions)",
                "Organization is the hardware implementation (cache sizes, pipeline depth)",
                "Example: x86-64 architecture runs on both Core i3 and Core i9, but they have different organizations",
            ],
        },
        {
            id: "q2", 
            difficulty: "hard",
            prompt: "Why do modern processors use Modified Harvard architecture instead of pure Von Neumann or Harvard?",
            hints: [
                "Consider the benefits of both approaches",
                "Think about cache levels and flexibility",
            ],
            sampleAnswer: [
                "Combines benefits: separate L1 caches provide Harvard's speed advantage",
                "Unified lower levels maintain Von Neumann's flexibility",
                "Optimizes for common case while handling edge cases through cache coherency",
            ],
        },
    ],
};

const week2: WeekData = {
    week: 2,
    title: "Number Systems and Data Representation",
    mlo: "MLO1",
    tags: ["binary", "hexadecimal", "data-representation", "conversion", "signed-numbers", "floating-point"],
    overview:
        "Explore how computers represent numbers and data using binary, hexadecimal, and other number systems. Learn conversion techniques, signed number representations, and floating-point arithmetic.",
    learningGoals: [
        "Convert between binary, decimal, hexadecimal, and octal number systems",
        "Understand signed integer representations: two's complement",
        "Apply IEEE 754 floating-point standard basics",
        "Perform binary arithmetic operations",
    ],
    keyTerms: [
        "Binary (base-2), Decimal (base-10), Hexadecimal (base-16)",
        "Bit, Byte, Word, Two's complement",
        "IEEE 754, Floating-point, Mantissa, Exponent",
        "Overflow, Underflow, Precision",
    ],
    concepts: [
        {
            heading: "Number System Basics",
            bullets: [
                "Different bases are like different languages for the same numbers",
                "Binary (base-2) uses only 0 and 1 - the language computers understand",
                "Hexadecimal (base-16) is a convenient shorthand for binary",
                "Each hex digit represents exactly 4 binary digits",
            ],
        },
        {
            heading: "Binary Arithmetic",
            bullets: [
                "Binary addition: 0+0=0, 0+1=1, 1+0=1, 1+1=10 (with carry)",
                "Computers use shift operations for fast multiplication/division by 2",
                "Left shift multiplies by 2, right shift divides by 2",
            ],
        },
        {
            heading: "Signed Numbers - Two's Complement",
            bullets: [
                "Most common way to represent negative numbers in computers",
                "To negate: flip all bits and add 1",
                "Range: -2^(n-1) to 2^(n-1)-1 for n bits",
                "Same addition circuit works for positive and negative numbers",
            ],
        },
        {
            heading: "Floating-Point Representation",
            bullets: [
                "Like scientific notation for computers: significand × 2^exponent",
                "IEEE 754 standard ensures compatibility across systems",
                "32-bit float: 1 sign bit, 8 exponent bits, 23 mantissa bits",
                "Not all decimal numbers can be represented exactly",
            ],
        },
    ],
    tutorialQuestions: [
        {
            id: "q1",
            difficulty: "medium",
            prompt: "Convert decimal 156 to binary and hexadecimal. Show your work.",
            hints: [
                "Use successive division by 2 for binary",
                "Group binary digits by 4 for hex",
            ],
            sampleAnswer: [
                "156 ÷ 2 = 78 R0, 78 ÷ 2 = 39 R0, 39 ÷ 2 = 19 R1, etc.",
                "Binary: 10011100₂",
                "Hex: Group as 1001|1100₂ = 9C₁₆",
            ],
        },
        {
            id: "q2",
            difficulty: "hard", 
            prompt: "Explain why 0.1 + 0.2 ≠ 0.3 in floating-point arithmetic.",
            hints: [
                "Consider binary representation of 0.1",
                "Think about precision limitations",
            ],
            sampleAnswer: [
                "0.1 in binary is 0.000110011... (repeating)",
                "Cannot be exactly represented in finite bits",
                "Rounding errors accumulate in arithmetic",
                "Result is approximately 0.30000000000000004",
            ],
        },
    ],
};

const week3: WeekData = {
    week: 3,
    title: "Boolean Logic and Digital Circuits",
    mlo: "MLO1", 
    tags: ["boolean-algebra", "logic-gates", "truth-tables", "digital-circuits", "combinational-logic"],
    overview:
        "Study Boolean algebra fundamentals and digital circuit design. Learn logic operations, gate-level circuits, truth tables, and basic circuit optimization techniques.",
    learningGoals: [
        "Apply Boolean algebra laws and De Morgan's rules",
        "Analyze combinational logic circuits using basic gates",
        "Construct truth tables for Boolean functions",
        "Design simple arithmetic circuits like adders",
    ],
    keyTerms: [
        "Boolean algebra, Logic gates, Truth tables",
        "AND, OR, NOT, NAND, NOR, XOR gates",
        "Combinational circuits, Logic minimization",
        "Half adder, Full adder, Multiplexer",
    ],
    concepts: [
        {
            heading: "Boolean Algebra Fundamentals",
            bullets: [
                "Boolean algebra deals with true/false, on/off, 1/0 values only",
                "Basic operations: AND (both must be true), OR (either can be true), NOT (opposite)",
                "Boolean laws help simplify complex expressions, just like math",
                "These laws translate directly to simpler, faster digital circuits",
            ],
        },
        {
            heading: "Logic Gates - Physical Boolean Operations",
            bullets: [
                "Logic gates are electronic circuits that implement Boolean operations",
                "AND gate outputs 1 only when ALL inputs are 1",
                "OR gate outputs 1 when ANY input is 1", 
                "NOT gate always outputs the opposite of its input",
                "XOR gate outputs 1 when inputs are different",
            ],
        },
        {
            heading: "Truth Tables and Circuit Design",
            bullets: [
                "Truth tables show output for every possible input combination",
                "Systematic way to design circuits from requirements",
                "Can convert any truth table into a working circuit",
                "Foundation for computer-aided design tools",
            ],
        },
        {
            heading: "Building Blocks - Adders and Multiplexers",
            bullets: [
                "Half-adder adds two bits, produces sum and carry",
                "Full-adder handles carry input from previous position",
                "Chain full-adders together to add numbers of any size",
                "Multiplexers select one input from many based on control signals",
            ],
        },
    ],
    tutorialQuestions: [
        {
            id: "q1",
            difficulty: "medium",
            prompt: "Simplify the Boolean expression: F = AB'C + ABC + AB'C' using Boolean algebra laws.",
            hints: [
                "Look for common factors",
                "Apply distributive law",
                "Use complement laws",
            ],
            sampleAnswer: [
                "F = AB'C + ABC + AB'C'",
                "Factor: F = AB'(C + C') + ABC", 
                "Since C + C' = 1: F = AB'(1) + ABC = AB' + ABC",
                "Factor again: F = A(B' + BC) = A(B' + C)",
                "Final: F = AB' + AC",
            ],
        },
        {
            id: "q2",
            difficulty: "hard",
            prompt: "Design a 2-bit comparator that outputs 1 when A > B for inputs A₁A₀ and B₁B₀.",
            hints: [
                "Compare bit by bit from MSB",
                "Consider when A₁ > B₁ or A₁ = B₁ and A₀ > B₀",
            ],
            sampleAnswer: [
                "A > B when: A₁ > B₁, or A₁ = B₁ and A₀ > B₀",
                "A₁ > B₁ means A₁ = 1 and B₁ = 0: A₁B₁'",
                "A₁ = B₁ means (A₁B₁ + A₁'B₁'): equality of MSBs",
                "A₀ > B₀ means A₀ = 1 and B₀ = 0: A₀B₀'",
                "Final: F = A₁B₁' + (A₁B₁ + A₁'B₁')A₀B₀'",
            ],
        },
    ],
};

// Simplified weeks 4-8 with focus on illustrations
const week4: WeekData = {
    week: 4,
    title: "Instruction Set Architecture",
    mlo: "MLO2",
    tags: ["isa", "risc", "cisc", "instruction-formats", "addressing-modes", "assembly"],
    overview: "Explore instruction set architectures, comparing RISC and CISC approaches. Learn instruction formats, addressing modes, and basic assembly language programming.",
    learningGoals: ["Compare RISC and CISC architectural philosophies", "Understand instruction formats and encoding", "Apply different addressing modes effectively", "Write basic assembly language programs"],
    keyTerms: ["ISA, RISC, CISC, Instruction formats", "Addressing modes, Assembly language", "Opcodes, Operands, Registers", "Load-store architecture, Memory operations"],
    concepts: [
        { heading: "RISC vs CISC Philosophy", bullets: ["RISC: Simple instructions, fixed format, load-store architecture", "CISC: Complex instructions, variable format, memory-register operations", "RISC focuses on compiler optimization and pipeline efficiency", "CISC emphasizes code density and powerful instructions"] },
        { heading: "Instruction Formats", bullets: ["R-type: Register-to-register operations (ADD R1, R2, R3)", "I-type: Immediate operations (ADDI R1, R2, #100)", "J-type: Jump instructions (JMP address)", "Fixed vs variable length instruction encoding"] },
        { heading: "Addressing Modes", bullets: ["Immediate: Operand is in the instruction (#100)", "Register: Operand is in a register (R1)", "Direct: Operand address is in instruction (1000)", "Indirect: Address of operand is in register ((R1))"] },
        { heading: "Assembly Language Basics", bullets: ["Human-readable representation of machine code", "One-to-one correspondence with machine instructions", "Requires understanding of processor architecture", "Foundation for system programming and optimization"] }
    ],
    tutorialQuestions: [
        { id: "q1", difficulty: "medium", prompt: "Compare ARM (RISC) and x86 (CISC) instruction formats. What are the trade-offs?", hints: ["Consider instruction complexity", "Think about decode overhead", "Analyze code density"], sampleAnswer: ["ARM: Fixed 32-bit instructions, simple decode, predictable timing", "x86: Variable 1-15 byte instructions, complex decode, high code density", "ARM advantages: Simple pipeline, high frequency, low power", "x86 advantages: Fewer instructions needed, backward compatibility"] },
        { id: "q2", difficulty: "hard", prompt: "Design instruction formats for a 32-bit RISC processor with 32 registers.", hints: ["Consider opcode space", "Think about immediate field sizes", "Balance instruction types"], sampleAnswer: ["R-type: [6-bit opcode][5-bit rs][5-bit rt][5-bit rd][5-bit shamt][6-bit funct]", "I-type: [6-bit opcode][5-bit rs][5-bit rt][16-bit immediate]", "J-type: [6-bit opcode][26-bit address]", "Allows 64 major opcodes, 32 registers, ±32K immediate values"] }
    ]
};

const week5: WeekData = {
    week: 5,
    title: "Memory Systems and Cache",
    mlo: "MLO2",
    tags: ["memory-hierarchy", "cache", "virtual-memory", "tlb", "locality"],
    overview: "Study memory hierarchy design, cache organization, and virtual memory systems. Learn about cache performance, replacement policies, and address translation.",
    learningGoals: ["Understand memory hierarchy principles", "Analyze cache performance and design trade-offs", "Apply virtual memory concepts and address translation", "Optimize programs for cache performance"],
    keyTerms: ["Memory hierarchy, Cache, Hit rate, Miss penalty", "Temporal locality, Spatial locality, Cache line", "Virtual memory, Page table, TLB", "Cache coherence, Write policies"],
    concepts: [
        { heading: "Memory Hierarchy Principles", bullets: ["Fast memory is expensive and small, slow memory is cheap and large", "Hierarchy bridges the gap between speed and capacity", "Locality of reference makes hierarchy effective", "Each level caches data from the level below"] },
        { heading: "Cache Organization", bullets: ["Direct-mapped: Each block has one possible cache location", "Set-associative: Each block can go in one of several locations", "Fully-associative: Block can go anywhere in cache", "Trade-offs between complexity, speed, and hit rate"] },
        { heading: "Virtual Memory", bullets: ["Gives each program its own address space", "Pages map virtual addresses to physical addresses", "TLB caches recent address translations", "Enables memory protection and sharing"] },
        { heading: "Cache Performance", bullets: ["AMAT = Hit Time + Miss Rate × Miss Penalty", "Improving hit rate or reducing miss penalty improves performance", "Program optimization can dramatically improve cache behavior", "Understanding access patterns is key to optimization"] }
    ],
    tutorialQuestions: [
        { id: "q1", difficulty: "medium", prompt: "Calculate AMAT for a cache with 95% hit rate, 2ns hit time, and 100ns miss penalty.", hints: ["Use AMAT formula", "Consider the impact of miss rate"], sampleAnswer: ["AMAT = 2ns + 0.05 × 100ns = 2ns + 5ns = 7ns", "Miss penalty dominates despite low miss rate", "Small improvements in hit rate have large impact"] },
        { id: "q2", difficulty: "hard", prompt: "Design a 2-way set-associative cache with 64KB capacity and 64-byte blocks.", hints: ["Calculate number of sets", "Determine address breakdown"], sampleAnswer: ["Total blocks = 64KB / 64B = 1024 blocks", "Sets = 1024 blocks / 2 ways = 512 sets", "Address: [Tag: 17 bits][Index: 9 bits][Offset: 6 bits]"] }
    ]
};

const week6: WeekData = {
    week: 6,
    title: "CPU Pipelining and Performance",
    mlo: "MLO2",
    tags: ["pipeline", "hazards", "performance", "superscalar", "branch-prediction"],
    overview: "Explore CPU pipelining techniques, hazard detection and resolution, and performance optimization strategies in modern processors.",
    learningGoals: ["Understand pipeline stages and operation", "Identify and resolve pipeline hazards", "Analyze pipeline performance metrics", "Apply techniques for performance optimization"],
    keyTerms: ["Pipeline, Stages, Throughput, Latency", "Hazards, Stalls, Forwarding, Branch prediction", "Superscalar, Out-of-order execution", "CPI, IPC, Performance metrics"],
    concepts: [
        { heading: "Pipeline Basics", bullets: ["Break instruction execution into stages", "Multiple instructions in different stages simultaneously", "Improves throughput but not individual instruction latency", "Like an assembly line for instruction processing"] },
        { heading: "Pipeline Hazards", bullets: ["Data hazards: Instructions depend on previous results", "Control hazards: Branches change instruction flow", "Structural hazards: Hardware resource conflicts", "Solutions include stalling, forwarding, and prediction"] },
        { heading: "Performance Optimization", bullets: ["Branch prediction reduces control hazard penalties", "Forwarding eliminates many data hazard stalls", "Superscalar execution processes multiple instructions per cycle", "Out-of-order execution finds independent instructions"] },
        { heading: "Performance Metrics", bullets: ["CPI (Cycles Per Instruction) measures efficiency", "IPC (Instructions Per Cycle) measures parallelism", "Pipeline depth affects both performance and complexity", "Balancing frequency and IPC is key to performance"] }
    ],
    tutorialQuestions: [
        { id: "q1", difficulty: "medium", prompt: "Trace instruction execution through a 5-stage pipeline showing potential hazards.", hints: ["Consider IF, ID, EX, MEM, WB stages", "Look for data dependencies"], sampleAnswer: ["IF: Fetch instruction from I-cache", "ID: Decode and read registers", "EX: Execute operation or calculate address", "MEM: Access memory if needed", "WB: Write result back to register", "Data hazards occur when instruction needs result from previous instruction"] },
        { id: "q2", difficulty: "hard", prompt: "Calculate performance improvement from a 4-stage to 8-stage pipeline.", hints: ["Consider ideal speedup vs real hazards", "Think about frequency scaling"], sampleAnswer: ["Ideal speedup: 8/4 = 2x from deeper pipeline", "Reality: Hazards increase with deeper pipeline", "Frequency can increase with shorter stages", "Net improvement depends on hazard frequency and mitigation"] }
    ]
};

const week7: WeekData = {
    week: 7,
    title: "Advanced Cache Organization",
    mlo: "MLO2",
    tags: ["cache-organization", "memory-hierarchy", "coherence", "optimization"],
    overview: "Advanced topics in cache design including multi-level caches, cache coherence protocols, and memory system optimization techniques.",
    learningGoals: ["Design multi-level cache hierarchies", "Understand cache coherence in multiprocessor systems", "Apply cache optimization techniques", "Analyze memory system performance"],
    keyTerms: ["Multi-level cache, Inclusive, Exclusive", "Cache coherence, MESI protocol, Snooping", "Prefetching, Victim cache, Write buffer", "Memory bandwidth, Bank conflicts"],
    concepts: [
        { heading: "Multi-Level Cache Design", bullets: ["L1: Small, fast, close to processor cores", "L2/L3: Larger, slower, shared between cores", "Inclusive vs exclusive cache hierarchies", "Balancing size, speed, and power consumption"] },
        { heading: "Cache Coherence", bullets: ["Ensures consistent view of memory across processors", "MESI protocol: Modified, Exclusive, Shared, Invalid states", "Snooping vs directory-based protocols", "Performance impact of coherence traffic"] },
        { heading: "Optimization Techniques", bullets: ["Prefetching brings data before it's needed", "Victim caches reduce conflict misses", "Write buffers hide write latency", "Non-blocking caches allow multiple outstanding misses"] },
        { heading: "Memory System Performance", bullets: ["Memory bandwidth limits system performance", "Bank conflicts reduce effective bandwidth", "Memory controllers optimize access patterns", "NUMA effects in multi-socket systems"] }
    ],
    tutorialQuestions: [
        { id: "q1", difficulty: "medium", prompt: "Compare inclusive vs exclusive cache hierarchies. What are the trade-offs?", hints: ["Consider cache utilization", "Think about coherence complexity"], sampleAnswer: ["Inclusive: L2 contains all L1 data, simpler coherence", "Exclusive: No duplication, better capacity utilization", "Inclusive easier to implement, exclusive more efficient", "Choice depends on performance vs complexity trade-offs"] },
        { id: "q2", difficulty: "hard", prompt: "Explain how MESI protocol maintains cache coherence in a 4-processor system.", hints: ["Describe state transitions", "Consider bus transactions"], sampleAnswer: ["Modified: Exclusive dirty copy, must write back on eviction", "Exclusive: Clean exclusive copy, can modify without bus transaction", "Shared: Multiple clean copies exist", "Invalid: Cache line not valid", "Bus snooping ensures all caches see state changes"] }
    ]
};

const week8: WeekData = {
    week: 8,
    title: "Assembly Programming",
    mlo: "MLO2",
    tags: ["assembly", "low-level", "system-calls", "optimization"],
    overview: "Practical assembly language programming, system interface, and low-level optimization techniques for performance-critical applications.",
    learningGoals: ["Write efficient assembly language programs", "Understand system call interface", "Apply low-level optimization techniques", "Debug and profile assembly code"],
    keyTerms: ["Assembly language, Machine code, Assembler", "System calls, Interrupts, Stack management", "Register allocation, Instruction scheduling", "Profiling, Debugging, Optimization"],
    concepts: [
        { heading: "Assembly Programming Fundamentals", bullets: ["Direct control over processor resources", "One-to-one mapping with machine instructions", "Manual register and memory management", "Understanding of processor architecture essential"] },
        { heading: "System Interface", bullets: ["System calls provide OS services", "Interrupt handling for hardware events", "Memory management and protection", "I/O operations and device drivers"] },
        { heading: "Optimization Techniques", bullets: ["Register allocation minimizes memory accesses", "Instruction scheduling reduces pipeline stalls", "Loop unrolling improves instruction-level parallelism", "SIMD instructions for data parallel operations"] },
        { heading: "Development Tools", bullets: ["Assemblers translate assembly to machine code", "Debuggers help trace program execution", "Profilers identify performance bottlenecks", "Disassemblers reverse-engineer compiled code"] }
    ],
    tutorialQuestions: [
        { id: "q1", difficulty: "medium", prompt: "Write an assembly function to compute the sum of an array.", hints: ["Consider loop structure", "Think about register usage"], sampleAnswer: ["sum_array: MOV R1, #0     ; Initialize sum to 0", "         MOV R2, #0     ; Initialize index to 0", "loop:    CMP R2, R0     ; Compare index with length", "         BGE done       ; Branch if done", "         LDR R3, [R1, R2, LSL #2] ; Load array[i]", "         ADD R1, R1, R3 ; Add to sum", "         ADD R2, R2, #1 ; Increment index", "         B loop         ; Continue loop", "done:    MOV R0, R1     ; Return sum"] },
        { id: "q2", difficulty: "hard", prompt: "Optimize a matrix multiplication loop for cache performance.", hints: ["Consider memory access patterns", "Think about loop blocking"], sampleAnswer: ["Use loop blocking to improve spatial locality", "Process matrices in cache-sized blocks", "Reorder loops to maximize cache reuse", "Consider register blocking for temporal locality", "Prefetch data to hide memory latency"] }
    ]
};

// Placeholder weeks 9-15 (keeping existing structure)
const placeholderWeeks: WeekData[] = Array.from({ length: 7 }, (_, i) => ({
    week: i + 9,
    title: `Week ${i + 9} - Coming Soon`,
    mlo: "MLO3",
    tags: ["coming-soon"],
    overview: "Content for this week is being developed and will be available soon.",
    learningGoals: ["Content coming soon"],
    keyTerms: ["Content coming soon"],
    concepts: [],
    tutorialQuestions: [],
}));

export const weeks: WeekData[] = [week1, week2, week3, week4, week5, week6, week7, week8, ...placeholderWeeks];