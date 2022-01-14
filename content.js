function isExternal() {
  document.querySelectorAll('a').forEach((target) => {
    const url = target.getAttribute('href');
    const match = url.match(/^([^:\/?#]+:)?(?:\/\/([^\/?#]*))?([^?#]+)?(\?[^#]*)?(#.*)?/);
    if (typeof match[1] === "string" && match[1].length > 0 && match[1].toLowerCase() !== location.protocol) {
      target.setAttribute('target', '_blank');
    }
    if (typeof match[2] === "string" && match[2].length > 0 && match[2].replace(new RegExp(`:(${{"http:": 80, "https:": 443}[location.protocol]})?$`), "") !== location.host) {
      target.setAttribute('target', '_blank');
    }
    return false;
  });

};

window.onload = function() {
  isExternal();
};
