# Third-party notices

The Field primitive in src/components/ui/field.tsx is adapted from shadcn/ui (shadcn, MIT). Imports were adapted to the local component paths. Button/Label/Separator patterns use the same public primitive conventions. The upstream MIT permission and warranty text is included below.

Copyright (c) 2023 shadcn

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

No external fonts are bundled. The SAASFast flamingo logo is original. Third-party technology logos are sourced from Simple Icons (CC0) and SVGL (MIT); source links and bundled license texts are in [public/technologies/SOURCES.md](public/technologies/SOURCES.md). Brand marks belong to their respective owners. Dependency licenses are retained in installed packages and require a transitive license review before release; the project's MIT license does not relicense dependencies. See docs/dependency-licenses.json for the generated installed-package inventory when present.

## Dependencies with additional notice obligations

The production inventory includes libvips binaries (`@img/sharp-libvips-linux-x64`, LGPL-3.0-or-later; source/build instructions: https://github.com/lovell/sharp-libvips and https://github.com/libvips/libvips), Lightning CSS (MPL-2.0; https://github.com/parcel-bundler/lightningcss), elkjs (EPL-2.0; https://github.com/kieler/elkjs), and caniuse-lite data (CC-BY-4.0; https://github.com/browserslist/caniuse-lite, derived from https://caniuse.com). No third-party dependency is relicensed as MIT by this project. Preserve upstream copyright/license notices and review source/relinking/attribution obligations when redistributing compiled images or changing these dependencies. No source modifications to these libraries are made here. The inventory records exact installed versions and upstream homepages; redistribution review remains a release gate.

## React Bits LetterGlitch

`src/components/effects/letter-glitch.jsx` and its CSS are adapted from the React Bits source supplied by the user (David Haz). The upstream [MIT + Commons Clause license](https://github.com/DavidHDev/react-bits/blob/main/LICENSE.md) is preserved in [src/components/effects/REACT-BITS-LICENSE.md](src/components/effects/REACT-BITS-LICENSE.md). This component is not relicensed under the boilerplate's MIT license; upstream restrictions on redistributing components or template packs apply. Adaptations add a pause option and avoid explicitly losing the WebGL context during React development remounts.
