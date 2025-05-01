(function () {
    document.addEventListener("DOMContentLoaded", function () {
      const pageTitle = "Website Template";
  
      const head = document.head || document.getElementsByTagName("head")[0];
  
      if (!document.querySelector('meta[charset="UTF-8"]')) {
        const metaCharset = document.createElement("meta");
        metaCharset.setAttribute("charset", "UTF-8");
        head.appendChild(metaCharset);
  
        const metaViewport = document.createElement("meta");
        metaViewport.name = "viewport";
        metaViewport.content = "width=device-width, initial-scale=1.0";
        head.appendChild(metaViewport);
  
        const metaDescription = document.createElement("meta");
        metaDescription.name = "description";
        metaDescription.content = pageTitle;
        head.appendChild(metaDescription);
  
        const title = document.createElement("title");
        title.textContent = pageTitle;
        head.appendChild(title);
      }
    });
  })();