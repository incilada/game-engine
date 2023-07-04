export class StyleManager {
  setStyle(key: string, href: string): HTMLLinkElement {
    const linkEl = this.getLinkElementForKey(key);
    linkEl.setAttribute('href', href);
    return linkEl;
  }

  removeStyle(key: string) {
    const existingLinkElement = this.getExistingLinkElementByKey(key);
    if (existingLinkElement) {
      document.head.removeChild(existingLinkElement);
    }
    console.log('hdede');
  }

  getLinkElementForKey(key: string): HTMLLinkElement {
    return (
      this.getExistingLinkElementByKey(key) ||
      this.createLinkElementWithKey(key)
    );
  }

  getExistingLinkElementByKey(key: string): HTMLLinkElement {
    return document.head.querySelector(
      `link[rel="stylesheet"].${this.getClassNameForKey(key)}`
    );
  }

  createLinkElementWithKey(key: string): HTMLLinkElement {
    const linkEl: HTMLLinkElement = document.createElement('link');
    linkEl.setAttribute('rel', 'stylesheet');
    linkEl.classList.add(this.getClassNameForKey(key));
    document.head.appendChild(linkEl);
    return linkEl;
  }

  getClassNameForKey(key: string) {
    return `style-manager-${key}`;
  }
}
