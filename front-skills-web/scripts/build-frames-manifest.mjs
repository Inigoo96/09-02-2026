import { readdirSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');

const framesDir = join(projectRoot, 'frames');
const publicFramesDir = join(projectRoot, 'public', 'frames');
const manifestPath = join(publicFramesDir, 'manifest.json');

// Supported image extensions
const imageExtensions = ['.png', '.jpg', '.jpeg', '.webp'];

// Extract number from filename for sorting
function extractNumber(filename) {
    const match = filename.match(/(\d+)/);
    return match ? parseInt(match[1], 10) : 0;
}

try {
    // Read frames directory
    const files = readdirSync(framesDir);

    // Filter image files
    const imageFiles = files.filter(file => {
        const ext = file.toLowerCase().slice(file.lastIndexOf('.'));
        return imageExtensions.includes(ext);
    });

    // Sort by number in filename, fallback to alphabetical
    imageFiles.sort((a, b) => {
        const numA = extractNumber(a);
        const numB = extractNumber(b);
        if (numA !== numB) return numA - numB;
        return a.localeCompare(b);
    });

    // Create array of paths relative to public
    const framePaths = imageFiles.map(file => `/frames/${file}`);

    // Ensure public/frames directory exists
    if (!existsSync(publicFramesDir)) {
        mkdirSync(publicFramesDir, { recursive: true });
    }

    // Write manifest
    writeFileSync(manifestPath, JSON.stringify(framePaths, null, 2));

    console.log(`✓ Frames manifest generated: ${framePaths.length} frames`);
    console.log(`  Path: ${manifestPath}`);
} catch (error) {
    console.error('Error generating frames manifest:', error.message);
    process.exit(1);
}
