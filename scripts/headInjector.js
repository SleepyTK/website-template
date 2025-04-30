(function() {
    document.addEventListener("DOMContentLoaded", function() {
      const pageTitle = document.title || 'Website Template';
  
      const headContent = `
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="${pageTitle}">
        <title>${pageTitle}</title>
  
        <link rel="stylesheet" href="../styles/index.css">
      `;
  
      if (!document.querySelector('meta[charset="UTF-8"]')) {
        const head = document.head || document.getElementsByTagName('head')[0];
        head.innerHTML += headContent;
      }
    });
  })();