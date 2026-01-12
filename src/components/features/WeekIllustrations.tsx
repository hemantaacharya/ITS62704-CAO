"use client";

import { useState, useEffect } from "react";
import React from "react";

// Week 1: Computer Architecture Components
export function Week1Illustration() {
    const [activeComponent, setActiveComponent] = useState<string | null>(null);

    const components = [
        { id: 'cpu', name: 'CPU', color: 'bg-blue-500', description: 'Central Processing Unit - The brain of the computer' },
        { id: 'memory', name: 'Memory', color: 'bg-green-500', description: 'RAM - Temporary storage for active programs' },
        { id: 'storage', name: 'Storage', color: 'bg-purple-500', description: 'Hard Drive/SSD - Permanent data storage' },
        { id: 'io', name: 'I/O', color: 'bg-orange-500', description: 'Input/Output devices - Keyboard, mouse, display' }
    ];

    return (
        <div className="relative h-[400px] sm:h-[450px] lg:h-[500px] w-full rounded-xl bg-gradient-to-br from-zinc-900 to-zinc-950 overflow-hidden border border-zinc-800 p-4 sm:p-6 lg:p-8">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-green-500/5"></div>
            
            <div className="relative z-10 h-full flex flex-col items-center justify-center">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-4 sm:mb-6 lg:mb-8 text-center px-2">Computer Architecture Components</h3>
                
                <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6 max-w-xs sm:max-w-sm lg:max-w-md w-full">
                    {components.map((component) => (
                        <div
                            key={component.id}
                            className={`relative p-3 sm:p-4 lg:p-6 rounded-xl cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                                component.color
                            } ${
                                activeComponent === component.id ? 'ring-4 ring-white/50 scale-105' : 'hover:shadow-lg'
                            }`}
                            onClick={() => setActiveComponent(activeComponent === component.id ? null : component.id)}
                        >
                            <div className="text-center">
                                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white/20 rounded-lg mx-auto mb-2 sm:mb-3 flex items-center justify-center">
                                    <span className="text-white font-bold text-sm sm:text-base lg:text-lg">{component.name[0]}</span>
                                </div>
                                <h4 className="text-white font-semibold text-sm sm:text-base">{component.name}</h4>
                            </div>
                        </div>
                    ))}
                </div>

                {activeComponent && (
                    <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-zinc-800/80 backdrop-blur rounded-lg border border-zinc-700 max-w-xs sm:max-w-sm lg:max-w-md w-full text-center animate-fade-in mx-4">
                        <p className="text-zinc-300 text-xs sm:text-sm">
                            {components.find(c => c.id === activeComponent)?.description}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

// Week 2: Number Systems and Binary
export function Week2Illustration() {
    const [selectedNumber, setSelectedNumber] = useState<number>(156);
    
    const numbers = [156, 42, 255, 128];
    
    const getBinary = (num: number) => {
        return num.toString(2).padStart(8, '0').split('');
    };

    return (
        <div className="relative h-[400px] sm:h-[450px] lg:h-[500px] w-full rounded-xl bg-gradient-to-br from-zinc-900 to-zinc-950 overflow-hidden border border-zinc-800 p-4 sm:p-6">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-blue-500/5 to-indigo-500/5"></div>
            
            <div className="relative z-10 h-full flex flex-col">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-4 sm:mb-6 text-center">Binary Number System</h3>
                
                <div className="flex flex-wrap justify-center gap-2 mb-4 sm:mb-6">
                    {numbers.map((num) => (
                        <button
                            key={num}
                            onClick={() => setSelectedNumber(num)}
                            className={`px-3 py-2 sm:px-4 rounded-lg font-mono transition-all text-sm sm:text-base ${
                                selectedNumber === num 
                                    ? 'bg-indigo-600 text-white' 
                                    : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'
                            }`}
                        >
                            {num}
                        </button>
                    ))}
                </div>

                <div className="flex-1 flex flex-col items-center justify-center space-y-4 sm:space-y-6">
                    <div className="text-center">
                        <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-indigo-400 mb-2">{selectedNumber}</div>
                        <div className="text-zinc-400 text-sm sm:text-base">Decimal</div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-1 sm:gap-2 max-w-full">
                        {getBinary(selectedNumber).map((bit, index) => (
                            <div
                                key={index}
                                className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-lg flex items-center justify-center font-mono text-sm sm:text-base lg:text-lg font-bold transition-all duration-300 ${
                                    bit === '1' 
                                        ? 'bg-green-500 text-white animate-pulse' 
                                        : 'bg-red-500/80 text-white'
                                }`}
                            >
                                {bit}
                            </div>
                        ))}
                    </div>

                    <div className="text-center">
                        <div className="text-lg sm:text-xl lg:text-2xl font-mono text-green-400 mb-2 break-all">
                            {getBinary(selectedNumber).join('')}
                        </div>
                        <div className="text-zinc-400 text-sm sm:text-base">Binary</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Week 3: Logic Gates
export function Week3Illustration() {
    const [inputs, setInputs] = useState({ A: 1, B: 0 });
    
    const gates = [
        { name: 'AND', operation: (a: number, b: number) => a && b ? 1 : 0, color: 'bg-blue-500' },
        { name: 'OR', operation: (a: number, b: number) => a || b ? 1 : 0, color: 'bg-green-500' },
        { name: 'NOT A', operation: (a: number, b: number) => a ? 0 : 1, color: 'bg-red-500' },
        { name: 'NAND', operation: (a: number, b: number) => a && b ? 0 : 1, color: 'bg-purple-500' },
        { name: 'NOR', operation: (a: number, b: number) => a || b ? 0 : 1, color: 'bg-orange-500' },
        { name: 'XOR', operation: (a: number, b: number) => a !== b ? 1 : 0, color: 'bg-pink-500' }
    ];

    return (
        <div className="relative h-[400px] sm:h-[450px] lg:h-[500px] w-full rounded-xl bg-gradient-to-br from-zinc-900 to-zinc-950 overflow-hidden border border-zinc-800 p-4 sm:p-6">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-orange-500/5"></div>
            
            <div className="relative z-10 h-full flex flex-col">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">Logic Gates</h3>
                
                <div className="flex justify-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className="flex items-center gap-2">
                        <span className="text-white font-mono text-sm sm:text-base">A:</span>
                        <button
                            onClick={() => setInputs(prev => ({ ...prev, A: prev.A ? 0 : 1 }))}
                            className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full font-bold transition-all text-sm sm:text-base ${
                                inputs.A ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
                            }`}
                        >
                            {inputs.A}
                        </button>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-white font-mono text-sm sm:text-base">B:</span>
                        <button
                            onClick={() => setInputs(prev => ({ ...prev, B: prev.B ? 0 : 1 }))}
                            className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full font-bold transition-all text-sm sm:text-base ${
                                inputs.B ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
                            }`}
                        >
                            {inputs.B}
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 lg:gap-4 flex-1">
                    {gates.map((gate) => {
                        const output = gate.name === 'NOT A' 
                            ? gate.operation(inputs.A, 0) 
                            : gate.operation(inputs.A, inputs.B);
                        
                        return (
                            <div
                                key={gate.name}
                                className={`p-2 sm:p-3 lg:p-4 rounded-xl ${gate.color} transition-all duration-300 hover:scale-105`}
                            >
                                <div className="text-center">
                                    <h4 className="text-white font-bold mb-1 sm:mb-2 text-xs sm:text-sm lg:text-base">{gate.name}</h4>
                                    <div className="flex justify-center items-center gap-1 mb-1 sm:mb-2">
                                        <div className={`w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 rounded-full text-xs flex items-center justify-center ${
                                            inputs.A ? 'bg-green-400' : 'bg-red-400'
                                        }`}>
                                            {inputs.A}
                                        </div>
                                        {gate.name !== 'NOT A' && (
                                            <div className={`w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 rounded-full text-xs flex items-center justify-center ${
                                                inputs.B ? 'bg-green-400' : 'bg-red-400'
                                            }`}>
                                                {inputs.B}
                                            </div>
                                        )}
                                    </div>
                                    <div className={`w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 rounded-full mx-auto font-bold flex items-center justify-center text-sm sm:text-base ${
                                        output ? 'bg-green-300 text-green-800' : 'bg-red-300 text-red-800'
                                    }`}>
                                        {output}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

// Week 4: Instruction Set Architecture Visualization
export function Week4Illustration() {
    const [selectedInstruction, setSelectedInstruction] = useState<string>('ADD');
    const [registerValues, setRegisterValues] = useState({ R1: 5, R2: 3, R3: 0 });

    const instructions = [
        { name: 'ADD', format: 'ADD R3, R1, R2', description: 'R3 = R1 + R2', operation: (r1: number, r2: number) => r1 + r2 },
        { name: 'SUB', format: 'SUB R3, R1, R2', description: 'R3 = R1 - R2', operation: (r1: number, r2: number) => r1 - r2 },
        { name: 'MUL', format: 'MUL R3, R1, R2', description: 'R3 = R1 × R2', operation: (r1: number, r2: number) => r1 * r2 },
        { name: 'AND', format: 'AND R3, R1, R2', description: 'R3 = R1 & R2', operation: (r1: number, r2: number) => r1 & r2 },
    ];

    const executeInstruction = () => {
        const instr = instructions.find(i => i.name === selectedInstruction);
        if (instr) {
            const result = instr.operation(registerValues.R1, registerValues.R2);
            setRegisterValues(prev => ({ ...prev, R3: result }));
        }
    };

    return (
        <div className="relative h-[400px] sm:h-[450px] lg:h-[500px] w-full rounded-xl bg-gradient-to-br from-zinc-900 to-zinc-950 overflow-hidden border border-zinc-800 p-4 sm:p-6">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5"></div>
            
            <div className="relative z-10 h-full flex flex-col">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-4 text-center">Instruction Set Architecture</h3>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 flex-1">
                    {/* Instruction Selection */}
                    <div className="space-y-4">
                        <h4 className="text-base sm:text-lg font-semibold text-cyan-400">Instructions</h4>
                        <div className="grid grid-cols-2 gap-2">
                            {instructions.map((instr) => (
                                <button
                                    key={instr.name}
                                    onClick={() => setSelectedInstruction(instr.name)}
                                    className={`p-2 sm:p-3 rounded-lg transition-all text-sm ${
                                        selectedInstruction === instr.name
                                            ? 'bg-cyan-600 text-white'
                                            : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'
                                    }`}
                                >
                                    {instr.name}
                                </button>
                            ))}
                        </div>
                        
                        <div className="bg-zinc-800/50 p-3 rounded-lg">
                            <div className="text-cyan-400 font-mono text-sm mb-2">
                                {instructions.find(i => i.name === selectedInstruction)?.format}
                            </div>
                            <div className="text-zinc-300 text-xs">
                                {instructions.find(i => i.name === selectedInstruction)?.description}
                            </div>
                        </div>
                        
                        <button
                            onClick={executeInstruction}
                            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-all"
                        >
                            Execute
                        </button>
                    </div>

                    {/* Register File */}
                    <div className="space-y-4">
                        <h4 className="text-base sm:text-lg font-semibold text-green-400">Registers</h4>
                        <div className="space-y-3">
                            {Object.entries(registerValues).map(([reg, value]) => (
                                <div key={reg} className="flex items-center justify-between bg-zinc-800/50 p-3 rounded-lg">
                                    <span className="font-mono text-green-400">{reg}</span>
                                    <div className="flex items-center gap-2">
                                        {reg !== 'R3' && (
                                            <input
                                                type="number"
                                                value={value}
                                                onChange={(e) => setRegisterValues(prev => ({
                                                    ...prev,
                                                    [reg]: parseInt(e.target.value) || 0
                                                }))}
                                                className="w-16 bg-zinc-700 text-white text-center rounded px-2 py-1 text-sm"
                                            />
                                        )}
                                        {reg === 'R3' && (
                                            <span className="w-16 text-center font-mono text-yellow-400">{value}</span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Week 5: Memory Hierarchy Visualization
export function Week5Illustration() {
    const [accessPattern, setAccessPattern] = useState<'sequential' | 'random'>('sequential');
    const [currentAddress, setCurrentAddress] = useState(0);
    const [cacheHits, setCacheHits] = useState(0);
    const [cacheMisses, setCacheMisses] = useState(0);

    const memoryLevels = [
        { name: 'CPU', size: '64 Registers', speed: '1 cycle', color: 'bg-red-500', width: '40%' },
        { name: 'L1', size: '32 KB', speed: '1-3 cycles', color: 'bg-orange-500', width: '55%' },
        { name: 'L2', size: '256 KB', speed: '10-20 cycles', color: 'bg-yellow-500', width: '70%' },
        { name: 'L3', size: '8 MB', speed: '30-50 cycles', color: 'bg-green-500', width: '85%' },
        { name: 'RAM', size: '16 GB', speed: '100-300 cycles', color: 'bg-blue-500', width: '100%' },
        { name: 'Storage', size: '1 TB', speed: '10K+ cycles', color: 'bg-purple-500', width: '100%' },
    ];

    const simulateAccess = () => {
        const isHit = Math.random() > (accessPattern === 'random' ? 0.7 : 0.3);
        if (isHit) {
            setCacheHits(prev => prev + 1);
        } else {
            setCacheMisses(prev => prev + 1);
        }
        setCurrentAddress(prev => accessPattern === 'sequential' ? prev + 4 : Math.floor(Math.random() * 1000));
    };

    const hitRate = cacheHits + cacheMisses > 0 ? (cacheHits / (cacheHits + cacheMisses) * 100).toFixed(1) : 0;

    return (
        <div className="relative h-[400px] sm:h-[450px] lg:h-[500px] w-full rounded-xl bg-gradient-to-br from-zinc-900 to-zinc-950 overflow-visible border border-zinc-800 p-3 sm:p-4">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-yellow-500/5 to-blue-500/5"></div>
            
            <div className="relative z-10 h-full flex flex-col">
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-2 text-center">Memory Hierarchy</h3>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 flex-1 min-h-0">
                    {/* Memory Levels */}
                    <div className="flex flex-col justify-center overflow-visible">
                        <div className="w-full max-w-[320px] mx-auto space-y-3 px-4">
                            {memoryLevels.map((level, index) => (
                                <div 
                                    key={level.name} 
                                    className={`${level.color} py-3 px-4 rounded-lg text-white transition-all hover:scale-105 mx-auto shadow-lg`}
                                    style={{ width: level.width, minWidth: '120px' }}
                                >
                                    <div className="text-center">
                                        <div className="font-bold text-sm leading-tight">{level.name}</div>
                                        <div className="text-xs opacity-90 leading-tight mt-1">{level.speed}</div>
                                        <div className="text-xs opacity-75 leading-tight">{level.size}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Cache Simulation */}
                    <div className="space-y-2 flex flex-col min-h-0">
                        <div className="space-y-1.5">
                            <h4 className="text-sm font-semibold text-blue-400">Cache Simulation</h4>
                            <div className="flex gap-1.5">
                                <button
                                    onClick={() => setAccessPattern('sequential')}
                                    className={`px-2 py-1.5 rounded text-xs ${
                                        accessPattern === 'sequential' ? 'bg-blue-600 text-white' : 'bg-zinc-800 text-zinc-400'
                                    }`}
                                >
                                    Sequential
                                </button>
                                <button
                                    onClick={() => setAccessPattern('random')}
                                    className={`px-2 py-1.5 rounded text-xs ${
                                        accessPattern === 'random' ? 'bg-blue-600 text-white' : 'bg-zinc-800 text-zinc-400'
                                    }`}
                                >
                                    Random
                                </button>
                            </div>
                        </div>

                        <div className="bg-zinc-800/50 p-2 rounded-lg space-y-1.5 flex-shrink-0">
                            <div className="text-xs">
                                <span className="text-zinc-400">Address:</span>
                                <span className="font-mono text-green-400 ml-1">0x{currentAddress.toString(16).padStart(4, '0')}</span>
                            </div>
                            <div className="text-xs">
                                <span className="text-zinc-400">Hit Rate:</span>
                                <span className="font-mono text-yellow-400 ml-1">{hitRate}%</span>
                            </div>
                            <div className="grid grid-cols-2 gap-1.5 text-xs">
                                <div>Hits: <span className="text-green-400">{cacheHits}</span></div>
                                <div>Misses: <span className="text-red-400">{cacheMisses}</span></div>
                            </div>
                        </div>

                        <div className="space-y-1.5 flex-shrink-0">
                            <button
                                onClick={simulateAccess}
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-1.5 px-3 rounded text-xs transition-all"
                            >
                                Memory Access
                            </button>

                            <button
                                onClick={() => {
                                    setCacheHits(0);
                                    setCacheMisses(0);
                                    setCurrentAddress(0);
                                }}
                                className="w-full bg-zinc-600 hover:bg-zinc-700 text-white py-1.5 px-3 rounded text-xs transition-all"
                            >
                                Reset
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Week 6: CPU Pipeline Visualization
export function Week6Illustration() {
    const [isRunning, setIsRunning] = useState(false);
    const [cycle, setCycle] = useState(0);
    const [instructions, setInstructions] = useState([
        'ADD R1, R2, R3',
        'SUB R4, R1, R5',
        'MUL R6, R4, R7',
        'OR R8, R6, R9'
    ]);

    const stages = ['IF', 'ID', 'EX', 'MEM', 'WB'];
    const stageColors = ['bg-red-500', 'bg-orange-500', 'bg-yellow-500', 'bg-green-500', 'bg-blue-500'];

    const getPipelineState = () => {
        const state: { [key: string]: string } = {};
        instructions.forEach((instr, instrIndex) => {
            const startCycle = instrIndex;
            stages.forEach((stage, stageIndex) => {
                const stageCycle = startCycle + stageIndex;
                if (stageCycle === cycle) {
                    state[stage] = instr;
                }
            });
        });
        return state;
    };

    const nextCycle = () => {
        setCycle(prev => (prev + 1) % 12);
    };

    const toggleRunning = () => {
        setIsRunning(!isRunning);
    };

    // Auto-advance when running
    React.useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isRunning) {
            interval = setInterval(nextCycle, 1000);
        }
        return () => clearInterval(interval);
    }, [isRunning]);

    const pipelineState = getPipelineState();

    return (
        <div className="relative h-[400px] sm:h-[450px] lg:h-[500px] w-full rounded-xl bg-gradient-to-br from-zinc-900 to-zinc-950 overflow-hidden border border-zinc-800 p-4 sm:p-6">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-yellow-500/5 to-blue-500/5"></div>
            
            <div className="relative z-10 h-full flex flex-col">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-4 text-center">CPU Pipeline</h3>
                
                <div className="flex justify-center gap-4 mb-6">
                    <button
                        onClick={toggleRunning}
                        className={`px-4 py-2 rounded-lg transition-all ${
                            isRunning ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700'
                        } text-white`}
                    >
                        {isRunning ? 'Pause' : 'Run'}
                    </button>
                    <button
                        onClick={nextCycle}
                        disabled={isRunning}
                        className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 disabled:bg-zinc-600 text-white transition-all"
                    >
                        Next Cycle
                    </button>
                    <div className="flex items-center text-white">
                        <span className="text-sm">Cycle: {cycle}</span>
                    </div>
                </div>

                <div className="grid grid-cols-5 gap-2 sm:gap-4 flex-1">
                    {stages.map((stage, index) => (
                        <div key={stage} className="flex flex-col items-center">
                            <div className={`${stageColors[index]} text-white p-2 sm:p-3 rounded-lg mb-2 w-full text-center`}>
                                <div className="font-bold text-sm sm:text-base">{stage}</div>
                                <div className="text-xs opacity-75">
                                    {stage === 'IF' && 'Fetch'}
                                    {stage === 'ID' && 'Decode'}
                                    {stage === 'EX' && 'Execute'}
                                    {stage === 'MEM' && 'Memory'}
                                    {stage === 'WB' && 'Write Back'}
                                </div>
                            </div>
                            
                            <div className="bg-zinc-800/50 p-2 rounded-lg h-20 w-full flex items-center justify-center">
                                {pipelineState[stage] ? (
                                    <div className="text-center">
                                        <div className="text-xs text-zinc-400 mb-1">Instruction:</div>
                                        <div className="text-xs font-mono text-white break-all">
                                            {pipelineState[stage]}
                                        </div>
                                    </div>
                                ) : (
                                    <div className="text-zinc-600 text-xs">Empty</div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-4 text-center text-sm text-zinc-400">
                    Pipeline allows multiple instructions to execute simultaneously in different stages
                </div>
            </div>
        </div>
    );
}

// Week 7: Cache Organization Visualization
export function Week7Illustration() {
    const [cacheType, setCacheType] = useState<'direct' | 'associative' | 'set-associative'>('direct');
    const [memoryAddress, setMemoryAddress] = useState('0x1A4C');
    const [cacheState, setCacheState] = useState<{ [key: string]: { tag: string, data: string, valid: boolean } }>({});

    const parseAddress = (addr: string) => {
        const address = parseInt(addr, 16);
        const blockOffset = address & 0x3; // 2 bits
        const index = (address >> 2) & 0x7; // 3 bits
        const tag = address >> 5; // remaining bits
        return { address, blockOffset, index, tag };
    };

    const simulateAccess = () => {
        const { index, tag } = parseAddress(memoryAddress);
        const cacheKey = `${index}`;
        
        if (cacheState[cacheKey] && cacheState[cacheKey].valid && cacheState[cacheKey].tag === tag.toString(16)) {
            // Cache hit - just highlight
            return;
        } else {
            // Cache miss - load new data
            setCacheState(prev => ({
                ...prev,
                [cacheKey]: {
                    tag: tag.toString(16),
                    data: `Data_${tag.toString(16)}`,
                    valid: true
                }
            }));
        }
    };

    const { blockOffset, index, tag } = parseAddress(memoryAddress);

    return (
        <div className="relative h-[400px] sm:h-[450px] lg:h-[500px] w-full rounded-xl bg-gradient-to-br from-zinc-900 to-zinc-950 overflow-hidden border border-zinc-800 p-4 sm:p-6">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-blue-500/5 to-cyan-500/5"></div>
            
            <div className="relative z-10 h-full flex flex-col">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-4 text-center">Cache Organization</h3>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 flex-1">
                    {/* Address Breakdown */}
                    <div className="space-y-4">
                        <h4 className="text-base sm:text-lg font-semibold text-purple-400">Memory Address</h4>
                        
                        <div className="space-y-2">
                            <input
                                type="text"
                                value={memoryAddress}
                                onChange={(e) => setMemoryAddress(e.target.value)}
                                className="w-full bg-zinc-700 text-white text-center rounded px-3 py-2 font-mono"
                                placeholder="0x1A4C"
                            />
                            
                            <div className="bg-zinc-800/50 p-3 rounded-lg space-y-2">
                                <div className="text-sm">
                                    <span className="text-zinc-400">Tag:</span>
                                    <span className="font-mono text-red-400 ml-2">0x{tag.toString(16)}</span>
                                </div>
                                <div className="text-sm">
                                    <span className="text-zinc-400">Index:</span>
                                    <span className="font-mono text-yellow-400 ml-2">{index}</span>
                                </div>
                                <div className="text-sm">
                                    <span className="text-zinc-400">Offset:</span>
                                    <span className="font-mono text-green-400 ml-2">{blockOffset}</span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <h5 className="text-sm font-semibold text-blue-400">Cache Type</h5>
                            <div className="grid grid-cols-1 gap-2">
                                {['direct', 'associative', 'set-associative'].map((type) => (
                                    <button
                                        key={type}
                                        onClick={() => setCacheType(type as any)}
                                        className={`px-3 py-2 rounded text-sm capitalize ${
                                            cacheType === type ? 'bg-blue-600 text-white' : 'bg-zinc-800 text-zinc-400'
                                        }`}
                                    >
                                        {type.replace('-', ' ')}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <button
                            onClick={simulateAccess}
                            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg transition-all"
                        >
                            Access Memory
                        </button>
                    </div>

                    {/* Cache Visualization */}
                    <div className="space-y-4">
                        <h4 className="text-base sm:text-lg font-semibold text-cyan-400">Cache Contents</h4>
                        
                        <div className="space-y-2 max-h-64 overflow-y-auto">
                            {Array.from({ length: 8 }, (_, i) => {
                                const cacheEntry = cacheState[i.toString()];
                                const isCurrentIndex = i === index;
                                
                                return (
                                    <div
                                        key={i}
                                        className={`p-2 rounded-lg border ${
                                            isCurrentIndex 
                                                ? 'border-yellow-500 bg-yellow-500/10' 
                                                : 'border-zinc-700 bg-zinc-800/30'
                                        }`}
                                    >
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-zinc-400">Index {i}:</span>
                                            <div className="flex gap-2">
                                                {cacheEntry?.valid ? (
                                                    <>
                                                        <span className="text-green-400">V</span>
                                                        <span className="font-mono text-red-400">Tag: {cacheEntry.tag}</span>
                                                        <span className="font-mono text-blue-400">{cacheEntry.data}</span>
                                                    </>
                                                ) : (
                                                    <span className="text-zinc-600">Empty</span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="bg-zinc-800/50 p-3 rounded-lg">
                            <div className="text-xs text-zinc-400 mb-2">Cache Status:</div>
                            <div className="text-sm">
                                {cacheState[index.toString()]?.valid && cacheState[index.toString()]?.tag === tag.toString(16)
                                    ? <span className="text-green-400">✓ Cache Hit</span>
                                    : <span className="text-red-400">✗ Cache Miss</span>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Week 8: Assembly Language Visualization
export function Week8Illustration() {
    const [program, setProgram] = useState([
        'MOV R1, #5',
        'MOV R2, #3', 
        'ADD R3, R1, R2',
        'CMP R3, #8',
        'BEQ end',
        'SUB R3, R3, #1',
        'end: HALT'
    ]);
    const [pc, setPc] = useState(0);
    const [registers, setRegisters] = useState({ R1: 0, R2: 0, R3: 0 });
    const [flags, setFlags] = useState({ Z: false, N: false, C: false, V: false });
    const [isRunning, setIsRunning] = useState(false);

    const executeInstruction = () => {
        if (pc >= program.length) return;
        
        const instruction = program[pc];
        const parts = instruction.split(/[,\s]+/);
        const opcode = parts[0];

        switch (opcode) {
            case 'MOV':
                if (parts[2].startsWith('#')) {
                    const value = parseInt(parts[2].substring(1));
                    setRegisters(prev => ({ ...prev, [parts[1]]: value }));
                }
                break;
            case 'ADD':
                const sum = registers[parts[2] as keyof typeof registers] + registers[parts[3] as keyof typeof registers];
                setRegisters(prev => ({ ...prev, [parts[1]]: sum }));
                setFlags(prev => ({ ...prev, Z: sum === 0, N: sum < 0 }));
                break;
            case 'SUB':
                const diff = registers[parts[1] as keyof typeof registers] - parseInt(parts[3].substring(1));
                setRegisters(prev => ({ ...prev, [parts[1]]: diff }));
                setFlags(prev => ({ ...prev, Z: diff === 0, N: diff < 0 }));
                break;
            case 'CMP':
                const reg = registers[parts[1] as keyof typeof registers];
                const val = parseInt(parts[2].substring(1));
                setFlags(prev => ({ ...prev, Z: reg === val, N: reg < val }));
                break;
            case 'BEQ':
                if (flags.Z) {
                    const label = parts[1];
                    const labelIndex = program.findIndex(line => line.startsWith(label + ':'));
                    if (labelIndex !== -1) {
                        setPc(labelIndex);
                        return;
                    }
                }
                break;
            case 'HALT':
                setIsRunning(false);
                return;
        }
        
        setPc(prev => prev + 1);
    };

    const reset = () => {
        setPc(0);
        setRegisters({ R1: 0, R2: 0, R3: 0 });
        setFlags({ Z: false, N: false, C: false, V: false });
        setIsRunning(false);
    };

    const step = () => {
        if (!isRunning) setIsRunning(true);
        executeInstruction();
    };

    return (
        <div className="relative h-[400px] sm:h-[450px] lg:h-[500px] w-full rounded-xl bg-gradient-to-br from-zinc-900 to-zinc-950 overflow-hidden border border-zinc-800 p-4 sm:p-6">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-cyan-500/5 to-blue-500/5"></div>
            
            <div className="relative z-10 h-full flex flex-col">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-4 text-center">Assembly Language Simulator</h3>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 flex-1">
                    {/* Program Code */}
                    <div className="space-y-2">
                        <h4 className="text-base font-semibold text-green-400">Program</h4>
                        <div className="bg-zinc-800/50 p-2 rounded-lg space-y-1 max-h-48 overflow-y-auto">
                            {program.map((line, index) => (
                                <div
                                    key={index}
                                    className={`text-xs font-mono p-1 rounded ${
                                        index === pc ? 'bg-yellow-500/20 text-yellow-400' : 'text-zinc-300'
                                    }`}
                                >
                                    <span className="text-zinc-500 mr-2">{index}:</span>
                                    {line}
                                </div>
                            ))}
                        </div>
                        
                        <div className="flex gap-2">
                            <button
                                onClick={step}
                                className="flex-1 bg-green-600 hover:bg-green-700 text-white py-1 px-2 rounded text-sm transition-all"
                            >
                                Step
                            </button>
                            <button
                                onClick={reset}
                                className="flex-1 bg-zinc-600 hover:bg-zinc-700 text-white py-1 px-2 rounded text-sm transition-all"
                            >
                                Reset
                            </button>
                        </div>
                    </div>

                    {/* Registers */}
                    <div className="space-y-2">
                        <h4 className="text-base font-semibold text-blue-400">Registers</h4>
                        <div className="space-y-2">
                            <div className="bg-zinc-800/50 p-2 rounded-lg">
                                <div className="text-xs text-zinc-400 mb-1">PC (Program Counter)</div>
                                <div className="font-mono text-yellow-400">{pc}</div>
                            </div>
                            {Object.entries(registers).map(([reg, value]) => (
                                <div key={reg} className="bg-zinc-800/50 p-2 rounded-lg">
                                    <div className="text-xs text-zinc-400 mb-1">{reg}</div>
                                    <div className="font-mono text-cyan-400">{value}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Flags */}
                    <div className="space-y-2">
                        <h4 className="text-base font-semibold text-purple-400">Status Flags</h4>
                        <div className="grid grid-cols-2 gap-2">
                            {Object.entries(flags).map(([flag, value]) => (
                                <div key={flag} className="bg-zinc-800/50 p-2 rounded-lg text-center">
                                    <div className="text-xs text-zinc-400 mb-1">{flag}</div>
                                    <div className={`font-mono ${value ? 'text-green-400' : 'text-red-400'}`}>
                                        {value ? '1' : '0'}
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        <div className="bg-zinc-800/50 p-2 rounded-lg">
                            <div className="text-xs text-zinc-400 mb-1">Status</div>
                            <div className={`text-xs ${isRunning ? 'text-green-400' : 'text-red-400'}`}>
                                {isRunning ? 'Running' : 'Stopped'}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}