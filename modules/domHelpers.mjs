// Function to create a new DOM element with optional attributes and content
export function newElement(tagName, parent, content, className, attributes) {
    const element = document.createElement(tagName);

    if (content) {
        element.textContent = content;
    }

    if (className) {
        element.className = className;
    }

    if (attributes) {
        for (const attr in attributes) {
            element.setAttribute(attr, attributes[attr]);
        }
    }

    if (parent) {
        parent.appendChild(element);
    }

    return element;
}
