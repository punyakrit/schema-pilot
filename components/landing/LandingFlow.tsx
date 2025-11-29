"use client"
import React, { useState } from "react";
import { ReactFlow } from "@xyflow/react";
import '@xyflow/react/dist/style.css';

function LandingFlow() {
    const initialNodes = [
        { id: 'n1', position: { x: 0, y: 0 }, data: { label: 'User' }, style: { background: '#18181b', color: '#fff', border: '1px solid #27272a', borderRadius: '8px', padding: '10px', minWidth: '100px', textAlign: 'center' } },
        { id: 'n2', position: { x: 200, y: 100 }, data: { label: 'Post' }, style: { background: '#18181b', color: '#fff', border: '1px solid #27272a', borderRadius: '8px', padding: '10px', minWidth: '100px', textAlign: 'center' } },
        { id: 'n3', position: { x: 0, y: 200 }, data: { label: 'Profile' }, style: { background: '#18181b', color: '#fff', border: '1px solid #27272a', borderRadius: '8px', padding: '10px', minWidth: '100px', textAlign: 'center' } },
      ];
      const initialEdges = [
        { id: 'e1-2', source: 'n1', target: 'n2', animated: true, style: { stroke: '#52525b' } },
        { id: 'e1-3', source: 'n1', target: 'n3', style: { stroke: '#52525b' } }
      ];

      const [nodes] = useState<any[]>(initialNodes);
      const [edges] = useState(initialEdges);
 
  return (
    <div className="h-full w-full bg-zinc-950/50 rounded-xl border border-border overflow-hidden">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
        proOptions={{ hideAttribution: true }}
        panOnScroll={false}
        zoomOnScroll={false}
        panOnDrag={false}
        nodesDraggable={false}
      />
    </div>
  );
}

export default LandingFlow;
