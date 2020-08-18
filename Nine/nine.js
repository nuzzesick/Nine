
// Nine | The CSS Framework (https://github.com/nuzzesick/nine-css)
// Made with love by Matías Nuccetelli (https://nuzze.now.sh) in Argentina.


window.addEventListener('load', 
  function color() {
    let matchingElements = [];
    let allElements = document.getElementsByTagName('*');
    for (let i = 0; i < allElements.length; i++) {
      if (allElements[i].getAttribute('color') !== null) {
        matchingElements.push(allElements[i]);
      }
    }
    matchingElements.forEach((el) => {
      let className = el.className;
      if (className.search('color') > -1) {
        className = className.split(' ');
        className.forEach((el) => {
          if (el.search('color') > -1) {
            className = el.split('-');
            let style = document.createElement('style');
            style.type = 'text/css';
            style.innerHTML = `.${className[0]}-${className[1]} { color: #${className[1]}; }`;
            document.getElementsByTagName('head')[0].appendChild(style);
          }
        })
      }
    })
    return matchingElements;
  },
);