class Graph {
  
  constructor() {
    this.nodes = {};
  }
  
  addNode(node) {
    this.nodes[node] = { edges: {} };
  }
  
  contains(target) {
    const nodeList = Object.keys(this.nodes);
    
    for(let node of nodeList) {
      if(node === target.toString()) {
        return true;
      }
    }
    return false;
  }
  
  addEdge(fromNode, toNode) {
    if(this.contains(fromNode) && this.contains(toNode)) {
      this.nodes[fromNode].edges[toNode] = this.nodes[toNode];
      this.nodes[toNode].edges[fromNode] = this.nodes[fromNode];
    }
  }
  
  removeEdge(fromNode, toNode) {
    delete this.nodes[fromNode].edges[toNode];
    delete this.nodes[toNode].edges[fromNode];
  }
  
  removeNode(node) {
    if(this.contains(node)) {
      const nodeToRemove = this.nodes[node];
      
      for(let edge in nodeToRemove.edges) {
        this.removeEdge(nodeToRemove.edges[edge], nodeToRemove);
      }
      delete this.nodes[node];
    }
  }
  
  hasEdge(fromNode, toNode) {
    if(!this.contains(fromNode) || !this.contains(toNode)) {
      return false;
    }
    else {
      const nodesToCheck = Object.keys(this.nodes[fromNode].edges);
      
      for(let node of nodesToCheck) {
        if(toNode === node.toString()) {
          return true;
        }
      }
      return false;
    }
  }
  
  forEachNode(cb) {
    
    for(let node in this.nodes) {
      cb(node);
    }
  }
}