const biomesRoute = `/directory/street/`

const biomes = ["Arid Lodge","Nevada Falls","Boulder Way","Fjord Avenue","Hukosai Knolls","Pagoda Mews","Evergreen Springs","Venus Terrace","Pine Ridge","Loa Crossing","Doja Drive","Galaxy Manor","Harlem Pines","Jade Passage","Orbit Way","Hemp Town","Hoirzon Lakes","Shard Junction","Palm Ferry","Crystal Hill","Firefly Dale","Nefarious Drive","Sapporo Park","Juniper Way","The Highway","Etoile Road","Sunset Crescent","The Turnpike","Bridgewater Boulevard","Summer Court","Haze Boulevard","Fantasy Circle","Phoebus Crossing","Wonder Bluffs","Orange Court","Freedom Valley","Star Lane","Bonnie Freeway","Diablo Cliffs","Elmwood Passage","Guardian Views"]

const priority = '0.5'
const changefreq = 'daily'

function generateBiomesSitemapRows() {
    let output = ''
    for (const biome of biomes) {
        output = output.concat(`<url>
        <loc>https://bizarrebiomes.com${biomesRoute}${biome}</loc>
        <changefreq>${changefreq}</changefreq>
        <priority>${priority}</priority>
      </url>
        `)
    }
    return output
}

export async function get() {

    const urlRows = generateBiomesSitemapRows()

    const headers = {
        'Cache-Control': 'max-age=0, s-maxage=3600',
        'Content-Type': 'application/xml',
    }
    return {
        headers,
        body: `<?xml version="1.0" encoding="UTF-8" ?>
    <urlset
      xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
      xmlns:xhtml="https://www.w3.org/1999/xhtml"
      xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
      xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
      xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
    >
      ${urlRows}
    </urlset>`.trim(),
    }
}