export function appendToBody(tag, content, count) {
    for (let i = 0; i < count; i++) {
        const element = document.createElement(tag);
        element.textContent = content;
        document.body.appendChild(element);
    }
}

export function generateTree(childrenCount, level) {
    function buildNode(depth) {
        const node = document.createElement('div');
        node.classList.add(`item_${depth}`);

        if (depth < level) {
            for (let i = 0; i < childrenCount; i++) {
                node.appendChild(buildNode(depth + 1));
            }
        }

        return node;
    }

    return buildNode(1);
}

export function replaceNodes() {
    const tree = generateTree(2, 3);

    const nodesToReplace = Array.from(tree.querySelectorAll('.item_2'));

    for (const node of nodesToReplace) {
        const section = document.createElement('section');
        section.className = node.className;

        while (node.firstChild) {
            section.appendChild(node.firstChild);
        }

        node.replaceWith(section);
    }

    return tree;
}
