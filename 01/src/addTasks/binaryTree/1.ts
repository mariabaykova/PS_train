 class TreeNode1 {
      val: number
      left: TreeNode1 | null
      right: TreeNode1 | null
      constructor(val?: number, left?: TreeNode1 | null, right?: TreeNode1 | null) {
          this.val = (val===undefined ? 0 : val)
          this.left = (left===undefined ? null : left)
          this.right = (right===undefined ? null : right)
      }
  }


const tn = new TreeNode1( 1, new TreeNode1( 2, new TreeNode1(  3 ), new TreeNode1( 4, new TreeNode1(5), new TreeNode1(6) ) ) );
console.log(tn);
console.log(maxDepth(tn));

function maxDepth(root: TreeNode1 | null): number {
    let curDepth = 0;
    let maxDepth = 0;
    if (!root) {
        return maxDepth;
    }
    if (Object.entries(root).length === 0) {
        return maxDepth;
    }
    const queue = [{ depth: 1, node: root }];
    while (queue.length) {
        const top = queue.pop();
        if (!top.node?.left && !top.node?.right) {
            maxDepth = (maxDepth < top.depth) ? top.depth : maxDepth;
        }
        if (top.node?.left) {
            queue.push({ depth: top.depth + 1, node: top.node.left });
        }
        if (top.node?.right) {
            queue.push({ depth: top.depth + 1, node: top.node.right });
        }

    }
    return maxDepth;
};