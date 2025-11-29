"use client"
import React, { useCallback, useState } from "react";
import { addEdge, applyEdgeChanges, applyNodeChanges, ReactFlow } from "@xyflow/react";
import '@xyflow/react/dist/style.css';

function LandingFlow() {
    const initialNodes = [
        { id: 'n1', position: { x: 0, y: 0 }, data: { label: 'Node 1' } },
        { id: 'n2', position: { x: 0, y: 100 }, data: { label: 'Node 2' } },
      ];
      const initialEdges = [{ id: 'n1-n2', source: 'n1', target: 'n2' }];

      const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);
 
 
  return (
    <div className="h-full w-full ">
      <ReactFlow
        nodes={nodes}
        edges={edges}
      
        fitView
        
      />
    </div>
  );
}

export default LandingFlow;
