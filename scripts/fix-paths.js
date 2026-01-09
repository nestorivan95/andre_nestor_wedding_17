const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'out');

// Función para procesar un archivo y corregir todas las rutas
function fixPathsInFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Reemplazar todas las variantes de rutas ../_next/ y /_next/ por ./_next/
    // Usar expresiones regulares para capturar diferentes contextos
    
    // En atributos href y src
    content = content.replace(/href="\.\.\/_next\//g, 'href="./_next/');
    content = content.replace(/href='\.\.\/_next\//g, "href='./_next/");
    content = content.replace(/src="\.\.\/_next\//g, 'src="./_next/');
    content = content.replace(/src='\.\.\/_next\//g, "src='./_next/");
    
    // Rutas absolutas /_next/
    content = content.replace(/href="\/_next\//g, 'href="./_next/');
    content = content.replace(/href='\/_next\//g, "href='./_next/");
    content = content.replace(/src="\/_next\//g, 'src="./_next/');
    content = content.replace(/src='\/_next\//g, "src='./_next/");
    
    // En strings de JavaScript (comillas dobles y simples)
    content = content.replace(/"\.\.\/_next\//g, '"./_next/');
    content = content.replace(/'\.\.\/_next\//g, "'./_next/");
    content = content.replace(/"\/_next\//g, '"./_next/');
    content = content.replace(/'\/_next\//g, "'./_next/");
    
    // En funciones url() de CSS
    content = content.replace(/url\("\.\.\/_next\//g, 'url("./_next/');
    content = content.replace(/url\('\.\.\/_next\//g, "url('./_next/");
    content = content.replace(/url\(\.\.\/_next\//g, 'url(./_next/');
    content = content.replace(/url\("\/_next\//g, 'url("./_next/');
    content = content.replace(/url\('\/_next\//g, "url('./_next/");
    content = content.replace(/url\(\/_next\//g, 'url(./_next/');
    
    // Rutas que incluyen el basePath (ej: /andre_nestor_wedding_17/_next/ -> ./_next/)
    content = content.replace(/href="\/andre_nestor_wedding_17\/_next\//g, 'href="./_next/');
    content = content.replace(/href='\/andre_nestor_wedding_17\/_next\//g, "href='./_next/");
    content = content.replace(/src="\/andre_nestor_wedding_17\/_next\//g, 'src="./_next/');
    content = content.replace(/src='\/andre_nestor_wedding_17\/_next\//g, "src='./_next/");
    content = content.replace(/"\/andre_nestor_wedding_17\/_next\//g, '"./_next/');
    content = content.replace(/'\/andre_nestor_wedding_17\/_next\//g, "'./_next/");
    
    // Rutas específicas del proyecto (nombres antiguos y nuevos)
    content = content.replace(/\/andre_nestor_wedding(_17)?\//g, './');
    content = content.replace(/"\/andre_nestor_wedding(_17)?\//g, '"./');
    content = content.replace(/'\/andre_nestor_wedding(_17)?\//g, "'./");
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error procesando ${filePath}:`, error.message);
    return false;
  }
}

// Función recursiva para procesar archivos
function processDirectory(dir) {
  if (!fs.existsSync(dir)) {
    console.error(`El directorio ${dir} no existe`);
    return 0;
  }

  const files = fs.readdirSync(dir);
  let changed = 0;
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      changed += processDirectory(filePath);
    } else if (file.endsWith('.html') || file.endsWith('.js') || file.endsWith('.css') || file.endsWith('.txt') || file.endsWith('.json')) {
      if (fixPathsInFile(filePath)) {
        changed++;
      }
    }
  });
  
  return changed;
}

console.log('Ajustando rutas para GitHub Pages...');
const changed = processDirectory(outDir);
console.log(`✅ Rutas ajustadas correctamente (${changed} archivos modificados)`);
