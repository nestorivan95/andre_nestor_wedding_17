const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'out');

// Función para reemplazar rutas en archivos
function replaceInFile(filePath, search, replace) {
  let content = fs.readFileSync(filePath, 'utf8');
  const originalContent = content;
  
  // Reemplazar todas las ocurrencias
  content = content.split(search).join(replace);
  
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    return true;
  }
  return false;
}

// Función recursiva para procesar archivos
function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  let changed = 0;
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      changed += processDirectory(filePath);
    } else if (file.endsWith('.html') || file.endsWith('.js') || file.endsWith('.css') || file.endsWith('.txt')) {
      // Reemplazar rutas absolutas por relativas
      if (replaceInFile(filePath, '/_next/', './_next/')) changed++;
      if (replaceInFile(filePath, '"/_next/', '"./_next/')) changed++;
      if (replaceInFile(filePath, "'/_next/", "'./_next/")) changed++;
      if (replaceInFile(filePath, 'href="/_next/', 'href="./_next/')) changed++;
      if (replaceInFile(filePath, 'src="/_next/', 'src="./_next/')) changed++;
      if (replaceInFile(filePath, '/andre_nestor_wedding/', './')) changed++;
      if (replaceInFile(filePath, '"/andre_nestor_wedding/', '"./')) changed++;
      if (replaceInFile(filePath, "'/andre_nestor_wedding/", "'./")) changed++;
    }
  });
  
  return changed;
}

console.log('Ajustando rutas para GitHub Pages...');
const changed = processDirectory(outDir);
console.log(`✅ Rutas ajustadas correctamente (${changed} archivos modificados)`);

