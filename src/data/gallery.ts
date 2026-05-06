import fs from 'node:fs';
import path from 'node:path';

const GALLERY_ROOT = path.join(process.cwd(), 'public', 'gallery');

const CATEGORIES = [
  { folder: 'Colecionaveis', key: 'collectibles' },
  { folder: 'Mini-Eu',       key: 'miniEu'       },
  { folder: 'Laser',         key: 'laser'         },
  { folder: 'Tabletop',      key: 'tabletop'      },
  { folder: 'Cosplay',       key: 'cosplay'       },
  { folder: 'Customizaveis', key: 'custom'        },
] as const;

export interface GalleryItem {
  slug:     string;
  category: string;
  num:      string;
  display:  string;
  final:    string[];
  process:  string[];
}

function readImages(absDir: string, urlDir: string): string[] {
  if (!fs.existsSync(absDir)) return [];
  return fs.readdirSync(absDir)
    .filter(f => /\.(jpe?g|png|webp)$/i.test(f))
    .sort()
    .map(f => `${urlDir}/${f}`);
}

function build(): GalleryItem[] {
  const items: GalleryItem[] = [];

  for (const { folder, key } of CATEGORIES) {
    const catAbs = path.join(GALLERY_ROOT, folder);
    if (!fs.existsSync(catAbs)) continue;

    const nums = fs.readdirSync(catAbs)
      .filter(n => /^\d+$/.test(n))
      .sort();

    for (const num of nums) {
      const itemAbs = path.join(catAbs, num);
      const itemUrl = `/gallery/${folder}/${num}`;

      const display = readImages(path.join(itemAbs, 'Display'), `${itemUrl}/Display`);
      if (display.length === 0) continue;

      const prefix = folder.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-$/, '');

      items.push({
        slug:     `${prefix}-${num}`,
        category: key,
        num,
        display:  display[0],
        final:    readImages(path.join(itemAbs, 'Final'),   `${itemUrl}/Final`),
        process:  readImages(path.join(itemAbs, 'Process'), `${itemUrl}/Process`),
      });
    }
  }

  return items;
}

export const galleryItems = build();
export function getGalleryItems(): GalleryItem[] { return build(); }
