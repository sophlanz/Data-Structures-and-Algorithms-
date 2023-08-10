
class FileNode { // similar idea with TrieNode
    constructor(content) {
        this.content = content;
        this.children = new Map();
        this.isFile = false;
    }
}

class FileSystem {
    constructor() {
        this.root = new FileNode();
    }
    
    ls(path) {
        const nodes = path.split('/');
        let curr = this.root;
        
        if (path === '/') {
            // Your output (file and directory names together) should in lexicographic order.
            return this.formatLexicographically([...curr.children.keys()]);
        }
        
        for (let i = 1; i < nodes.length; i++) {
            //  If it is a file path, return a list that only contains this file's name.
			//  we do an early return without going deep to its children
            if (curr.children.get(nodes[i]).isFile) {
                return [nodes[i]];
            }
            curr = curr.children.get(nodes[i]);
        }
        
        // Your output (file and directory names together) should in lexicographic order.
        return this.formatLexicographically([...curr.children.keys()]);
    }
    
    mkdir(path) {
        this.findNode(path);
    }
    
    addContentToFile(filePath, content){
        const node = this.findNode(filePath);
        
        //  If the file already exists, you need to append given content to original content. 
        node.content = node.content === undefined ? content : node.content + content;
        
        node.isFile = true;
    }
    
    readContentFromFile(filePath) {
        const node = this.findNode(filePath);
        return node.content;
    }
    
    // return the last node in the path. if the node doesn't exist, create one
    findNode(path) {
        const nodes = path.split('/');
        let curr = this.root; 

        for (let i = 1; i < nodes.length; i++) {
            if (!curr.children.has(nodes[i])) {
                curr.children.set(nodes[i], new FileNode());
            }
            curr = curr.children.get(nodes[i]);
        }
        return curr;
    }
    
    formatLexicographically(list) {
        return list.sort((a, b) => a.localeCompare(b));
    }
}

/** 
 * Your FileSystem object will be instantiated and called as such:
 * var obj = new FileSystem()
 * var param_1 = obj.ls(path)
 * obj.mkdir(path)
 * obj.addContentToFile(filePath,content)
 * var param_4 = obj.readContentFromFile(filePath)
 */