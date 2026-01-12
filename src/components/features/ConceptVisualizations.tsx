"use client";

import { useState } from "react";
import React from "react";

// Week 1 Concept Visualizations
export function ArchitectureVsOrganizationViz() {
    const [selectedLayer, setSelectedLayer] = useState<'architecture' | 'organization' | null>(null);

    return (
        <div className="relative w-full rounded-lg bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 p-6 overflow-visible">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-green-500/5 rounded-lg"></div>
            
            <div className="relative z-10 space-y-6">
                <h4 className="text-xl font-bold text-white text-center">Architecture vs Organization</h4>
                
                <div className="flex flex-col gap-4 w-full max-w-2xl mx-auto">
                    {/* Architecture Layer */}
                    <div 
                        className={`p-6 rounded-lg cursor-pointer transition-all duration-300 transform hover:scale-[1.02] ${
                            selectedLayer === 'architecture' 
                                ? 'bg-blue-600 ring-2 ring-blue-400 scale-[1.02]' 
                                : 'bg-blue-500/80 hover:bg-blue-500'
                        }`}
                        onClick={() => setSelectedLayer(selectedLayer === 'architecture' ? null : 'architecture')}
                    >
                        <div className="text-white font-semibold mb-2 text-lg">Architecture (Interface)</div>
                        <div className="text-blue-100">ISA, Registers, Instructions, Addressing</div>
                    </div>
                    
                    {/* Organization Layer */}
                    <div 
                        className={`p-6 rounded-lg cursor-pointer transition-all duration-300 transform hover:scale-[1.02] ${
                            selectedLayer === 'organization' 
                                ? 'bg-green-600 ring-2 ring-green-400 scale-[1.02]' 
                                : 'bg-green-500/80 hover:bg-green-500'
                        }`}
                        onClick={() => setSelectedLayer(selectedLayer === 'organization' ? null : 'organization')}
                    >
                        <div className="text-white font-semibold mb-2 text-lg">Organization (Implementation)</div>
                        <div className="text-green-100">Cache Size, Pipeline Depth, ALUs</div>
                    </div>
                </div>

                {selectedLayer && (
                    <div className="mt-6 p-4 bg-zinc-800/90 backdrop-blur rounded-lg border border-zinc-700 max-w-2xl mx-auto text-center animate-fade-in shadow-lg">
                        <p className="text-zinc-300">
                            {selectedLayer === 'architecture' 
                                ? "Like a car's steering wheel and pedals - the interface stays the same across different models"
                                : "Like the engine type - V6 vs V8 - different implementations of the same interface"
                            }
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

export function VonNeumannVsHarvardViz() {
    const [selectedArch, setSelectedArch] = useState<'vonneumann' | 'harvard' | null>(null);

    return (
        <div className="relative w-full rounded-lg bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 p-6 overflow-visible">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-red-500/5 to-pink-500/5 rounded-lg"></div>
            
            <div className="relative z-10 space-y-6">
                <h4 className="text-xl font-bold text-white text-center">Memory Architecture Types</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                    {/* Von Neumann */}
                    <div 
                        className={`p-6 rounded-lg cursor-pointer transition-all duration-300 transform hover:scale-[1.02] ${
                            selectedArch === 'vonneumann' 
                                ? 'bg-orange-600 ring-2 ring-orange-400 scale-[1.02]' 
                                : 'bg-orange-500/80 hover:bg-orange-500'
                        }`}
                        onClick={() => setSelectedArch(selectedArch === 'vonneumann' ? null : 'vonneumann')}
                    >
                        <div className="text-white font-semibold mb-4 text-center text-lg">Von Neumann</div>
                        <div className="flex flex-col items-center gap-3">
                            <div className="w-20 h-10 bg-orange-300 rounded flex items-center justify-center text-sm text-orange-900 font-semibold">Unified Memory</div>
                            <div className="w-3 h-6 bg-orange-400 rounded"></div>
                            <div className="w-16 h-8 bg-white/20 rounded flex items-center justify-center text-sm font-semibold">CPU</div>
                        </div>
                    </div>
                    
                    {/* Harvard */}
                    <div 
                        className={`p-6 rounded-lg cursor-pointer transition-all duration-300 transform hover:scale-[1.02] ${
                            selectedArch === 'harvard' 
                                ? 'bg-pink-600 ring-2 ring-pink-400 scale-[1.02]' 
                                : 'bg-pink-500/80 hover:bg-pink-500'
                        }`}
                        onClick={() => setSelectedArch(selectedArch === 'harvard' ? null : 'harvard')}
                    >
                        <div className="text-white font-semibold mb-4 text-center text-lg">Harvard</div>
                        <div className="flex flex-col items-center gap-3">
                            <div className="flex gap-2">
                                <div className="w-9 h-8 bg-pink-300 rounded flex items-center justify-center text-xs text-pink-900 font-semibold">Inst</div>
                                <div className="w-9 h-8 bg-pink-300 rounded flex items-center justify-center text-xs text-pink-900 font-semibold">Data</div>
                            </div>
                            <div className="flex gap-2">
                                <div className="w-1.5 h-6 bg-pink-400 rounded"></div>
                                <div className="w-1.5 h-6 bg-pink-400 rounded"></div>
                            </div>
                            <div className="w-16 h-8 bg-white/20 rounded flex items-center justify-center text-sm font-semibold">CPU</div>
                        </div>
                    </div>
                </div>

                {selectedArch && (
                    <div className="mt-6 p-4 bg-zinc-800/90 backdrop-blur rounded-lg border border-zinc-700 max-w-2xl mx-auto text-center animate-fade-in shadow-lg">
                        <p className="text-zinc-300">
                            {selectedArch === 'vonneumann' 
                                ? "One library with both books and manuals - flexible but can get crowded"
                                : "Separate libraries for books and manuals - faster access but more complex"
                            }
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

export function CPUComponentsViz() {
    const [activeComponent, setActiveComponent] = useState<string | null>(null);

    const components = [
        { id: 'alu', name: 'ALU', color: 'bg-blue-500', description: 'Arithmetic Logic Unit - The calculator of the CPU' },
        { id: 'fpu', name: 'FPU', color: 'bg-green-500', description: 'Floating Point Unit - Handles decimal numbers' },
        { id: 'control', name: 'Control Unit', color: 'bg-purple-500', description: 'The conductor - coordinates all operations' },
        { id: 'registers', name: 'Registers', color: 'bg-orange-500', description: 'Fast temporary storage - the CPU\'s desk' }
    ];

    return (
        <div className="relative w-full rounded-lg bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 p-6 overflow-visible">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-green-500/5 rounded-lg"></div>
            
            <div className="relative z-10 space-y-6">
                <h4 className="text-xl font-bold text-white text-center">CPU Components</h4>
                
                <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto">
                    {components.map((component) => (
                        <div
                            key={component.id}
                            className={`relative p-4 rounded-lg cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                                component.color
                            } ${
                                activeComponent === component.id ? 'ring-2 ring-white/50 scale-105' : 'hover:shadow-lg'
                            }`}
                            onClick={() => setActiveComponent(activeComponent === component.id ? null : component.id)}
                        >
                            <div className="text-center">
                                <div className="w-12 h-12 bg-white/20 rounded-lg mx-auto mb-3 flex items-center justify-center">
                                    <span className="text-white font-bold text-lg">{component.name[0]}</span>
                                </div>
                                <h5 className="text-white font-semibold">{component.name}</h5>
                            </div>
                        </div>
                    ))}
                </div>

                {activeComponent && (
                    <div className="mt-6 p-4 bg-zinc-800/90 backdrop-blur rounded-lg border border-zinc-700 max-w-2xl mx-auto text-center animate-fade-in shadow-lg">
                        <p className="text-zinc-300">
                            {components.find(c => c.id === activeComponent)?.description}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

export function MemoryHierarchyViz() {
    const [selectedLevel, setSelectedLevel] = useState<number | null>(null);

    const levels = [
        { name: 'Registers', size: '32-64 entries', speed: '1 cycle', color: 'bg-red-500', widthPercent: '20%' },
        { name: 'L1 Cache', size: '32-64 KB', speed: '1-3 cycles', color: 'bg-orange-500', widthPercent: '35%' },
        { name: 'L2 Cache', size: '256 KB-1 MB', speed: '10-20 cycles', color: 'bg-yellow-500', widthPercent: '50%' },
        { name: 'L3 Cache', size: '8-32 MB', speed: '30-50 cycles', color: 'bg-green-500', widthPercent: '65%' },
        { name: 'Main Memory', size: 'GB', speed: '100-300 cycles', color: 'bg-blue-500', widthPercent: '80%' },
        { name: 'Storage', size: 'TB', speed: '10K+ cycles', color: 'bg-purple-500', widthPercent: '100%' }
    ];

    return (
        <div className="relative w-full rounded-lg bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 p-6 overflow-visible">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-yellow-500/5 to-blue-500/5 rounded-lg"></div>
            
            <div className="relative z-10 space-y-6">
                <h4 className="text-xl font-bold text-white text-center">Memory Hierarchy</h4>
                
                <div className="flex flex-col items-center gap-2 w-full max-w-lg mx-auto">
                    {levels.map((level, index) => (
                        <div
                            key={index}
                            className={`${level.color} h-10 rounded cursor-pointer transition-all duration-300 hover:scale-105 flex items-center justify-center transform ${
                                selectedLevel === index ? 'ring-2 ring-white/50 scale-105' : ''
                            }`}
                            style={{ width: level.widthPercent }}
                            onClick={() => setSelectedLevel(selectedLevel === index ? null : index)}
                        >
                            <span className="text-white font-semibold text-sm">{level.name}</span>
                        </div>
                    ))}
                </div>

                {selectedLevel !== null && (
                    <div className="mt-6 p-4 bg-zinc-800/90 backdrop-blur rounded-lg border border-zinc-700 max-w-2xl mx-auto text-center animate-fade-in shadow-lg">
                        <div className="text-zinc-300">
                            <div className="font-semibold text-lg mb-2">{levels[selectedLevel].name}</div>
                            <div>Size: {levels[selectedLevel].size}</div>
                            <div>Speed: {levels[selectedLevel].speed}</div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

// Week 2 Concept Visualizations
export function NumberSystemsViz() {
    const [selectedBase, setSelectedBase] = useState<number>(10);
    const [number, setNumber] = useState<number>(42);

    const bases = [
        { base: 2, name: 'Binary', color: 'bg-green-500' },
        { base: 8, name: 'Octal', color: 'bg-blue-500' },
        { base: 10, name: 'Decimal', color: 'bg-purple-500' },
        { base: 16, name: 'Hex', color: 'bg-orange-500' }
    ];

    const convertToBase = (num: number, base: number) => {
        return num.toString(base).toUpperCase();
    };

    return (
        <div className="relative w-full rounded-lg bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 p-6 overflow-visible">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-blue-500/5 to-purple-500/5 rounded-lg"></div>
            
            <div className="relative z-10 space-y-6">
                <h4 className="text-xl font-bold text-white text-center">Number System Converter</h4>
                
                <div className="text-center">
                    <label className="text-zinc-400 text-sm block mb-2">Enter a number (0-255):</label>
                    <input
                        type="number"
                        value={number}
                        onChange={(e) => setNumber(parseInt(e.target.value) || 0)}
                        className="w-24 bg-zinc-700 text-white text-center rounded px-3 py-2 text-lg font-mono border border-zinc-600 focus:border-indigo-500 focus:outline-none"
                        min="0"
                        max="255"
                    />
                </div>

                <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto">
                    {bases.map((base) => (
                        <div
                            key={base.base}
                            className={`p-4 rounded-lg cursor-pointer transition-all duration-300 transform hover:scale-[1.02] ${
                                selectedBase === base.base 
                                    ? `${base.color} ring-2 ring-white/50 scale-[1.02]` 
                                    : `${base.color}/80 hover:${base.color}`
                            }`}
                            onClick={() => setSelectedBase(base.base)}
                        >
                            <div className="text-center">
                                <div className="text-white font-semibold mb-2">{base.name}</div>
                                <div className="text-white/90 font-mono text-2xl mb-1">{convertToBase(number, base.base)}</div>
                                <div className="text-white/70 text-sm">Base {base.base}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export function BinaryArithmeticViz() {
    const [operation, setOperation] = useState<'add' | 'subtract'>('add');
    const [num1, setNum1] = useState<number>(5);
    const [num2, setNum2] = useState<number>(3);

    const getBinary = (num: number) => num.toString(2).padStart(4, '0');
    const result = operation === 'add' ? num1 + num2 : Math.max(0, num1 - num2);

    return (
        <div className="relative w-full rounded-lg bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 p-6 overflow-visible">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-green-500/5 to-purple-500/5 rounded-lg"></div>
            
            <div className="relative z-10 space-y-6">
                <h4 className="text-xl font-bold text-white text-center">Binary Arithmetic</h4>
                
                <div className="flex justify-center gap-3">
                    <button
                        onClick={() => setOperation('add')}
                        className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                            operation === 'add' 
                                ? 'bg-blue-600 text-white ring-2 ring-blue-400' 
                                : 'bg-zinc-700 text-zinc-400 hover:bg-zinc-600'
                        }`}
                    >
                        Addition
                    </button>
                    <button
                        onClick={() => setOperation('subtract')}
                        className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                            operation === 'subtract' 
                                ? 'bg-blue-600 text-white ring-2 ring-blue-400' 
                                : 'bg-zinc-700 text-zinc-400 hover:bg-zinc-600'
                        }`}
                    >
                        Subtraction
                    </button>
                </div>

                <div className="space-y-4 max-w-md mx-auto">
                    <div className="flex items-center justify-between bg-zinc-800/50 p-4 rounded-lg">
                        <input
                            type="number"
                            value={num1}
                            onChange={(e) => setNum1(Math.max(0, Math.min(15, parseInt(e.target.value) || 0)))}
                            className="w-16 bg-zinc-700 text-white text-center rounded px-2 py-1 font-mono"
                            min="0"
                            max="15"
                        />
                        <span className="text-white font-mono text-xl">{getBinary(num1)}</span>
                    </div>
                    
                    <div className="flex items-center justify-between bg-zinc-800/50 p-4 rounded-lg">
                        <div className="w-16 text-center text-white text-xl font-bold">
                            {operation === 'add' ? '+' : '-'}
                        </div>
                        <input
                            type="number"
                            value={num2}
                            onChange={(e) => setNum2(Math.max(0, Math.min(15, parseInt(e.target.value) || 0)))}
                            className="w-16 bg-zinc-700 text-white text-center rounded px-2 py-1 font-mono"
                            min="0"
                            max="15"
                        />
                        <span className="text-white font-mono text-xl">{getBinary(num2)}</span>
                    </div>
                    
                    <div className="border-t-2 border-zinc-600 pt-4">
                        <div className="flex items-center justify-between bg-green-900/30 p-4 rounded-lg border border-green-700">
                            <div className="w-16 text-center text-green-400 font-bold text-xl">{result}</div>
                            <span className="text-green-400 font-mono text-xl font-bold">{getBinary(result)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function SignedNumbersViz() {
    const [representation, setRepresentation] = useState<'sign-mag' | 'ones-comp' | 'twos-comp'>('twos-comp');
    const [number, setNumber] = useState<number>(-5);

    const getRepresentation = (num: number, type: string) => {
        const absNum = Math.abs(num);
        const binary = absNum.toString(2).padStart(7, '0');
        
        if (num >= 0) return '0' + binary;
        
        switch (type) {
            case 'sign-mag':
                return '1' + binary;
            case 'ones-comp':
                return binary.split('').map(b => b === '0' ? '1' : '0').join('').padStart(8, '1');
            case 'twos-comp':
                const onesComp = binary.split('').map(b => b === '0' ? '1' : '0').join('');
                const twosComp = (parseInt(onesComp, 2) + 1).toString(2).padStart(8, '1');
                return twosComp;
            default:
                return '00000000';
        }
    };

    const representations = [
        { key: 'sign-mag', name: 'Sign-Magnitude', color: 'bg-red-500' },
        { key: 'ones-comp', name: "One's Complement", color: 'bg-orange-500' },
        { key: 'twos-comp', name: "Two's Complement", color: 'bg-green-500' }
    ];

    return (
        <div className="relative h-[300px] w-full rounded-lg bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 p-4 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-orange-500/5 to-green-500/5"></div>
            
            <div className="relative z-10 h-full flex flex-col items-center justify-center">
                <h4 className="text-lg font-bold text-white mb-4 text-center">Signed Number Representations</h4>
                
                <div className="mb-4">
                    <input
                        type="number"
                        value={number}
                        onChange={(e) => setNumber(Math.max(-127, Math.min(127, parseInt(e.target.value) || 0)))}
                        className="w-16 bg-zinc-700 text-white text-center rounded px-2 py-1 text-sm"
                        min="-127"
                        max="127"
                    />
                </div>

                <div className="space-y-2 w-full max-w-sm">
                    {representations.map((rep) => (
                        <div
                            key={rep.key}
                            className={`p-3 rounded-lg cursor-pointer transition-all duration-300 ${
                                representation === rep.key 
                                    ? `${rep.color} ring-2 ring-white/50` 
                                    : `${rep.color}/80 hover:${rep.color}`
                            }`}
                            onClick={() => setRepresentation(rep.key as any)}
                        >
                            <div className="flex justify-between items-center">
                                <span className="text-white font-semibold text-sm">{rep.name}</span>
                                <span className="text-white font-mono text-sm">{getRepresentation(number, rep.key)}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

// Week 3 Concept Visualizations
export function BooleanAlgebraViz() {
    const [inputA, setInputA] = useState<boolean>(true);
    const [inputB, setInputB] = useState<boolean>(false);

    const operations = [
        { name: 'AND', symbol: '∧', operation: (a: boolean, b: boolean) => a && b, color: 'bg-blue-500' },
        { name: 'OR', symbol: '∨', operation: (a: boolean, b: boolean) => a || b, color: 'bg-green-500' },
        { name: 'NOT A', symbol: '¬A', operation: (a: boolean, _b: boolean) => !a, color: 'bg-red-500' },
        { name: 'XOR', symbol: '⊕', operation: (a: boolean, b: boolean) => a !== b, color: 'bg-purple-500' }
    ];

    return (
        <div className="relative w-full rounded-lg bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 p-6 overflow-visible">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-green-500/5 to-purple-500/5 rounded-lg"></div>
            
            <div className="relative z-10 space-y-6">
                <h4 className="text-xl font-bold text-white text-center">Boolean Operations</h4>
                
                <div className="flex justify-center gap-6">
                    <div className="flex items-center gap-3">
                        <span className="text-white font-semibold">A:</span>
                        <button
                            onClick={() => setInputA(!inputA)}
                            className={`w-12 h-12 rounded-full font-bold text-lg transition-all transform hover:scale-110 ${
                                inputA ? 'bg-green-500 text-white shadow-lg shadow-green-500/30' : 'bg-red-500 text-white shadow-lg shadow-red-500/30'
                            }`}
                        >
                            {inputA ? '1' : '0'}
                        </button>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="text-white font-semibold">B:</span>
                        <button
                            onClick={() => setInputB(!inputB)}
                            className={`w-12 h-12 rounded-full font-bold text-lg transition-all transform hover:scale-110 ${
                                inputB ? 'bg-green-500 text-white shadow-lg shadow-green-500/30' : 'bg-red-500 text-white shadow-lg shadow-red-500/30'
                            }`}
                        >
                            {inputB ? '1' : '0'}
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto">
                    {operations.map((op) => {
                        const result = op.name === 'NOT A' ? op.operation(inputA, inputB) : op.operation(inputA, inputB);
                        return (
                            <div key={op.name} className={`${op.color} p-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02]`}>
                                <div className="text-center">
                                    <div className="text-white font-semibold mb-2">{op.name}</div>
                                    <div className="text-white/90 text-2xl mb-3">{op.symbol}</div>
                                    <div className={`w-12 h-12 rounded-full mx-auto font-bold flex items-center justify-center text-lg transition-all ${
                                        result ? 'bg-green-300 text-green-800 shadow-lg' : 'bg-red-300 text-red-800 shadow-lg'
                                    }`}>
                                        {result ? '1' : '0'}
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

// Concept Visualization Selector Component
interface ConceptVisualizationProps {
    weekNumber: number;
    conceptIndex: number;
}

export function ConceptVisualization({ weekNumber, conceptIndex }: ConceptVisualizationProps) {
    // Week 1 visualizations
    if (weekNumber === 1) {
        switch (conceptIndex) {
            case 0: return <ArchitectureVsOrganizationViz />;
            case 1: return <VonNeumannVsHarvardViz />;
            case 2: return <CPUComponentsViz />;
            case 3: return <MemoryHierarchyViz />;
            default: return null;
        }
    }

    // Week 2 visualizations
    if (weekNumber === 2) {
        switch (conceptIndex) {
            case 0: return <NumberSystemsViz />;
            case 1: return <BinaryArithmeticViz />;
            case 2: return <SignedNumbersViz />;
            default: return null;
        }
    }

    // Week 3 visualizations
    if (weekNumber === 3) {
        switch (conceptIndex) {
            case 0: return <BooleanAlgebraViz />;
            default: return null;
        }
    }

    // Add more weeks as needed
    return null;
}